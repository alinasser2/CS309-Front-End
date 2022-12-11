import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import {BrowserRouter,Route} from 'react-router-dom';
import Axios from "./Services/axiosService";
import AxiosContext from "./Services/context";



function index() {
  return (
    <div>index</div>
  )
}

export default index