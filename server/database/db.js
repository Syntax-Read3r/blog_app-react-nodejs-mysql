import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"",
  password: '',
  database:"blog_app"
})