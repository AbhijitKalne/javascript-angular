import React, { useState } from 'react'

function DataChild1(props) {
    const [uname,setUname]=useState('')
    

  return (
    <div>DataChild1
        <input type='text' value={uname} onChange={(e)=>setUname(e.target.value)}></input>
        <button onClick={()=>props.handleClick(uname)}>Submit</button>
    </div>
  )
}

export default DataChild1