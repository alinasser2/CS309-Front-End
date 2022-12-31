import React, { useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import stringify from "json-stringify";
import { Link } from "react-router-dom";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:3000/api/auth/login", userData)
      .then((response) => {
        console.log(response.status);
        console.log(response.data.message);
        console.log(response.data.Token);
        alert(response.data.message);
        alert(response.data.Token);
        Cookie.set("SavedToken", response.data.Token, {
          expires: 1,
          secure: true,
          sameSite: "strict",
          path: "/CS309-Front-End/",
        });
      });
  };

  return (
    <div className="component">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="email">
          <h3> Email</h3>
        </label>
        <input
          value={data.email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="youremail@gmail.com"
          email="email"
          required
          minLength={13}
          maxLength={25}
        />
        <label className="password">
          <h3> password</h3>
        </label>
        <input
          value={data.password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="password"
          email="password"
          required
          minLength={5}
          maxLength={10}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
export default Login;
