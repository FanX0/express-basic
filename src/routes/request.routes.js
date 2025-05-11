import { Router } from "express";
import { getRequest } from "../controller/request.controller.js";

const router = Router();

router.get("/", getRequest);

export default router;
