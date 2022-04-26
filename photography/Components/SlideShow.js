import React, { useEffect, useRef, useState } from 'react'
import '../CssFiles/SlideShow.css'
import love from '../image/love.jpg'
import wedding from '../image/wedding.jpg'
import heart from '../image/heart.jpg'
const colors = [love,wedding, heart];
const delay=5000;


function SlideShow() {
    const [index,setIndex]=useState(0)
    const timeoutRef=useRef()
    function resetTimeout(){
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
    }
    useEffect(
        ()=>{
            resetTimeout();
            timeoutRef.current=setTimeout(
              ()=>setIndex(prevIndex=>
                    prevIndex===colors.length-1?0:prevIndex+1
                    ),delay
          )  ;
          return()=>{
              resetTimeout()
          };
        },[index])
  return (
    <div className='slideshow'>
        <div className='slideshowslider'
            style={{transform:`translate3d(${-index * 100}%,0,0)`}}
        >
           
                {colors.map((backgroundColor,ind)=>(
                    <div className='slide' key={ind} style={{backgroundImage:`url(${backgroundColor})`,backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize:'100% 100%'}}></div>
                ))}
            
        </div>
                    <div className='slideshowDots'>
                        {colors.map((_,idx)=>(
                            <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`}
                            onClick={()=>{setIndex(idx)}}></div>
                        ))}
                    </div>
    </div>
  )
}

export default SlideShow