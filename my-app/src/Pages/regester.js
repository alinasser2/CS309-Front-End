import axios from "axios";
import React, { useState } from "react";
import  Input  from '../components/Input';


const Register = (props) => {


   const[data,setData]= useState({
    username:'',
    email:'',
    password:'',
    confirm_password:'',
    phone:'',
    city:'',
    state:''

 });




   const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if(data.password !==data.confirm_password)  return alert("password didn't match"); 
    const userData = {
        username: data.username,
        email: data.email,
        password:data.password,
        phone_number:data.phone,
        city:data.city,
        state:data.state
    };
    axios
      .post("http://localhost:3000/api/auth/signup", userData)
      .then((response) => {
        console.log(response.status);
        console.log(response.data.message);
      

        alert(response.data.message)
      })

  };

return (
       <div className="component">
           <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <Input label="Username"  inputName="username" data={data}  handleChange={handleChange} placeholder="Username" required  />
            <Input label="Password" type="Password" inputName="password" data={data}   handleChange={handleChange} placeholder="Password" required minLength={8}/>
            <Input label="Confirm Password" type="Password" inputName="confirm_password" data={data}    handleChange={handleChange} placeholder="Confirm password" required minLength={8}/>  
            <Input label="Email"  type="email" inputName="email" data={data}   handleChange={handleChange} placeholder="youremail@gmail.com" required />
            <Input label="phone" type="Number"  inputName="phone" data={data}    handleChange={handleChange} placeholder="phone" required  />
            <Input label="city "  inputName="city" data={data}    handleChange={handleChange} placeholder="city " required />
            <Input label="state"inputName="state" data={data}    handleChange={handleChange} placeholder="state" required />
            <button  type="submit">Log In</button>
       </form>
      
   </div>
   )
}
export default Register
