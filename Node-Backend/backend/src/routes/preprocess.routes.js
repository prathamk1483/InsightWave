import { Router } from "express";
import {getNullValues,getNullValuesByPercentage,getDataDescription} from "../controllers/cleaning.controller.js";



const router = Router();

router.route("/getnullvalues").post(getNullValues);
router.route("/getnullvaluesbypercentage").post(getNullValuesByPercentage);
router.route("/getdatadescription").post(getDataDescription);

router.route("/description").post((req,res)=>{
    res.send(200,{message:"Getting the Description"});
});

export default router;