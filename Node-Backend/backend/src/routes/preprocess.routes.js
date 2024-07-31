import { Router } from "express";
import {getNullValues,getNullValuesByPercentage,getDataDescription} from "../controllers/cleaning.controller.js";



const router = Router();

router.route("/getnullvalues").post(getNullValues);
router.route("/getnullvaluesbypercentage").post(getNullValuesByPercentage);
router.route("/getdatadescription").post(getDataDescription);

export default router;