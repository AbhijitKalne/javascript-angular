import React, { useEffect, useState } from 'react'
import './Ball.css'

function DisplayBall(props) {
    const [ball,setBall]=useState([1,2,3,4,5])
    let [inputBall,setInputBall]=useState('')

    const handleClick=(e)=>{

            e.preventDefault()
            let n=Number(inputBall)
            setBall(ball.filter((ele,ind)=>{if(n-1!=ind)
                        return ele
                    }))
            
    }

    useEffect(()=>{
        let arr=[1,2,3,4,5]
        if(ball.length==0)
        setBall([...arr])
    },[ball])

    

    const handleOnChange=(e)=>{
        setInputBall(e.target.value)
    }
  return (
    <div>DisplayBall
        <div >
            {
                ball.map((ele)=><div key={ele} className='showball'>{ele}</div>)
            }
        </div>
        
        
            <form> 
                <input type="text" name='ballinput' value={inputBall} onChange={handleOnChange}></input>
                <button onClick={handleClick}>Submit</button>

            </form>
            <h1>{props.username}</h1>

    </div>
  )
}

export default DisplayBall