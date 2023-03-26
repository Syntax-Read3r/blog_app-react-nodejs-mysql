import { db } from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

const jwtkey = process.env.JWT_PRIVATE_KEY

// NOTE: REGISTER

export const register = (req, res) => {
	//CHECK EXISTING USER
	const selectQuery =
		"SELECT COUNT(*) AS count FROM users WHERE email = ? OR username = ?";
	const insertQuery =
		"INSERT INTO users(`username`,`email`,`password`) VALUES (?,?,?)";

	db.query(selectQuery, [req.body.email, req.body.username], (err, data) => {
		if (err) return res.status(500).json(err);
		if (data[0].count) return res.status(409).json("User already exists!");

		//Hash the password and create a user
		const salt = bcrypt.genSaltSync(10);
		let hash;
		try {
			hash = bcrypt.hashSync(req.body.password, salt);
		} catch (error) {
			console.error("Error occurred while hashing password:", error);
			return res.status(500).json({ error: error.message });
		}
		const values = [req.body.username, req.body.email, hash];

		db.query(insertQuery, values, (err, data) => {
			if (err) return res.status(500).json(err);
			return res.status(200).json("User has been created.");
		});
	});
};

export const login = (req, res) => {
	//CHECK USER

	const q = "SELECT * FROM users WHERE username = ?";

	db.query(q, [req.body.username], (err, data) => {
		if (err) return res.status(500).json(err);
		if (data.length === 0) return res.status(404).json("User not found!");

		//Check password
		const isPasswordCorrect = bcrypt.compareSync(
			req.body.password,
			data[0].password
		);

		if (!isPasswordCorrect)
			return res.status(400).json("Wrong username or password!");

		const token = jwt.sign({ id: data[0].id }, jwtkey);
		const { password, ...other } = data[0];

		res
			.cookie("access_token", token, {
				httpOnly: true,
			})
			.status(200)
			.json(other);
	});
};

export const logout = (req, res) => {
	res
		.clearCookie("access_token", {
			sameSite: "none",
			secure: true,
		})
		.status(200)
		.json("User has been logged out.");
};
