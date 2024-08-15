const {user}=require("../models/user.js")

async function handleGetAllUser(req,res){
        const allDbUsers=await user.find({})
        console.log(allDbUsers)
        return res.json(allDbUsers)
}
async function handleGetUserById(req,res){
        const user=await user.findById(req.params.id)
        if(!user){
            return res.status(404).json({Error:"user not found"})
        }
}
async function handleUpdateUserById(req,res){
        await user.findByIdAndUpdate(req.params.id,{lastName:"changed"})
        return res.json({status:"success"})
}
async function handleDelteUserById(req,res){
        await user.findByIdAndDelete(req.params.id)
        return res.json({status:"success"})
}
async function handleCreateNewUser(req,res){
    const body=req.body
    if(!body.first_name||!body.last_name|| !body.gender|| !body.email|| !body.job_title){
         return res.status(404).json({err:"all field required!"})
    }
    const result=await user.create({
        firstName:body.first_name,
        lastName:body.last_name,
        gender:body.gender,
        email:body.email,
        job_title:body.job_title
       })
      res.status(201).json({status:"user created!",id:result._id})
}
module.exports={
    handleGetAllUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDelteUserById,
    handleCreateNewUser
}