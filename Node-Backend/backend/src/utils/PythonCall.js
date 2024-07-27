import { axiosReq } from "../utils/axiosReq.js";
import { ApiResponse} from "./ApiResponse.js";

const overallResponse = async (requestTo,data,successMessage,failureMessage) =>{
    var pythonResponse,finalResponse;
    try{
        pythonResponse = await axiosReq(requestTo,data);
        finalResponse =  new ApiResponse(200,pythonResponse,`${successMessage}`);
    }
    catch(error){
        pythonResponse = {
            "Error" : error
        };
        finalResponse =  new ApiResponse(400,pythonResponse,`${failureMessage}`);
    }
    return finalResponse;
};

export default overallResponse;