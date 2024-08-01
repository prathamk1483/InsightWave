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


const DropColumns = asyncHandler(async(req,res)=>{
    const data ={
        "link" : req.body.link,
        "cols" : req.body.cols
    };
    const requestTo = "preprocess/dropcolumn/";
    const successMessage = "Dropped the given Columns Sucessfully";
    const failureMessage = "Failed to drop the given Columns";
    
    const finalResponse = await overallResponse(requestTo,data,successMessage,failureMessage);
    res.status(201).json(finalResponse);
});


const FillMissingValues = asyncHandler(async(req,res)=>{
    const data ={
        "link" : req.body.link,
        "method":req.body.method,
        "cols" : req.body.cols
    };
    const requestTo = "preprocess/fillmissingvalues/";
    const successMessage = "Successfully filled the missing values in given columns";
    const failureMessage = "Failed to fill the missing values in given columns";
    
    const finalResponse = await overallResponse(requestTo,data,successMessage,failureMessage);
    res.status(201).json(finalResponse);
});


const OneHotEncode = asyncHandler(async(req,res)=>{
    const data ={
        "link" : req.body.link,
        "cols" : req.body.cols
    };
    const requestTo = "preprocess/onehotencode/";
    const successMessage = "Successfully encoded the given column";
    const failureMessage = "Failed to encode the given columns";
    
    const finalResponse = await overallResponse(requestTo,data,successMessage,failureMessage);
    res.status(201).json(finalResponse);
});


const ScaleFeatures = asyncHandler(async(req,res)=>{
    const data ={
        "link" : req.body.link,
        "method":req.body.method,
        "cols" : req.body.cols
    };
    const requestTo = "preprocess/scalefeatures/";
    const successMessage = "Scaled the features Successfully";
    const failureMessage = "Failed to Scale the features";
    
    const finalResponse = await overallResponse(requestTo,data,successMessage,failureMessage);
    res.status(201).json(finalResponse);
});



export  {
    getNullValues,
    getNullValuesByPercentage,
    getDataDescription,
    DropColumns,
    OneHotEncode,
    ScaleFeatures,
    FillMissingValues,
};