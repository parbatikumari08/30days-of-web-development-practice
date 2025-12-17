import express from "express";
const app = express();
app.use(express.json());

app.get("/", (_,res)=> res.send("Backend running"));
app.listen(4000);
