import { Router } from "express";
import { getRequestBodyForm } from "../controller/request-body-form.controller.js";

const router = Router();
router.get("/", getRequestBodyForm);

export default router;
