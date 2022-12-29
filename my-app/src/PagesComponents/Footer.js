import React from 'react'
import {
    Typography,
    Grid,
    CssBaseline,
    Container,
    link,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Button,
  } from "@mui/material";
  import { Link } from "react-router-dom";
function Footer() {


  let pages=[{title:'Products',id:"./ProductList"},{title:'Register',id:"./Register"},{title:'Login',id:"./Login"},{title:'About',id:"./About"}];
if('admin'==='admin'){
 pages=[{title:'Product',id:"./EditProduct"},{title:'About',id:"./About"},{title:'UsersList',id:"./UsersList"}];
}
if('response.data.message'==="User logged In"){
  pages=[{title:'Products',id:"./ProductList"},{title:'About',id:"./About"},{title:'UsersList',id:"./UsersList"},{title:'Account',id:"./Account"}];
 }

  return (
<Container style={{marginLeft:30}}>
     <h3 style={{background:"#E5BA73",width:"150px"}}>important links </h3>
{pages.map((page, index) => (
            
            <li>
             <Link key={index} to={page.id} style={{color:"black"}} >
             {page.title}
                </Link></li>
                ))}
              
</Container>
  )
}

export default Footer