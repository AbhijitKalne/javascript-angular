
const express= require ('express')

const router=express.Router()

router.get('/login',function(req,res){
    console.log('hello')
})

module.exports =router;