import { Router } from "express";
import { getRequestHeader } from "../controller/request-header.controller.js";

const router = Router();

router.get("/", getRequestHeader);

export default router;
