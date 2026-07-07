import { Router } from "express";
import authRoutes from "./auth.routes";
import authenticate from "../middleware/auth.middleware";
const router = Router();
router.use("/auth", authRoutes);

export default router;