import { Router } from "express";
import { getUsers } from "../controller/user.controller.js";
import { addPoweredHeaderMiddleware } from "../middleware/add-powered-header.middleware.js";
import { apiKeyMiddleware } from "../middleware/api-key.middleware.js";
const router = Router();

router.get("/", addPoweredHeaderMiddleware, apiKeyMiddleware, getUsers);

export default router;
