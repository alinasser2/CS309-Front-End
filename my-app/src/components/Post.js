import React from 'react'
import { Typography, Grid, CssBaseline, Container, link, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import { makeStyles} from '@mui/styles';

function Post({imgURL ,painte_name , price,imgDescription='product'}) {
  return (
    <>

    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt={imgDescription}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {painte_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         price  {price}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </>
  );
}

export default Post
