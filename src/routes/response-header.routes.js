import { Router } from "express";
import { getResponseHeader } from "../controller/response-header.controller.js";

const router = Router();

router.get("/", getResponseHeader);
export default router;
