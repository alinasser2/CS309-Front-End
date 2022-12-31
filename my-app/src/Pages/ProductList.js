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
  const [num, setNum] = useState([]);

  const use = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
    { id: 21 },
  ];
  useEffect(() => {
    setNum(use);
    return () => {};
  }, []);

  let handleAddProduct = () => {};

  return (
    <Container>
      <Grid container spacing={2}>
        {num.map((idP, i) => (
          <Grid key={i} item sm={6} xs={12} md={4}>
            <Post
              key={i}
              painte_name="Starry Night"
              price="1000"
              handleClick={`/Product/${idP.id}`}
              handleAdd={handleAddProduct}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductList;
