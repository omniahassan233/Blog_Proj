import express from "express";
import {addBlog,getAllBlogs} from "./controller/blog.controller.js";

const router = express.Router();

router.post("/" , addBlog);
router.get("/" , getAllBlogs);

export default router;