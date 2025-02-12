import express from "express";
import cors from "cors";
import { DbConnect } from "./controller/Controller.js";
import router from "./controller/Controller.js"


const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8000;

app.use(express.urlencoded({extended:false}))




app.use("/api/", router)
    
DbConnect();
app.listen(PORT, () => console.log(`server started at port${PORT}`));
