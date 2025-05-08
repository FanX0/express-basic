import { Router } from "express";
import { getResponseBody } from "../controller/response-body.controller.js";

const router = Router();

router.get("/", getResponseBody);

export default router;
