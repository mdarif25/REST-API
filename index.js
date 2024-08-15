const express=require("express")
const logReqRes=require("./middlewares/index.js")
const {connectMongoDB}=require("./connection.js")
const userRouter=require("./routes/user.js")
const app=express();
// middleware
app.use(express.urlencoded({extended:false}))
connectMongoDB("mongodb://127.0.0.1:27017/myApp").then(()=>{
    console.log("mongoDB connected!")
}).catch((err)=>{
    console.log("err:",err)
})
app.use("/api/user",userRouter)

app.use(logReqRes("log.txt"))
const port=8001
app.listen(port,()=>{
    console.log(`server is connected at ! ${port}`)
})
