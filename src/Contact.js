import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fooddata from './Data';
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const[menu,setMenu]=useState(Fooddata);
    const history = useNavigate();

    const filteriteams = (curiteams)=>{
const updateiteams =Fooddata.filter((cur,ind)=>{
    return cur.category == curiteams
})
setMenu(updateiteams)
    }
    const userlogout= ()=> {
        localStorage.removeItem("user_login")
        history("/")
    }
  return (
    <>
    <section className='container mt-2'>
<h2 className='text-center mb-2' style={{fontWeight:400}}>Search Your Food</h2>
<div className='btn-container d-flex justify-content-around mt-2'>

<Button variant="primary" onClick={()=>filteriteams("punjabi")}>Punjabi</Button>{' '}
<Button variant="success" onClick={()=>filteriteams("vadapav")}>Vadapav</Button>{' '}
<Button variant="danger" onClick={()=>filteriteams("Pizza")}>Pizza</Button>{' '}
<Button variant="primary" onClick={()=>filteriteams("Chai")}>Chai</Button>{' '}
<Button variant="success" onClick={()=>filteriteams("Frankie")}>Frankie</Button>{' '}
<Button variant="danger" onClick={()=>setMenu(Fooddata)}>All</Button>{' '}
</div>
     <div className='container mt-3'>
<div  className='row d-flex justify-content-around align-iteams-center'>
    {
        menu.map((el,ind)=>{
            return(
                <>
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4">
      <Card.Img variant="top" src={el.imgdata} style={{height:"15rem"}} className="mt-3"/>
      <Card.Body>
        <Card.Title>{el.rname}</Card.Title>
        <Card.Text>
        price:{el.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </>
            )
        })
    }

    
</div>
     </div>

    </section>
    </>
  )
}

export default Contact