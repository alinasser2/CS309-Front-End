import axios from "axios";
import React, { useState } from "react";
import  Input  from '../components/Input';
import valit from 'valit';
const Register = (props) => {
    const apiurl='https://jsonplaceholder.typicode.com/users';

   const [email, setEmail] = useState('');
   const [password1, setPassword1] = useState('');
   const [password2, setPassword2] = useState('');
   const [name, setName] = useState('');

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
    if(password1 !==password2)  return alert("password didn't match"); 
   const response = await axios.post(apiurl,email,password1,password2,name);
console.log("the name is: " + name+"\n  and the password1 is: " + password1+" \n and the password2 is: " + password2+"\n  and the email is: " + email)
alert("create user")
   };
   const handleUserName=(e)=>{
    setName(e.target.value);
};
   const handleEmail=(e)=>{
    setEmail(e.target.value);
};
const handlePassword1=(e)=>{
    setPassword1(e.target.value);
};
const handlePassword2=(e)=>{
    setPassword2(e.target.value);
};  
return (
       <div className="container">
           <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <Input label="Username" inputName="username" data={data} handleChange={handleUserName} placeholder="Username"/>
            <Input label="Password" type="Password" inputName="Password" data={data} handleChange={handlePassword1} placeholder="Password"/>
            <Input label="Confirm Password" type="Password" inputName="confirm password" data={data} handleChange={handlePassword2} placeholder="Confirm password"/>  
            <Input label="Email"  type="email" inputName="email" data={data} handleChange={handleEmail} placeholder="youremail@gmail.com"/>
            <Input label="phone"  inputName="phone" data={data} handleChange={handlePassword2} placeholder="phone"/>
            <Input label="city "  inputName="city" data={data} handleChange={handlePassword2} placeholder="city "/>
            <Input label="state"inputName="state" data={data} handleChange={handlePassword2} placeholder="state"/>
           <button type="submit">Log In</button>
       </form>
      
   </div>
   )
}
export default Register
