const fs=require("fs");
function logReqRes(filename){
   return (req,res,next)=>{
        const date=new Date()
        const log=`\n ${date.toLocaleString()}: ${req.ip}:${req.method}:${req.path}\n`
        fs.appendFile(filename,log,(err,data)=>{
             next()
        })
   }
}
module.exports=logReqRes