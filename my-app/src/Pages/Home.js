import React ,{useState, useEffect }from "react";
import Post from "../components/Post";
import Banner from "../PagesComponents/Banner"
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
function Home() {

  const Url = "";
  const [num,setNum]=useState([]);

  const use=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11}]
  useEffect(()=>{
    setNum(use);
  return()=>{
  };
  },[]);

  let handleAddProduct = () => {

  };
  return (
    <Container>
      <CssBaseline/>
      <Banner/>
      <Grid container spacing={2}>
      {num.map((idP,i)=>(
        <Grid key={i}item sm={6} xs={12} md={4}>
        <Post  key={i}painte_name="mounir" price="10000" handleClick={`/Product/${idP.id}`} handleAdd={handleAddProduct} />
        </Grid>
    ))}
        <Grid item xs={12}>
          <Button variant="contained" href="/ProductList">
           View More Products
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
