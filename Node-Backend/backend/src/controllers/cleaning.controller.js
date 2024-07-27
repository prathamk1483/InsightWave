import { asyncHandler } from "../utils/asynhandler.js";
import overallResponse from "../utils/PythonCall.js";


const getNullValues = asyncHandler(async(req,res)=>{
    const data ={
        "link" : req.body.link
    };
    const requestTo = "preprocess/nullvalues/";
    const successMessage = "Received null values successfully";
    const failureMessage = "Failed to receive null values";
    
    const finalResponse = await overallResponse(requestTo,data,successMessage,failureMessage);
    console.log("finalReponse by controller  "+finalResponse);
    res.status(201).json(finalResponse);
});

const getNullValuesByPercentage = asyncHandler(async(req,res)=>{

});

export  {
    getNullValues,
    getNullValuesByPercentage
};