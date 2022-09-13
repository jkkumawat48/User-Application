import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from  "react-router-dom"

import Sign_img from './Sign_img'
const Home = () => {
    const[data,setData]=useState({name:"",email:"",date:"",password:""});
    const[inpal,setInpal]=useState([]);
    const handleonChange=(e)=> {
        const{name,value}=e.target;
        setData({...data,[name]:value})
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        setData({name:"",email:"",date:"",password:""})
        const {email, password} = data

if(email == ""){
    alert("email is required")
    return
}
if(password == ""){
    alert("password is required")
    return
}
if(password == ""){
    alert("password.length <5")
    return
}else{
    console.log("data added Succesfully")
}
        localStorage.setItem("userjs",JSON.stringify([...inpal,data]));
    }
  return (
    <>
    <div className='container mt-3'>
<section className='d-flex justify-content-between'>
    <div className='left_data' style={{width:"100%"}}>
        <h3 className='text-center col-lg-6'>Sign Up</h3>
        <Form onSubmit={(e)=>handlesubmit(e)}>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Name" name='name' value={data.name} onChange={(e)=>handleonChange(e)} />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" name='email' value={data.email} onChange={(e)=>handleonChange(e)}/>
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Control type="date" name='date' value={data.date} onChange={(e)=>handleonChange(e)} />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
       
        <Form.Control type="password" placeholder="Password" maxLength={5} name='password' value={data.password} onChange={(e)=>handleonChange(e)}/>
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit" className='mb-3 col-lg-6'>
        Submit
      </Button>
    </Form>
    <p className='mt-3'>Already Have an Account <NavLink to="/login">SignIn</NavLink></p>
    </div>
    <Sign_img/>
</section>
    </div>
    </>
  )
}

export default Home