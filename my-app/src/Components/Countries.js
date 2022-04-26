import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import india from './images/india.png'


function Countries() {
    const [data,setData]=useState([])
    const [iteam,setIteam]=useState('')
   
    useEffect(()=>{
        axios.get('http://localhost:8080/countries')
        .then(res=>{   
 console.log(res)
            setData(res.data)
        })
        .catch(err=>console.log(err))
        },[])

        const handleOnChange=(e)=>{
            const val=e.target.value
            setIteam(val)
            console.log(iteam)
        }
  return <div>
 
      {/* <ol>
         {data.map(v=>(<li key={v.rank}>{v.name}</li>))}{console.log(data)}
       </ol> */}
       <select  onChange={handleOnChange} >
           <option>---Selecte from below---</option>
       {data.map((v,i)=>(<option key={i}  value={v.name} >{v.name}</option>))}{console.log(data)}
       </select>
       <ul>
           {data.filter((val)=>val.name==iteam).map((filterArr,i)=>(
               <li key={i}>{filterArr.name}  <img src={require(`./${filterArr.flag}`)}></img> {filterArr.rank}</li>     
           ))}
       </ul>
      
  </div>

    }
export default Countries;