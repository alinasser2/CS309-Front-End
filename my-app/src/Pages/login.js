import React, { useState } from "react";
import {Button} from '@mui/material';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("the Email is:"+email);
        console.log("the password is:"+pass);
    }

    return (
        <div className="component">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="email">
                   <h3> Email</h3>
                    </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com"  name="email" required minLength={13} maxLength={25}/>
                <label className="password">
                <h3> password</h3>
                </label>
                <input value={pass} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" name="password"   required minLength={5} maxLength={10}/>
                <button  type="submit">Log In</button>
            </form>
        </div>
    )
}
export default Login