import React from 'react'
import '../CssFiles/Footer.css'

function Footer() {

  return (
    
    <div className="container text-center text-md-left ">
        <div className="row">
        <div className="col-md-6 mt-4">
        <h5 className="text-uppercase">Footer Content</h5>
            <p>Here you can use rows and columns to organize your footer content.</p>
            </div>
            
                <div className="col-md-6 mb-md-0 mb-3">

            <h5 className="text-uppercase">Contatct Us</h5>
                <ul className="list-unstyled " >
                    <li>
                        <a href="tel:+919881759963">9999999999</a>
                    </li>
                    <li>
                        <a href="" onClick={(e)=>{e.preventDefault();window.location='mailto:______@gmail.com'}}>Write a mail</a>
                    </li>
                    <li>
                        <a href="">Address</a>
                    </li>
                    
                    </ul>


                </div>
         </div> 
         <hr ></hr>
         <div className="text-center pb-2">© 2022 Copyright:
                 <a href="" onClick={(e)=>{e.preventDefault();window.location='mailto:abhikalne1@gmail.com'}}> abhikalne1@gmail.com</a>
        </div>
    </div>  
    
  )
}

export default Footer