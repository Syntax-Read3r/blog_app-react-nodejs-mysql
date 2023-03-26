import mysql from "mysql";
import dotenv from 'dotenv';

dotenv.config()


export const db = mysql.createConnection({
	host: "localhost",
	user: process.env.DB_USERNAME,
	password: process.env.DB_KEY,
	database: "blog_app",
});
