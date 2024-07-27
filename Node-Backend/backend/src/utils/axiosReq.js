import axios from "axios";

const axiosReq = async (requestTo, data) => {
    console.log("Sending request to Python");
    var resdata ;
    const response = await axios.post(`http://127.0.0.1:8000/${requestTo}`, data);
    resdata = response.data;

    return resdata;
};

export {axiosReq};
