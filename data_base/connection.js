import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect("mongodb://localhost:27017/blogs").then(()=>{
        console.log("Connected to DB successfully ^^");
    }).catch((err) => {
        console.log("Could not connect to DB, "+err);
    })
}