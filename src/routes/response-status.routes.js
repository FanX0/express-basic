import { Router } from "express";
import { getResponseStatus } from "../controller/response-status.controller.js";

const router = Router();

router.get("/", getResponseStatus);

export default router;
