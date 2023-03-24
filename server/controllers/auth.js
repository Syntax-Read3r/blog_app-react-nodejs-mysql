import { db } from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

//NOTE: defines a function `login` that takes two parameters, a request object and a response object
export const login = (req, res) => {
	// Define a SQL query to select all records from the `users` table where the username matches the provided `req.body.username`
	const q = "SELECT * FROM users WHERE username = ?";

	/* Execute the SQL query using `db.query` method of the `db` library. The query returns an array of rows which match the criteria.
    To get the result set of the query, pass in the following arguments:
        - q: the query string
        - [req.body.username]: positional parameter to substitute into the `?` in the query string
        - a callback function to handle the results of the query. The callback function takes two parameters:
            - err: error object, if the query execution results in an error. Null or undefined otherwise
            - data: the result set of the query 
    */
	db.query(q, [req.body.username], (err, data) => {
		// If there's an error executing the query, return it as JSON
		if (err) {
			return res.json(err);

			// Otherwise, if no rows are returned for the requested user, return 404 with "User Not Found!" message
		} else if (data.length === 0) {
			return res.status(404).json("User Not Found!");

			// If the user is found, check if the password matches with the hashed password stored in the database
		} else {
			// Hash the given password using bcrypt and compare it with the stored hash
			const isPasswordCorrect = bcrypt.compareSync(
				req.body.password,
				data[0].password
			);

			// If the password does not match, send 400 status code with "Incorrect Password!" message
			if (!isPasswordCorrect) {
				return res.status(400).json("Incorrect Password!");

				// If the password matches with the stored hash, generate a JSON web token (JWT) using the user's ID
			} else {
				// Use `jsonwebtoken` library to create an encrypted token containing the user ID
				const token = jwt.sign({ id: data[0].id }, "jwtkey"); //COMMENT:It's preferrable to
				// generate a random key and store it in a .env file.
				const { password, ...other } = data[0];

				res.cookie("access_token", token, {
						httpOnly: true,
					})
					.status(200)
					.json(other);
			}
		}
	});
};

export const logout = (req, res) => {
	res.json("from AUTH logout controller");
};
