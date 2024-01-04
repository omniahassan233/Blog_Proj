import bcrypt from "bcrypt";
import userModel from "../../../../data_base/models/user.model.js";

export const signUp = async(req,res) =>{
    let {name,email,password} = req.body;

    //find --> [] returns array  and if not exist empty array
    // let foundedUser = await userModel.find({email});
    // if(foundedUser.length != 0) res.json({message:"user already exists"});

    //findOne --> returns object and if not exist will return null
    let foundedUser = await userModel.findOne({email});
    if(foundedUser) res.json({message:"user already exists"});

     //findById --> returns object and if not exist will return null
    //  let foundedUser = await userModel.findById("123");
    //  if(foundedUser) res.json({message:"user already exists"});
    let hashedPassword = bcrypt.hashSync(password,8);
    let addedUser = await userModel.insertMany({name,email,password:hashedPassword});
    res.json({message:"user created successfully, ", addedUser})
}

export const signIn = async(req,res)=>{
    let{email, password} = req.body;
    const foundUser = await userModel.findOne({email});
    if(foundUser){
        // let passwordsMatched = await bcrypt.compare(password, foundUser.password);
        let passwordsMatched = bcrypt.compareSync(password, foundUser.password);
        
        if(passwordsMatched)
            res.json({message:"your profile is, ", foundUser});
        else
            res.json({message:"wrong password"});

    }else{
        res.json({message:"you have to register first!"});
    }
}

export const getAllUsers = async(req,res) => {
    let data = await userModel.find();
    res.json({message:"done", data})
}