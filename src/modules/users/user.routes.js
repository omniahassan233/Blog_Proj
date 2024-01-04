import express from "express";
import { getAllUsers, signIn, signUp } from "./controller/user.controller.js";

const router = express.Router();

router.post("/signup" , signUp);
router.post("/signin" , signIn);
router.get("/" , getAllUsers);

export default router;