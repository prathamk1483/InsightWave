import { asyncHandler } from "../utils/asynhandler.js";
import overallResponse from "../utils/PythonCall.js";

const getHistogram = asyncHandler(async(req,res)=>{
    const data ={
        "link" : req.body.link,
        "cols" : req.body.cols,
    };
    const requestTo = "visualize/gethistogram/";
    const successMessage = "Received the histogram successfully";
    const failureMessage = "Failed to the histogram values";
    
    const finalResponse = await overallResponse(requestTo,data,successMessage,failureMessage);

    res.status(201).json(finalResponse);
});

export {
    getHistogram
};