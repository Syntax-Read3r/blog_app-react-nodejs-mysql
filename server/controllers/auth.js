import { db } from "../database/db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
	// Check existing user
	const query = "SELECT * FROM users WHERE email = ? OR username = ?";

	db.query(query, [req.body.email, req.body.username], (err, data) => {
		if (err) {
			return res.json(err);
		} else if (data.length) {
			res.status(409).json("User Already Exists!");
		} else {
			// Then create a user
			// first hash the password
			const salt = bcrypt.genSaltSync(10);
			const hash = bcrypt.hashSync(req.body.password, salt);

			const query =
				"INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
			const queryValues = [
				req.body.username,
				req.body.email,
				hash, //Here we don't use req.body.password, instead we use the encrypted password (hash)
			];

			db.query(query, [queryValues], (err, data) => {
				if (err) {
					return res.json(err);
				} else {
					return res.status(200).json("User has been created");
				}
			});
		}
	});
};

export const login = (req, res) => {
	res.json("from AUTH login controller");
};

export const logout = (req, res) => {
	res.json("from AUTH logout controller");
};
