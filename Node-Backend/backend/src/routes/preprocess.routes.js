import { Router } from "express";
import {
    getNullValues,
    getNullValuesByPercentage,
    getDataDescription,
    DropColumns,
    FillMissingValues,
    OneHotEncode,
    ScaleFeatures
} from "../controllers/cleaning.controller.js";



const router = Router();

router.route("/getnullvalues").post(getNullValues);
router.route("/getnullvaluesbypercentage").post(getNullValuesByPercentage);
router.route("/getdescription").post(getDataDescription);
router.route("/dropcolumn").post(DropColumns);
router.route("/fillmissingvalues").post(FillMissingValues);
router.route("/onehotencode").post(OneHotEncode);
router.route("/scale_features").post(ScaleFeatures);

export default router;