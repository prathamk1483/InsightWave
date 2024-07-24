import express from "express";
import preprocessRouter from "./routes/preprocess.routes.js";

const app = express();


app.use(express.json({limit:"15kb"}));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.get('/',(req,res)=>{
    res.status(200).send({message: "Welcome to InsightWave"});
});

app.use('/api/v1/preprocess',preprocessRouter);

export default app;