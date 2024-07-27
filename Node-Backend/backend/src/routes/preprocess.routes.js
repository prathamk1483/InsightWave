import { Router } from "express";
import getNullValues from "../controllers/cleaning.controller.js"



const router = Router();

// router.route("/getnullvalues").post(async (req,res)=>{
//     let pythonResponse = null;
//     await axios.post('http://127.0.0.1:8000/preprocess/nullvalues/', {
//         link: `${req.body.link}`,
//       })
//       .then(function (response) {
//         res.status(200).send(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
// });

router.route("/getnullvalues").post(getNullValues);

router.route("/description").post((req,res)=>{
    res.send(200,{message:"Getting the Description"});
});

export default router;