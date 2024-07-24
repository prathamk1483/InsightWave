import { Router } from "express";


const router = Router();

router.route("/nullvalues").post((req,res)=>{
    res.send(200,{message:"Null Values Processing"});
});

router.route("/description").post((req,res)=>{
    res.send(200,{message:"Getting the Description"});
});

export default router;