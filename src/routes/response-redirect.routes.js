import { Router } from "express";
import { getResponseRedirect } from "../controller/response-redirect.controller.js";

const router = Router();

router.get("/", getResponseRedirect);

export default router;
