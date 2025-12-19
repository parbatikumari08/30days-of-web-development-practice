import Blog from "../day15/Blog.js";
import express from "express";
const router = express.Router();

router.post("/blog", async (req, res) => {
  const post = await Blog.create(req.body);
  res.json(post);
});

router.get("/blog", async (req, res) => {
  const posts = await Blog.find();
  res.json(posts);
});

export default router;
