import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"sqluser",
  password: process.env.DB_KEY,
  database:"blog_app"
})