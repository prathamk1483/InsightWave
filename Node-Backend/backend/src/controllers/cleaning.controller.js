import { asyncHandler } from "../utils/asynhandler.js";
import overallResponse from "../utils/PythonCall.js";


const getNullValues = asyncHandler(async(req,res)=>{
    const data ={
        "link" : req.body.link
    };
    const requestTo = "preprocess/getnullvalues/";
    const successMessage = "Received null values successfully";
    const failureMessage = "Failed to receive null values";
    
    const finalResponse = await overallResponse(requestTo,data,successMessage,failureMessage);

    res.status(201).json(finalResponse);
});

const getNullValuesByPercentage = asyncHandler(async(req,res)=>{
    const data ={
        "link" : req.body.link
    };
    const requestTo = "preprocess/getnullvaluesbypercentage/";
    const successMessage = "Received null values percentage successfully";
    const failureMessage = "Failed to receive null values";
    
    const finalResponse = await overallResponse(requestTo,data,successMessage,failureMessage);
    res.status(201).json(finalResponse);
});

const getDataDescription = asyncHandler(async(req,res)=>{
    const data ={
        "link" : req.body.link
    };
    const requestTo = "preprocess/getdescription/";
    const successMessage = "Received decription successfully";
    const failureMessage = "Failed to receive description";
    
    const finalResponse = await overallResponse(requestTo,data,successMessage,failureMessage);
    res.status(201).json(finalResponse);
});

export  {
    getNullValues,
    getNullValuesByPercentage,
    getDataDescription
};