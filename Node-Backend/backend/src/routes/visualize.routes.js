import { Router } from "express";
import { 
    getHistogram,
    getHeatmap,
    getPairplot,
    getBoxlot,
    getScatterplot
 } from "../controllers/visualising.controller.js"

const router = Router();

router.route("/gethistogram").post(getHistogram);
router.route("/heatmap").post(getHeatmap);
router.route("/pairplot").post(getPairplot);
router.route("/boxplot").post(getBoxlot);
router.route("/scatterplot").post(getScatterplot);

export default router;