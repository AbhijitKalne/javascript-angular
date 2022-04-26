//import required packages
const express=require('express')
const app=express()
const cors=require('cors')
const fs=require('fs')
const multer=require('multer')

//cretae port numbmer
const port=8080
app.use(cors())
app.use(express.json())
let countries


//read json file and store in in variable countries
fs.readFile('data.json','utf-8',function(err,jsonString){
    if(err) throw err;
   const data=JSON.parse(jsonString)
   countries=data.countries 

})

//get request to send data to client
app.get('/countries',(req,res)=>{

   const a='hi' 
    res.send(countries)
    res.end()
  
})

//create storage to store image in local disk
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../src/Components/images')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage }).single('file')



//post request to get data and file from client and store it in json file
 app.post('/countries', (req, res) => {
  
   upload(req, res, (err) => {
     if (err) {
       res.sendStatus(500);
       console.log(err)
     }
     res.send(req.file);
  const temp=JSON.parse(req.body.data)
   console.log(temp)
    //get data in data variable
     data={
      name:temp.name,
      continent:temp.continent,
      flag:'/images/'+req.file.originalname,
      rank:temp.rank
   }
   console.log(data)
   countries.push(data)
  
  //read file and push data to json file
   fs.readFile('data.json', function (err, jsonString) {
      if(err)
      console.log(err)
      else{
      var json = JSON.parse(jsonString)
      json.countries.push(data)
      fs.writeFile("data.json", JSON.stringify(json),function(err){
         if (err) throw err;
         console.log('The "data to append" was appended to file!');
        
       })
      }
   })
     
     
  }); 
   
   
 });

app.listen(8080,()=>console.log(`Server started on port ${port}`))