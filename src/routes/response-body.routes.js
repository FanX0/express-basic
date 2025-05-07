import { Router } from "express";
import { getResponseBody } from "../controller/response-body.controller";

const router = Router();

router.get("/", getResponseBody);

export default router;
