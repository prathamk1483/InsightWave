import { Router } from "express";
import axios from "axios";


const router = Router();

router.route("/nullvalues").post(async (req,res)=>{
    let pythonResponse = null;
    await axios.post('http://127.0.0.1:8000/preprocess/nullvalues/', {
        link: `${req.body.link}`,
      })
      .then(function (response) {
        // console.log(response.data);
        res.status(200).send(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    //   console.log(pythonResponse);
});

router.route("/description").post((req,res)=>{
    res.send(200,{message:"Getting the Description"});
});

export default router;