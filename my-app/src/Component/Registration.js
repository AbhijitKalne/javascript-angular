import React, { Component } from 'react'
import registration_img from '../images/reg_vector.jpg'
import './Registration.css'
import RegistrationForm from './RegistrationForm'

export class Registration extends Component {
   
    
    
    render() {
       
        return (

            <div className='container reg_back'>
                <div className='row '>
                    <div className='col-md-4 col-sm-3 mt-5'>
                      
                        <img src={registration_img} className='img_vector ' alt='Vector image with animation'></img>
                    
                    </div>
                <div className='col-sm-12 col-md-8'>
                    <form className='row form_container'>                    
                        <div className='col-6  mb-2'><h1>SignUp Form</h1></div>
                    <div></div>
                        <div className='col-12 mb-2 text-start'>Please Fill in this form to create an account</div>
                    <hr/>
                <RegistrationForm/>
           
            </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Registration
