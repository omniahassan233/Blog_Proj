import express from "express";
import {addBlog,getAllBlogs,updateBlog, deleteBlog,getBlogById} from "./controller/blog.controller.js";

const router = express.Router();

router.get("/" , getAllBlogs);
router.get("/:id" , getBlogById);
router.post("/" , addBlog);
router.put("/",updateBlog);
router.delete("/:id",deleteBlog);

export default router;