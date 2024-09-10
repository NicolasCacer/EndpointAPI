import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import data from './data.json' assert { type: "json" };

const app = express();

app.get("/user-info",(req, res)=>{
    res.json(data);
});

app.listen(3000, ()=> console.log(`Api server is running at http://localhost:${3000}/user-info`));