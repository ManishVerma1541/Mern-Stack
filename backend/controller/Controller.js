import mongoose from "mongoose";
import express from "express";
import { AddPerson,getPersonByid,updatePersonByid,userRagister,Login, deletePersonById} from "../view/View.js";


const router = express.Router();


router.post('/register',userRagister)
router.post('/login',Login)
router.post('/add',AddPerson);
router.get('/getperson/:id',getPersonByid);
router.patch('/updateperson/:id',updatePersonByid);
router.delete('/deleteperson/:id',deletePersonById,)

export const DbConnect = async()=>{
   try{
    const response = await mongoose.connect("mongodb+srv://manishverma1541:Mvee1541@cluster0.2xwmt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    if(response){
        console.log("Database is Connect Successfully")
    }
   }
   catch(error){
    console.log("error while connecting database " ,  error)
   }
}

export default router
