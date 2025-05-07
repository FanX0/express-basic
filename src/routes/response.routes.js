import { Router } from "express";
import { getResponse } from "../controller/response.controller";

const router = Router();

router.get("/", getResponse);

export default router;
