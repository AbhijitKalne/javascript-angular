import React from 'react'
import love from '../image/love.jpg'
import wedding from '../image/wedding.jpg'
import heart from '../image/heart.jpg'
import sunset from '../image/sunset.jpg'

import ArrayImage from './ArrayImage'
function ViewImages() {
    const img=[love,wedding,heart,sunset]
  return (
    <div className='container p-5 mb-4' style={{backgroundColor:'SlateGray'}}>
        <div className='row'>
               {img.map((ele,ind)=>(
                   <ArrayImage img={ele} key={ind}></ArrayImage>
                ))}
            </div>
        </div>
   
  )
}

export default ViewImages