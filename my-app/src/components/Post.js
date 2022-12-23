import React from 'react'
import {Link} from 'react-router-dom';
import { Typography, Grid, CssBaseline, Container, link, Card, CardActionArea, CardMedia, CardContent,Button,CardActions } from "@mui/material";
import { makeStyles} from '@mui/styles';
function Post({imgURL ,painte_name , price,handleClick,handleAdd,...rest}) {
  return (
    <>

    <Card sx={{ maxWidth: 345 }}>
     
    <CardActionArea > 
     <Link to={handleClick}>
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt={painte_name}
    
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {painte_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         price  {price}
        </Typography>
   </CardContent>
    </CardActionArea>
      <CardActions>      
      <Button size="small"   onClick={handleAdd}>Add product to Card</Button>   
    </CardActions>
  </Card>
  </>
  );
}

export default Post
