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


const getHeatmap = asyncHandler(async(req,res)=>{
    const data ={
        "link" : req.body.link,
        "cols" : req.body.cols,
    };
    const requestTo = "visualize/heatmap/";
    const successMessage = "Received the Heat-Map successfully";
    const failureMessage = "Failed to get the Heat-Map values";
    
    const finalResponse = await overallResponse(requestTo,data,successMessage,failureMessage);

    res.status(201).json(finalResponse);
});


const getPairplot = asyncHandler(async(req,res)=>{
    const data ={
        "link" : req.body.link,
        "cols" : req.body.cols,
    };
    const requestTo = "visualize/pairplot/";
    const successMessage = "Received the Pair-Plot successfully";
    const failureMessage = "Failed to the Pair-Plot values";
    
    const finalResponse = await overallResponse(requestTo,data,successMessage,failureMessage);

    res.status(201).json(finalResponse);
});


const getBoxlot = asyncHandler(async(req,res)=>{
    const data ={
        "link" : req.body.link,
        "cols" : req.body.cols,
    };
    const requestTo = "visualize/boxplot/";
    const successMessage = "Received the Box Plot successfully";
    const failureMessage = "Failed to the Box Plot values";
    
    const finalResponse = await overallResponse(requestTo,data,successMessage,failureMessage);

    res.status(201).json(finalResponse);
});


const getScatterplot = asyncHandler(async(req,res)=>{
    const data ={
        "link" : req.body.link,
        "cols" : req.body.cols,
        "x_col": req.body.x_col,
        "y_col": req.body.y_col
    };
    const requestTo = "visualize/scatterplot/";
    const successMessage = "Received the Scatter Plot successfully";
    const failureMessage = "Failed to the Scatter Plot values";
    
    const finalResponse = await overallResponse(requestTo,data,successMessage,failureMessage);

    res.status(201).json(finalResponse);
});

export {
    getHistogram,
    getHeatmap,
    getBoxlot,
    getPairplot,
    getScatterplot,
};