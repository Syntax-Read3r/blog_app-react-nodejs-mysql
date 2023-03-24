import express from "express";
import { addPost } from "../controllers/post.js";

const router = express.Router();

router.get("/register", addPost);

export default router;
