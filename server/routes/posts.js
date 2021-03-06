import express from "express";
import { getPosts, createPost, updatePost } from "../controllers/posts.js"

const router = express.Router();
router.get('/', getPosts);
router.post('/createpost', createPost);
router.patch('/:id', updatePost);

export default router;