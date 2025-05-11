import { Router } from "express";
import { getRequestQuery } from "../controller/request-query.controller.js";

const router = Router();

router.get("/", getRequestQuery);

export default router;
