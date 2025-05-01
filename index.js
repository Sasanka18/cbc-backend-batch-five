import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';
import jwt from 'jsonwebtoken';
import e from 'express';

const app=express();

app.use(bodyParser.json())
app.use((req,res,next)=>{
    const tokenString =req.header("Authorization")
    if(tokenString != null){
        const token=tokenString.replace("Bearer ","")
   

     jwt.verify(token,"cbc-batch-five#@2025",(err,decoded)=>{
        if(decoded != null){
            req.user=decoded
            next()
        }else{
            console.log("invalid token")
            res.status(403).json({
                message:"invalid token"
            })
        }

    }
)

}else{
    next()
}

})



mongoose.connect("mongodb+srv://admin:123@cluster0.ewclhp0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("connected to the database")

}).catch(()=>{console.log("database connection failed")})
app.get("/",(req,res)=>{console.log(req.body)})


app.use("/products",productRoute)
app.use("/user",userRoute)

app.listen(3000,()=>{console.log('server is runing on port 3000');

}
)







//mongodb+srv://admin:123@cluster0.ewclhp0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0