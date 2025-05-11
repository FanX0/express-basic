import { Router } from "express";
import { getRequestURL } from "../controller/request-url.controller.js";

const router = Router();

router.get("/", getRequestURL);

export default router;
