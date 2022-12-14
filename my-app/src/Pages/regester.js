// import React,{UseState} from 'react'
// import  Input  from '../components/Input';
// import valit from 'valit';

// function Regester() {

//   const[data,setData]= UseState({
//     username:'',
//     email:'',
//     password:'',
//     confirm_password:'',
//     phone:'',
//     city:'',
//     state:''

//   });

//   const[errors,setErrors]= UseState({})

//   const schema ={ 
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



//   }

//   return (
//       <>
//     <h1>cxmf</h1>
//     <Input label="Username" inputName="username" data={data}/>
//      </>
//   );
// }

// export default Regester
import axios from "axios";
import React, { useState } from "react";

const Register = (props) => {
    const apiurl='https://jsonplaceholder.typicode.com/users';

    const [email, setEmail] = useState('');
   const [password1, setPassword1] = useState('');
   const [password2, setPassword2] = useState('');
   const [name, setName] = useState('');

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
           <label className={name}>FirstName</label>
           <input value={name} name="name" onChange={handleUserName}  placeholder="firstName" />
           <label className={email}>email</label>
           <input value={email} onChange={handleEmail}type="email" placeholder="youremail@gmail.com" name="email" />
           <label className={password1}>password</label>
           <input value={password1} onChange={handlePassword1} type="password1" placeholder="password" name="password1" />
           <label className={password2}>confirm password</label>
           <input value={password2} onChange={handlePassword2} type="password2" placeholder="confirm password"  name="password" />
           <button type="submit">Log In</button>
       </form>
      
   </div>
   )
}
export default Register
