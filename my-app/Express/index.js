
const express =require('express')
const mongoose= require('mongoose')
const cors=require('cors')
const routes=require('./routes')
const app=express()
app.use(cors())
app.use(express.json())
// app.use('/',routes)
    mongoose.connect("mongodb+srv://Abhikalne11:Abhi%402020@cluster0.wyc6n.mongodb.net/test").then(()=>console.log('mongo connected')).catch((err)=>console.log(err))

    const mongoSchema=new mongoose.Schema({
        fname:String,
        lname:String,
        email:String,
        phone:Number,
        password:String,
        gender:String

    })
const Demo=new mongoose.model("registration",mongoSchema)

const createDocument=async(data)=>{
    try{
        const reactDemo=new Demo({
            fname:data.fname,
            lname:data.lname,
            email:data.email,
            phone:data.phone,
            password:data.password,
            gender:data.gender,
            active:true
        })
        const result =await reactDemo.save();
        console.log(result)
    }catch(err){
        console.log(err)
    }
}
// createDocument()
app.post('/registration',function(req,res){
    data={
        fname:req.body.fname,
    lname:req.body.lname,
    email:req.body.email,
    phone:req.body.phone,
    password:req.body.password,
    gender:req.body.gender
    }
    console.log(data)
    createDocument(data)
   res.end('done')
})


app.get('/login',function(req,res){
    let post=Demo.find({},function(err,res){
        if(err){
            console.log(err)
        }
        else
        console.log(post)
    })
})


app.listen(8080,()=>console.log('Server started'))