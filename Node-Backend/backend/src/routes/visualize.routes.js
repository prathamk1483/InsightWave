import { Router } from "express";
import { getHistogram } from "../controllers/visualising.controller.js"

const router = Router();

router.route("/gethistogram").post(getHistogram);

export default router;