import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { useNavigate } from "react-router-dom";
// import { NavLink } from  "react-router-dom"
const Login = () => {
    const history = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [inpal, setInpal] = useState([]);
  const handleonChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    const getDataArr = window.localStorage.getItem("userjs")
    console.log(getDataArr)

    const { name, email, date, password } = data;
    if (name == "") {
      alert("name field is required");
      return;
    }
    if (email == "") {
      alert("email is required");
      return;
    }
    if (date == "") {
      alert("date is required");
      return;
    }
    if (password == "") {
      alert("password is required");
      return;
    }
    if (password == "") {
      alert("password.length <5");
      return;
    } 
    if(getDataArr && getDataArr.length){
        const userdata = JSON.parse(getDataArr)
        // console.log(userdata)
        const userlogin = userdata.filter((ele,k)=> {
            return ele.email === email && ele.password === password
        });
if(userlogin.length ===0){
    alert("invalid details")
}else{
    console.log("user login succesfully")
    localStorage.setItem("user_login",JSON.stringify(getDataArr))
    history("/Contact");
}
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>
            <Form onSubmit={(e) => handlesubmit(e)} className="md-3 col-lg-7">
              <Form.Group className="mb-3 col-lg-10" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={data.email}
                  onChange={(e) => handleonChange(e)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-10"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  maxLength={5}
                  name="password"
                  value={data.password}
                  onChange={(e) => handleonChange(e)}
                />
              </Form.Group>
              {/* <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicCheckbox"
              ></Form.Group> */}
              <Button variant="primary" type="submit" className='btn-container d-flex justify-content-around mt-2 col-lg-10'>
                Submit
              </Button>
            </Form>
            {/* <p className='btn-container d-flex justify-content-around mt-2 col-lg-10'>
              Already Have an Account<span>SignIn</span>
            </p> */}
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Login;
