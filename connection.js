const mongoose=require("mongoose")
 async function connectMongoDB(url){
    let promise=mongoose.connect(url)
    return promise
 }

module.exports={connectMongoDB}