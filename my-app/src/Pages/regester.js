import axios from "axios";
import React, { useState } from "react";
import  Input  from '../components/Input';
import valit from 'valit';
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

//  const schema ={ 
//     username: valit.creatSchema(valit.string,valit.isRequiered,{
//         min:5,
//         max:30,
//         label:'Username',

//     }),
//      password:valit.creatSchema(valit.string,valit.isRequiered,{
//       min:8,
//       max:50,
//       label:'Password',

//   })
// } ;

 const[errors,setErrors]= useState({})
   const  handleSubmit =async e => {
    e.preventDefault();
    if(data.password !==data.confirm_password)  return alert("password didn't match"); 
   const response = await axios.post(apiurl,data.email,data.password,data.confirm_password,data.username);
console.log("the name is: " + data.username+"\n  and the password is: " + data.password+" \n and the confirm password is: " + data.confirm_password+"\n  and the email is: " + data.email)
alert("create user")
   };
   const handleUserName=(e)=>{
    setData(e.target.value);
};
   const handleEmail=(e)=>{
    setData(e.target.value);
};
const handlePassword1=(e)=>{
    setData(e.target.value);
};
const handlePassword2=(e)=>{
    setData(e.target.value);
};  

return (
       <div className="container">
           <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <Input label="Username" inputName="username" data={data} errors={errors} handleChange={handleUserName} placeholder="Username"/>
            <Input label="Password" type="Password" inputName="Password" data={data}  errors={errors} handleChange={handlePassword1} placeholder="Password"/>
            <Input label="Confirm Password" type="Password" inputName="confirm password" data={data}   errors={errors} handleChange={handlePassword2} placeholder="Confirm password"/>  
            <Input label="Email"  type="email" inputName="email" data={data}  errors={errors} handleChange={handleEmail} placeholder="youremail@gmail.com"/>
            <Input label="phone"  inputName="phone" data={data}   errors={errors} handleChange={handlePassword2} placeholder="phone"/>
            <Input label="city "  inputName="city" data={data}   errors={errors} handleChange={handlePassword2} placeholder="city "/>
            <Input label="state"inputName="state" data={data}   errors={errors} handleChange={handlePassword2} placeholder="state"/>
           <button type="submit">Log In</button>
       </form>
      
   </div>
   )
}
export default Register
