import { Router } from "express";
import { getUsers } from "../controller/user.controller.js";
import { addPoweredHeader } from "../middleware/add-powered-header.js";
const router = Router();

router.get("/", addPoweredHeader, getUsers);

export default router;
