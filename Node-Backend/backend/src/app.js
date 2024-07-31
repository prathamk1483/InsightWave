import express from "express";
import preprocessRouter from "./routes/preprocess.routes.js";
import visualizeRouter from "./routes/visualize.routes.js";

const app = express();


app.use(express.json({limit:"15kb"}));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.get('/',(req,res)=>{
    res.status(200).send({message: "Welcome to InsightWave Node Backend"});
});

app.use('/api/v1/preprocess',preprocessRouter);
app.use('/api/v1/visualize',visualizeRouter);

export default app;