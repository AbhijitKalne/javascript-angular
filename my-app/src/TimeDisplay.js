import React, { useEffect, useState } from 'react'

function TimeDisplay() {
     let time=new Date()
    let curntTime=time.getHours()+':'+ time.getMinutes()+':'+time.getSeconds()
    const [time1,setTime1]=useState(curntTime)

    useEffect(()=>{
        
        setInterval(()=>{
            time=new Date()
        curntTime=time.getHours()+':'+ time.getMinutes()+':'+time.getSeconds()     
        setTime1(curntTime)
        },1000)
        
                
          
    },[time1])
  return (
    <div><h1>Time</h1>
    {/* <h2>{time1.hr}:{time1.min}:{time1.sec}</h2> */}
    <h2>{time1}</h2>
    </div>
  )
}

export default TimeDisplay