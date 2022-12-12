import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Pages/Home';
import login from './Pages/login';
import regester from './Pages/regester';
import ReactDom from "react-dom";
// import {} from '';
// import Axios from "./Services/axiosService";
// import AxiosContext from "./Services/context";


 function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/login' component={login}/>
      <Route path='/regester' component={regester}/>
      {/* <Route path='/' component={}/> */} 
       <Route exact path='/' component={Home}/>
    </Switch>
    </BrowserRouter>
  );
 }

export default App