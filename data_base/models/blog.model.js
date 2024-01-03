import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
    },{
        timestamps: true
    });

const blogModel = mongoose.model("Blog",blogSchema);

export default blogModel;