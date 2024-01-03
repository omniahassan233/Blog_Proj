import express from "express";
import { getAllUsers , signUp} from "./controller/user.controller.js";

const router = express.Router();

router.post("/signup" , signUp);
router.get("/" , getAllUsers);

export default router;