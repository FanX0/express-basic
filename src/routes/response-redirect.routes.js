import { Router } from "express";
import { getResponseRedirect } from "../controller/response-redirect.controller";

const router = Router();

router.get("/", getResponseRedirect);

export default router;
