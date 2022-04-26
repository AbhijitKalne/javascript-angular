import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import login_img from '../images/login_vector.jpg'
import './Login.css'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             uname:'',
             password:''
             
        }
        this.unameRef=React.createRef()
    }
    
    componentDidMount(){
        this.unameRef.current.focus()
    }
  handleOnChange=(e)=>{
       const name=e.target.name;
       const value=e.target.value
        this.setState({
            [name]:value
        })
            
        
    }

    render() {
        const {uname,password}=this.state
        return (
            <div className='container'>
                
            <div className='row'>
                <div className='col-6 bg-secondary mt-4'>
                   <img src={login_img} className='col-12 img_vector p-1'></img>
                   
                </div>
                <div className='col-6 bg-secondary mt-4'>
                    <div className=' form_class'>
                    <form >
                        <input type='text' className='form-control m-2' placeholder='Email/Mobile no.' name='uname' value={uname} onChange={this.handleOnChange} ref={this.unameRef}></input>
                        <input type='password' className='form-control m-2' placeholder='Password' name='password' value={password} onChange={this.handleOnChange}></input>
                        <button className='form-control btn-outline-success btn-block mt-4 m-2'>Login </button>
                        <Link to="/registration" className=' mt-5'>Create New Account</Link>
                    </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Login
