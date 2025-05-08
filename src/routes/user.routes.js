import { Router } from "express";
import { getUsers } from "../controller/user.controller.js";
import { addPoweredHeaderMiddleware } from "../middleware/add-powered-header.middleware.js";
const router = Router();

router.get("/", addPoweredHeaderMiddleware, getUsers);

export default router;
