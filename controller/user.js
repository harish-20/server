//create
const userModel = require('../models/userModel');
exports.createUser = (req,res)=> {
    newuser = new userModel(req.body);
    newuser.save();
    res.json("add successfully");
    res.end();
}

//read
exports.readUser = async(req,res)=> {
    res.json(await userModel.find());
}

//update
exports.updateUser = async(req,res)=> {
    const idoftarget ={_id : req.params.id};
    const newuser = req.body;
    const data=await (userModel.findOneAndUpdate(idoftarget,newuser));
    res.json(data);
    console.log(data,req.params.id);
    res.end();
}

//delete
exports.deleteUser = async(req,res)=> {
    const id = req.params.id;
    try{
    const result=await userModel.findByIdAndRemove(id);
    res.json('deleted successfully');
    }catch(err){
        console.log(err);
    }
    res.end();
}