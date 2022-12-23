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

function ProductList() {
  const Url = "";
const [num,setNum]=useState([]);

const use=[{id:1},{id:2},{id:3}]
useEffect(()=>{
  setNum(use);
return()=>{
};
},[]);

 let handleAddProduct = () => {

  };
  

  return (
    <Container>
      <Grid container spacing={2}>
       {num.map(idP=>(
        <Grid item sm={6} xs={12} md={4}>
        <Post painte_name="mounir" price="10000" handleClick={`/Product/${idP.id}`} handleAdd={handleAddProduct} />
        </Grid>
    ))}
      </Grid>
    </Container>
  );
}

export default ProductList;
