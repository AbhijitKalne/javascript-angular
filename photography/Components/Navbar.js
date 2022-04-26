import React from 'react'
import love from '../image/love.jpg'

function Navbar() {
  return (
    <div className='container'>
      <h1 style={{'color':'SlateBlue',position:'fixed',top:0,left:0,right:0,zIndex:1,backgroundImage:`url(${love})`, fontFamily:'Lucida Handwriting'}}>Trishul <span className='h6'>Entertenment and Films</span></h1>
    </div>
  )
}

export default Navbar