import axios from 'axios';
import React, { useState } from 'react';

function AddData() {
    const [data,setData]=useState({name:'',continent:'',rank:'',flag:''})
    const cont_option=["Oceania","Europe","Africa","Asia","Antarctica","Australia"]
    const [validData,setValid]=useState({isName:false,isContient:false,isRank:false,isFile:false})
    const [upFile,setFile]=useState(null)
    const formdata=new FormData()


    const handleOnChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
       
        setData({...data,
            [name]:value},validate(name,value))
          console.log(data)
    }

    const validate=(name,value)=>{

        switch(name){
            case 'name':{
                    let nameReg=/^[a-zA-Z]{3,20}$/
                    if(nameReg.test(value)){
                        setValid({...validData,
                            isName:true})
                    }
                    else
                    setValid({...validData,
                        isName:false})
                    break;
            }
            case 'continent':{
                if(cont_option.includes(value)){
                    setValid({...validData,
                    isContient:true})
                }
                else
                setValid({...validData,
                isContient:false})
                break;
            }
            case 'rank':{
                let rankReg=/^[0-9]$/
                if(rankReg.test(value)){
                    setValid({...validData,
                        isRank:true})
                }
                else
                setValid({...validData,
                    isRank:false})
                break;
            }
           
        }
    }

   
    const fileSelect=(e)=>{
            console.log(e.target.files[0])
            setFile(e.target.files[0])
            setValid({...validData,
            isFile:true})
    }
    const handleOnSubmit=(e)=>{
            e.preventDefault()
            formdata.append('name','photo');
            formdata.append('file',upFile);
            formdata.append('data',JSON.stringify(data))
            const config={
                headers:{
                    'Accept': 'application/json',
                    'content-type':'multipart/form-data'              
                }
            }
                    console.log(upFile)
            const {isName,isContient,isRank,isFile}={...validData}
            if(isName && isContient && isRank && isFile){
           
                 axios.post('http://localhost:8080/countries',formdata,config)
                 .then(res=>console.log(res))
                .catch(err=>console.log(err))
            }
    }

  return <div>
      <h1>Add Data</h1>
      <form>
          <label>Country</label>
          <input type="text" name='name'  value={data.name} onChange={handleOnChange}></input>
          { !validData.isName && <p style={{color:'red'}}>Country name should have characters between 3 to 30 </p>}
          <br/>
          <label>Continent</label>
          <select name='continent' onChange={handleOnChange}>
              <option>--Select--</option>
              {cont_option.map((val,ind)=><option key={ind}  value={val}>{val}</option>)}
          </select>
          { !validData.isContient && <p style={{color:'red'}}>Continent not selected</p>}
          <br/>
          <label>Rank</label>
          <input type='number' name='rank' value={data.rank} onChange={handleOnChange}></input>
          { !validData.isRank && <p style={{color:'red'}}> Rank should be numeric</p>}
          <br/>
          <label>Upload Image</label>
          <input type='file' name='photo' onChange={fileSelect}></input>
          {/* <button value='submit' onClick={handleOnUpload}>upload</button> */}
          <button value='submit' onClick={handleOnSubmit}>Add</button>
      </form>
  </div>;
}

export default AddData;
