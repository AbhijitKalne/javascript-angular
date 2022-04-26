import React from 'react'

import platform from '../image/wedding-stage.jpg'

function Content() {
  return (
    <div  style={{'backgroundColor':'SlateGray'}} className='container'>
        <div className='row p-0'>
           <div className='col-md-6 p-0'>
                <img style={{'maxWidth':'100%', 'maxHeight':'100vh'}} src={platform}></img>
           </div>
           <div className='col-md-6 ' style={{backgroundColor:'white'}}>
                <p >Grazie alle fotografie possiamo rivivere i momenti più importanti della Grazie alle fotografie possiamo rivivere i momenti più importanti della
                    nostra vita.</p>
           </div>
        </div>
        <div className='row p-0'>
        <div  className='col-md-6' style={{backgroundColor:'white'}}>
                <p>Grazie alle fotografie possiamo rivivere i momenti più importanti della Grazie alle fotografie possiamo rivivere i momenti più</p>
           </div>
           <div className='col-md-6 p-0'>
                <img style={{'maxWidth':'100%', 'maxHeight':'100vh'}} src={platform}></img>
           </div>
           
        </div>
    </div>
  )
}

export default Content