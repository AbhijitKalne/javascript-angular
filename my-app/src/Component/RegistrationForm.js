import axios from 'axios'

import React,{useState,useRef,useEffect} from 'react'
import DatePicker from 'react-date-picker'
import './RegistrationForm.css'


function Registration_Form() {
    const fnameRef = useRef()
    const [data,setData]=useState({fname:'',
    lname:'',
    email:'',
    phone:'',
    password:'',
    cpassword:'',
    gender:'',
    startDate:new Date()
})

    const [startDate,setstartDate]=useState(new Date())
    const resetDataState=Object.assign({},data)
    const [validateData,setValid]=useState({fnameValid:'' ,
                                            lnameValid: '',
                                            emailValid: '',
                                            phoneValid: '',
                                            passwordValid:'' ,
                                            cpasswordValid:'' ,
                                            genderSelected:''
                                        })
    
     const [validateForm,setValidate]=useState(false)


     useEffect(() => {
         fnameRef.current.focus()
         
     }, [])

   const handleOnChange=(e)=>{
       const name=e.target.name
       const value=e.target.value
    
       setData({
           ...data,[name]:value
       },validate(name,value))
    }

   const validate=(name,value)=>
        {
        switch(name){
            case 'fname':{
                        if(!value)  
                            setValid({
                                ...validateData,
                                fnameValid:false
                            })
                    
                        else
                            setValid({
                                ...validateData,
                                fnameValid:true
                            })
                            
                            break;
                        }
             case 'lname':{
                        if(!value)  
                          setValid({
                            ...validateData,
                                lnameValid:false
                            })
                        
                        else
                            setValid({
                                ...validateData,
                                lnameValid:true
                            })
                            break;
                        }
            case 'email':{
                        let Regmail=/^[a-zA-Z][a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{3}$/
                       
                        if(value.match(Regmail)){
                            setValid({
                                ...validateData,
                                emailValid:true    
                            })
                        }
                        else setValid({
                            ...validateData,
                            emailValid:false
                        })
                        break;
            }
            case 'phone':{
                let Regphone=/^[2-9][0-9]{9}$/
                if(Regphone.test(value)){
                    setValid({
                        ...validateData,
                        phoneValid:true})
                }
                else {
                    setValid({
                        ...validateData,
                        phoneValid:false})
                }
                break;
            }
            case 'password':{
                let Regpass=/^[a-zA-Z][a-zA-Z0-9\.\$\!\@]{6,9}$/
                if(Regpass.test(value)){
                    setValid({
                        ...validateData,
                        passwordValid:true})
                }
                else{
                    setValid({
                        ...validateData,
                        passwordValid:false})
                }break;
            }
                case 'cpassword':{
                    if(data['password'] !== data['cpassword']){
                        setValid({
                            ...validateData,
                            cpasswordValid:false})
                    }
                    else {
                        setValid({
                            ...validateData,
                            cpasswordValid:true})
                    }
                    console.log(data.password+'  '+data.cpassword)
                    break;
                }
                case 'gender':{
                    setValid({
                        ...validateData,
                        genderSelected:true
                    })
                }
                    default:
                        return null
            }
                      
        }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(validateData.fnameValid +''+ validateData.lnameValid +''+ validateData.emailValid +''+ validateData.phoneValid +''+ validateData.passwordValid +''+ validateData.cpasswordValid)
        if(validateData.fnameValid && validateData.lnameValid && validateData.emailValid && validateData.phoneValid && validateData.passwordValid && validateData.cpasswordValid && validateData.genderSelected)
        {
                setValidate({validateForm:true})
        }
        if(!validateForm){
            alert('pass')
            
            axios.post('/registration',data).then(res=>console.log(res)).catch(err=>console.log(err))
        }
    }
    const resetData=()=>{
       setData({data:resetDataState})
    }
    return (
        <>
            <div className='col-6 mb-4'>
                    <input type="text" className="form-control me-2" placeholder='First Name' id='fname' name='fname' value={data.fname} onChange={handleOnChange} ref={fnameRef}></input>
                    {
                        !validateData.fnameValid&&<div className='validation_error'>First Name is mandatory</div>
                    }
                    </div>
                    <div className='col-6 mb-4'>
                    <input type="text" className="form-control me-2" placeholder='Last Name' id='lname' name='lname' required value={data.lname} onChange={handleOnChange}></input>
                    {
                        !validateData.lnameValid&&<div className='validation_error'>Last Name is mandatory</div>
                    }
                  </div>
                 
                    <div className='col-6 mb-4'>
                    <input type="email" className="form-control me-2" placeholder='Email address' id='email' name='email' required value={data.email} onChange={handleOnChange}></input>
                    {
                        !validateData.emailValid&&<div className='validation_error'>Please provide correct eamil address</div>
                    }
                    </div>
                    <div className='col-6 mb-4'>
                    <input type="text" className="form-control me-2" placeholder='Mobile Number' id='phone' name='phone' required value={data.phone} onChange={handleOnChange}></input>
                    {
                        !validateData.phoneValid&&<div className='validation_error'>Please provide correct mobile Number</div>
                    }
                    </div>
                    <div className='col-6 mb-4'>
                    <input type="password" className="form-control me-2" placeholder='Password' id='password' name='password' required value={data.password} onChange={handleOnChange}></input>
                    {
                        !validateData.passwordValid&&<div className='validation_error'>Your password must be at least 6 characters long, contain at least one number and have a mixture of uppercase and lowercase letters. </div>
                    }
                    </div>
                    <div className='col-6 mb-4'>
                    <input type="password" className="form-control me-2" placeholder='Confirm Password' id='cpassword' name='cpassword' required value={data.cpassword} onChange={handleOnChange}></input>
                    {
                        !validateData.cpasswordValid&&<div className='validation_error'>Password and confirm password should be same </div>
                    }
                    </div>
                    <div className='col-3 mb-4 text-start'>
                    <label className='form-label '>Gender:</label>
                    </div>
                    <div className='col-9 mb-4'>
                   <input type="radio" className='m-2' name='gender' value='male' onChange={handleOnChange}/>
                   <label className='check-label' >Male</label>                    
                    <input type="radio" className='m-2 ' name='gender' value='female' onChange={handleOnChange}/>
                    <label className='check-label'>Female</label>
                    </div>
                    <div className='col-6 mb-4 text-start'>
                        Date of Birth:
                    </div>
                    <div className='col-6 mb-4 text-start'>
                    <DatePicker value={startDate} name='dob' onChange={(date)=>setstartDate(date)}/>

                    </div>
                    <div className='col-6'><button className="col-6 btn btn-outline-success btn-lg" type="submit" onClick={handleSubmit}>Sign Up</button></div>
                    
                    <div className='col-6'>
                    <button className="col-6 btn btn-outline-danger btn-lg" type="reset" onClick={resetData}>Reset</button>
                    </div>
                    

        </>
    )
}

export default Registration_Form
