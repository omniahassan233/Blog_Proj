import blogModel from "../../../../data_base/models/blog.model.js";

export const getAllBlogs = async(req,res)=>{
    // let data = await blogModel.find().populate("createdBy");  //populate is to get all the data of the user who created the blog in the response
    let data = await blogModel.find().populate("createdBy","name -_id"); //to get only name in the createdBy object
    res.json({message:"addBlog",data})
}

export const  getBlogById = async(req,res)=>{
    let {id} = req.params
    let data = await blogModel.findById(id).populate("createdBy","name -_id"); //to get only name in the createdBy object
    res.json({message:"addBlog",data})
}

export const addBlog = async (req,res)=>{
    let {title, description, createdBy} = req.body;
    let addedBlog = await blogModel.insertMany({title, description, createdBy});
    res.json({message:"Blog is added successfully",addedBlog})
} 


//1- updateOne -----> returns count
//2- updateMany -----> returns count
//3- update (depricated)
//4- findByIdAndUpdate -----> returns document(object) , old or new object depending on new flag
//5- findOneAndUpdate -----> returns document(object) , old or new object depending on new flag
//6- findOneAndReplace -----> returns document(object) , updates only provided attributes and remove other attributtes, it litterally is replacing existing object with new one

export const updateBlog = async (req,res)=>{
    let {_id ,description} = req.body;
    try{
    //     let updatedBlog = await blogModel.updateMany({description:"good"},{description},{new:true}); // this will find all records where description = good and update them with new description
    //    let updatedBlog = await blogModel.findByIdAndUpdate(_id,{description},{new:true});
    //    res.json({message:"Blog is updated successfully",updatedBlog})
    let updated = await blogModel.findOneAndUpdate({_id},{description});
    updated ? res.json({message:"Blog is updated successfully",updated}) : res.json({message:"Error Blog is not updated"});
    }catch(err){
        res.json({message:"Error happened",err})
    }
} 


// delete vs remove : remove is soft delete.
// 1- deleteOne -----> returns count
// 2- deleteMany -----> returns count
// 3- findByIdAndDelete -----> returns the object
// 4- findByIdAndRemove (depricated)
// 5- remove (depricated)
// 6- findOneAndRemove (depricated)
// 7- findOneAndDelete -----> returns the object

export const deleteBlog = async (req,res)=>{
    let {id} = req.params;
    let deleted = await blogModel.findOneAndDelete({_id:id});
    if(deleted)
        res.json({message:"Blog is deleted successfully"});
    else
        res.json({message:"Blog not found"});
}