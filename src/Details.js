import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";


const Details = () => {

const[logindata,setlogindata]=useState([])
console.log(logindata)
const history = useNavigate();
const [show, setShow] = useState(false);
var todayDate = new Date().toISOString().slice(0,10)
console.log(todayDate)

const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const Birthday=()=>{
const getuser = localStorage.getItem("user_login")
if(getuser && getuser.length){
    const user = JSON.parse(getuser)
    // console.log(user)
    setlogindata(user);


    const userbirth = logindata.map((ele,k)=>{
        return ele.date === todayDate
    })
    if(userbirth){
        setTimeout(()=>{
console.log("ok")
handleShow();
        },3000)
    }
}
}
const userlogout= ()=> {
    localStorage.removeItem("user_login")
    history("/")
}
useEffect(()=>{
Birthday();
},[])
  return (
    <>
    {
        logindata.length === 0 ? "error" :
        <>
        <h3>Details Page</h3>
        <h3>{logindata[0].name}</h3>
        <Button onClick={userlogout}>LogOut</Button>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{logindata[0].name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>WIsh You Happy Birthday!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      
        </>
    }
    </>
  )
}

export default Details