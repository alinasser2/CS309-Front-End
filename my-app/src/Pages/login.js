import React, { useState } from "react";
import axios from "axios";
const Login = () => {
    const [data, setData] = useState({
      email: "",
      password: ""
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
      const userData = {
        email: data.email,
        password: data.password
      };
      axios
        .post("http://localhost:3001/api/auth/login", userData)
        .then((response) => {
          console.log(response.status);
          console.log(response.data.message);
        })

    };
  
    return (
        <div classemail="component">
                    <h2>Login</h2>
                       <form classemail="login-form" onSubmit={handleSubmit}>
                        <label classemail="email">
                             <h3> Email</h3>
                               </label>
                          <input value={data.email}  name="email"onChange={handleChange}type="email" placeholder="youremail@gmail.com"  email="email" required minLength={13} maxLength={25}/>
                         <label classemail="password">
                           <h3> password</h3>
                         </label>
                          <input  value={data.password}    name="password" onChange={handleChange} type="password" placeholder="password" email="password"   required minLength={5} maxLength={10}/>
                          <button  type="submit">Log In</button>
                     </form>
                  </div>

    );
  };
  export default Login