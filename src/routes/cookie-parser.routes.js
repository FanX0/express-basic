import { Router } from "express";
import { getCookieParser } from "../controller/cookie-parser.controller.js";

const router = Router();

router.get("/", getCookieParser);

export default router;
