import { Router } from "express";
import getReport from "../controllers/report.controller.js"

const router = Router();

router.route("/").post(getReport);

export default router;