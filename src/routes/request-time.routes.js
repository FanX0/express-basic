import { Router } from "express";
import { requestTime } from "../controller/request-time.controller";
import { requestTimeMiddleware } from "../middleware/request-time.middleware";

const router = Router();
router.get("/", requestTimeMiddleware, requestTime);

export default router;
