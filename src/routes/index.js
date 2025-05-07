import { Router } from "express";
import userRoutes from "./user.routes.js";
import requestRoutes from "./request.routes.js";
import requestURLRoutes from "./request-url.routes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/request", requestRoutes);
router.use("/request-url", requestURLRoutes);

export default router;
