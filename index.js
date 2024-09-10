import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import data from './data.json' assert { type: "json" };

const app = express();

app.get("/user-info/:id?",(req, res)=>{
    const id = req.params.id;
    if (!id) {
        return res.json(data);
    } else if (typeof(parseInt(id,10))=="number"){
        res.json(data[parseInt(id,10)]);
    }
});

app.listen(3000, ()=> console.log(`Api server is running at http://localhost:${3000}/user-info/1`));