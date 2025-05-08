import { Router } from "express";
import { getRequestBody } from "../controller/request-body.controller";

const router = Router();
router.get("/", getRequestBody);

export default router;
