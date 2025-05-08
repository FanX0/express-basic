import { Router } from "express";
import { requestTime } from "../controller/request-time.controller.js";
import { requestTimeMiddleware } from "../middleware/request-time.middleware.js";

const router = Router();
router.get("/", requestTimeMiddleware, requestTime);

export default router;
