import { Router } from "express";
import userRoutes from "./user.routes.js";
import requestRoutes from "./request.routes.js";
import requestURLRoutes from "./request-url.routes.js";
import requestQueryRoutes from "./request-query.routes.js";
import requestHeaderRoutes from "./request-header.routes.js";
import responseRoutes from "./response.routes.js";
import responseStatusRoutes from "./response-status.routes.js";
import responseHeaderRoutes from "./response-header.routes.js";
import responseBodyRoutes from "./response-body.routes.js";
import responseRedirectRoutes from "./response-redirect.routes.js";
import requestTimeRoutes from "./request-time.routes.js";
import productsRoutes from "./products.routes.js";
import requestBodyRoutes from "./request-body.routes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/request", requestRoutes);
router.use("/request-url", requestURLRoutes);
router.use("/request-query", requestQueryRoutes);
router.use("/request-header", requestHeaderRoutes);
router.use("/response", responseRoutes);
router.use("/response-status", responseStatusRoutes);
router.use("/response-header", responseHeaderRoutes);
router.use("/response-body", responseBodyRoutes);
router.use("/response-redirect", responseRedirectRoutes);
router.use("/request-time", requestTimeRoutes);
router.use("/products/*filepath.json", productsRoutes);
router.use("/request-body", requestBodyRoutes);

export default router;
