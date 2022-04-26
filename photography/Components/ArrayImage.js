import React from 'react'
import love from '../image/love.jpg'

function ArrayImage({img}) {
  return (
    <div className='col-md-3'>
    <div className="card"> 
    <img className="card-img-top" src={img} alt="Card image cap"></img>
        <div className="card-body">
         <h5 className="card-title" style={{fontFamily:'Trebuchet MS',color:''}}>Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up.</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
    </div>
    </div>
  )
}

export default ArrayImage