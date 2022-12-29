import React, { useState, component, useEffect } from "react";
import Post from "../components/Post";
import {
  Typography,
  Grid,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
function AdminProduct() {
    const Url = "";
const [num,setNum]=useState([]);

const use=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15},{id:16},{id:17},{id:18},{id:19},{id:20},{id:21}]
useEffect(()=>{
  setNum(use);
return()=>{
};
},[]);

 let handleAddProduct = (id) => {
   
  };
 let removeFromCart = (id) => {
use.filter((idu)=>idu.id !==id)

  };
  
  return (
    <Container>
      <Grid container spacing={2}>
       {num.map((idP,i)=>(
        <Grid key={i} item sm={6} xs={12} md={4}>
        <Post key={i} painte_name="mounir" price="10000" handleClick={`/Product/${idP.id}`} />
        <Button variant="outlined" style={{color:"black" }} onClick={removeFromCart(idP.id)}>Remove</Button>
        </Grid>
    ))}
      </Grid>
       <Typography>{use.length}</Typography>
      <Button onClick={handleAddProduct(5+1)} >Add Product</Button>
     
    </Container>
  )
}

export default AdminProduct