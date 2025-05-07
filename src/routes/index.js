import { Router } from "express";
import userRoutes from "./user.routes.js";
import requestRoutes from "./request.routes.js";
import requestURLRoutes from "./request-url.routes.js";
import requestQueryRoutes from "./request-query.routes.js";
import requestHeaderRoutes from "./request-header.routes.js";
import responseRoutes from "./response.routes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/request", requestRoutes);
router.use("/request-url", requestURLRoutes);
router.use("/request-query", requestQueryRoutes);
router.use("/request-header", requestHeaderRoutes);
router.use("/response", responseRoutes);

export default router;
