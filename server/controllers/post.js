import { db } from "../database/db.js";
import jwt from "jsonwebtoken";

// Using prepared statements to prevent SQL injections.
const SELECT_ALL_POSTS = "SELECT * FROM posts";
const SELECT_POST_BY_ID =
	"SELECT p.id, `username`, `title`, `content`, p.img, u.img AS userImg, `cat` FROM users u JOIN posts p ON u.id = p.user_id WHERE p.id = ?";
const INSERT_POST =
	"INSERT INTO posts(`title`, `content`, `img`, `cat`, `user_id`) VALUES (?, ?, ?, ?, ?)";
const DELETE_POST = "DELETE FROM posts WHERE `id` = ? AND `user_id` = ?";
const UPDATE_POST =
	"UPDATE posts SET `title`=?,`content`=?,`img`=?,`cat`=? WHERE `id` = ? AND `user_id` = ?";

export const getPosts = (req, res) => {
	const category = req.query.cat;
	const query = category ? "SELECT * FROM posts WHERE cat=?" : SELECT_ALL_POSTS;

	db.query(query, [category], (error, data) => {
		if (error) {
			return res.status(500).send({ error: "Internal server error" });
		}
		return res.status(200).json(data);
	});
};

export const getPost = (req, res) => {
	const postId = req.params.id;

	db.query(SELECT_POST_BY_ID, [postId], (error, data) => {
		if (error) {
			return res.status(500).json({ error: "Internal server error" });
		}
		return res.status(200).json(data[0]);
	});
};

export const addPost = (req, res) => {
	const token = req.cookies.access_token;

	if (!token) {
		return res.status(401).json({ error: "Not authenticated!" });
	}

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) {
			return res.status(403).json({ error: "Token is not valid!" });
		}

		const { title, content, img, cat } = req.body;
		const values = [title, content, img, cat, userInfo.id];

		db.query(INSERT_POST, values, (error, data) => {
			if (error) {
				return res.status(500).json({ error: "Internal server error" });
			}
			return res.status(201).json({ success: "Post has been created." });
		});
	});
};

export const deletePost = (req, res) => {
	const token = req.cookies.access_token;

	if (!token) {
		return res.status(401).json({ error: "Not authenticated!" });
	}

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) {
			return res.status(403).json({ error: "Token is not valid!" });
		}

		const postId = req.params.id;

		db.query(DELETE_POST, [postId, userInfo.id], (error, data) => {
			if (error || !data.affectedRows) {
				return res
					.status(404)
					.json({ error: "Post not found or invalid user!" });
			}
			return res.json({ success: "Post has been deleted!" });
		});
	});
};

export const updatePost = (req, res) => {
	const token = req.cookies.access_token;

	if (!token) {
		return res.status(401).json({ error: "Not authenticated!" });
	}

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) {
			return res.status(403).json({ error: "Token is not valid!" });
		}

		const postId = req.params.id;
		const { title, content, img, cat } = req.body;

		db.query(
			UPDATE_POST,
			[title, content, img, cat, postId, userInfo.id],
			(error, data) => {
				if (error || !data.affectedRows) {
					return res
						.status(404)
						.json({ error: "Post not found or invalid user!" });
				}
				return res.json({ success: "Post has been updated." });
			}
		);
	});
};
