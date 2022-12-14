// import React,{UseState} from 'react';
// import  Input  from '../components/Input';
// import valit from 'valit';

// function Login() {
//   const[data,setData]= UseState({
//     email:'',
//     password:''
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
//     <>
//     <h1>login</h1>
//     <Input label="Username" inputName="username" data={data}/>
//     </>
//   );
// }

// export default Login

import React, { useState } from "react";
import {Button} from '@mui/material';
 const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("the Email is:"+email);
        console.log("the password is:"+pass);
    }

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="email">
                   <h3> Email</h3>
                    </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label className="password">
                <h3> password</h3>
                </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                <Button variant="contained" type="submit">Log In</Button>
            </form>
            
        </div>
    )
}
export default Login