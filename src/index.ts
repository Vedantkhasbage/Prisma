import { PrismaClient } from "@prisma/client";
const client=new PrismaClient()
import express from 'express'
const app=express();
app.use(express.json());

app.post("/signUp",async(req,res)=>{
   
    const username=req.body.username 
    const password=req.body.password 

    await client.users.create({
        data:{
            username:username,
            password:password
        }
    })
    res.json({
        message:"done"
    })
})

app.get("/users",async(req,res)=>{
    const response=await client.users.findMany({})
    res.json({
        message:response
    })
})

// const createuser=async()=>{
//  const response= await  client.users.findFirst({
//         where:{
//             id:1
//         },
//         include:{
//             todo:true
//         }
//     })

//     console.log(response)
// }

// createuser();

app.listen(3000)