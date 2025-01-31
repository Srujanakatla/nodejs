var nodemailer=require("nodemailer")
var express=require("express")
var app=express()
app.use(express.json())


var transpoter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false, 
    auth:{
        user:'katlasrujana1@gmail.com',
        pass: 'cvxb dgnv svun jnhj'  
    }
})

app.post("/register",(req,res)=>{

    var otp=""
    for(i=0;i<4;i++){
        var n=Math.floor(Math.random()*10)
        otp+=n
    }

    var options={
        from:'katlasrujana1@gmail.com',
        to:`${req.body.username}`,
        subject:'sending Email using Node.js',
        html:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1 style="color:pink">hi ur otp code</h1>
        <center>
        <h1 style="color:pink">${otp}</h1>
        </center>
        <img src="https://i.scdn.co/image/ab6761610000e5eb8027e0fd7781e38819c922bf" alt="powerstar">
    </body>
    </html>`,
        attachments:[
            {
                filename:"srujana.txt",
                path:"mail.txt"
            }
    
        ]
    }
    transpoter.sendMail(options,(err,info)=>{
    if(err){
        console.log(err.message),
        res.send(err)
    }
    else {
        console.log(info.message),
        res.send(info)
    };
})
    

})

app.listen(4009,()=>{
    console.log("hi this is port http://localhost:4009")
})