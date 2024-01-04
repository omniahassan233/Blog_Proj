import blogModel from "../../../../data_base/models/blog.model.js";

export const addBlog = async (req,res)=>{
    let {title, description, createdBy} = req.body;
    let addedBlog = await blogModel.insertMany({title, description, createdBy});
    res.json({message:"Blog is added successfully",addedBlog})
} 

export const getAllBlogs = async(req,res)=>{
    let data = await blogModel.find().populate("createdBy");  //populate is to get all the data of the user who created the blog in the response
    res.json({message:"addBlog",data})
} 