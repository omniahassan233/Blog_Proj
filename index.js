import cors from "cors";
import express from "express";
import { dbConnection } from "./data_base/connection.js";
import userRoutes from "./src/modules/users/user.routes.js";
import blogRoutes from "./src/modules/blogs/blog.routes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

dbConnection();

app.get("/" , (req,res)=> res.json({message:"Hi from Blog App"}))
app.use("/user",userRoutes)
app.use("/blog",blogRoutes)

app.listen(port, ()=>{
    console.log("Server is up and running on port: "+port+" ^^");
});