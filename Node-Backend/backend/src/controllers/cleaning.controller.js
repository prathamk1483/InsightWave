import axios from "axios";
import { asyncHandler } from "../utils/asynhandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { axiosReq } from "../utils/axiosReq.js";

const getNullValues = asyncHandler(async(req,res)=>{
    const data ={"link" : req.body.link};
    const requestTo = "preprocess/nullvalues/";
    const pythonResponse = await axiosReq(requestTo,data);
    return res.status(201).json( new ApiResponse(200, pythonResponse, "Received Link Successfully"));
});

export default getNullValues;