import { asyncHandler } from "../utils/asynhandler.js";
import overallResponse from "../utils/PythonCall.js";

const getReport = asyncHandler(async(req,res)=>{
    const data ={
        "link" : req.body.link
    };
    const requestTo = "report/";
    const successMessage = "Received the report successfully";
    const failureMessage = "Failed to receive the report";
    
    const finalResponse = await overallResponse(requestTo,data,successMessage,failureMessage);

    res.status(201).json(finalResponse);
});

export default getReport;