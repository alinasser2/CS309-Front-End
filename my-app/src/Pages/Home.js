import React from "react";
import Post from "../components/Post";
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
} from "@mui/material";
function Home() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4} >
          <Post painte_name="mounir" price="10000" />
        </Grid>
        <Grid item xs={4}>
          <Post painte_name="mounir" price="10000" />
        </Grid>
        <Grid item xs={4}>
          <Post painte_name="mounir" price="10000" />
        </Grid>
        <Grid item xs={4}>
          <Post painte_name="mounir" price="10000" />
        </Grid>
        <Grid item xs={4}>
          <Post painte_name="mounir" price="10000" />
        </Grid>
        <Grid item xs={4}>
          <Post painte_name="mounir" price="10000" />
        </Grid>
        <Grid item xs={4}>
          <Post painte_name="mounir" price="10000" />
        </Grid>
        <Grid item xs={4}>
          <Post painte_name="mounir" price="10000" />
        </Grid>
        <Grid item xs={4}>
          <Post painte_name="mounir" price="10000" />
        </Grid>
        <Grid item xs={4}>
          <Post painte_name="mounir" price="10000" />
        </Grid>
        <Grid item xs={4}>
          <Post painte_name="mounir" price="10000" />
        </Grid>
        <Grid item xs={4}>
          <Post painte_name="mounir" price="10000" />
        </Grid>
       
      </Grid>
    </Container>
  );
}

export default Home;
