import axios from "axios";
import React, { useState } from "react";
import  Input  from '../components/Input';
import {Button} from '@mui/material';

const Register = (props) => {
const apiurl='https://jsonplaceholder.typicode.com/users';

   const[data,setData]= useState({
    username:'',
    email:'',
    password:'',
    confirm_password:'',
    phone:'',
    city:'',
    state:''

 });

 const[errors,setErrors]= useState({});

   const  handleSubmit =async e => {  
    e.preventDefault();


    if(data.password !==data.confirm_password)  return alert("password didn't match"); 
   const response = await axios.post(apiurl,data.email,data.password,data.confirm_password,data.username);
console.log("the name is: " + data.username+"\n  and the password is: " + data.password+" \n and the confirm password is: " + data.confirm_password+"\n  and the email is: " + data.email+"\n  and the phone is: " + data.phone+"\n  and the city is: " + data.city+"\n  and the state is: " + data.state)
alert("create user")

   };

   const handleUserName=({target})=>{
    setData({...data,[target.name]:target.value});
};

   const handleEmail=({target})=>{
    setData({...data,[target.name]:target.value});
};
const handlePassword1=({target})=>{
    setData({...data,[target.name]:target.value});
};
const handlePassword2=({target})=>{
    setData({...data,[target.name]:target.value});
};  
const handlephone=({target})=>{   
    setData({...data,[target.name]:target.value});
    
};  
const handlecity=({target})=>{
    setData({...data,[target.name]:target.value});
};  
const handlestate=({target})=>{
    setData({...data,[target.name]:target.value});
};  

return (
       <div className="container">
           <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <Input label="Username"  inputName="username" data={data} errors={errors} handleChange={handleUserName} placeholder="Username" required  />
            <Input label="Password" type="Password" inputName="password" data={data}  errors={errors} handleChange={handlePassword1} placeholder="Password" required minLength={8}/>
            <Input label="Confirm Password" type="Password" inputName="confirm_password" data={data}   errors={errors} handleChange={handlePassword2} placeholder="Confirm password" required minLength={8}/>  
            <Input label="Email"  type="email" inputName="email" data={data}  errors={errors} handleChange={handleEmail} placeholder="youremail@gmail.com" required />
            <Input label="phone" type="Number"  inputName="phone" data={data}   errors={errors} handleChange={handlephone} placeholder="phone" required  />
            <Input label="city "  inputName="city" data={data}   errors={errors} handleChange={handlecity} placeholder="city " required />
            <Input label="state"inputName="state" data={data}   errors={errors} handleChange={handlestate} placeholder="state" required />
            <Button variant="contained" type="submit">Log In</Button>
       </form>
      
   </div>
   )
}
export default Register
