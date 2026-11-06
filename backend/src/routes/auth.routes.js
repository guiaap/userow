import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { login } from "../controllers/auth.controller.js";

const router = Router();

router.post("/", authMiddleware, login);

export default router;