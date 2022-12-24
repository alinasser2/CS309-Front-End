import React, { useState, component, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Grid, CssBaseline, Container, Box, CardMedia,Rating ,TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StarIcon from '@mui/icons-material/Star';


const useStayle = makeStyles({
  Bady: {
    background:
      "Linear-gradient(564deg, rgb(255 218 28), rgb(141 244 84), rgb(46, 196, 182))",
  },
});

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
function Product() {

  const stayles = useStayle();
  const { id } = useParams();
  const [ProductName,setProductName]=useState([]);
  const [Paice,setPaice]=useState([]);
  const [Description,setDescription]=useState([]);
  const [value, setValue] =useState(0);
  const [hover, setHover] =useState(-1);

  useEffect(()=>{
    setProductName("nnnnn");
    setPaice(989999);
    setDescription("hhjfhgcgfxgfx");
    console.log(value)
  return()=>{
  };
  },[value]);
   



  return (
    <div className={stayles.Bady}>
       <CssBaseline/>
      <Grid container justify="center">
      <Container>
      <CardMedia
      style={{marginTop:"90px"}}
        component="img"
        height="50%"
        image="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt={ProductName}
    
        />
         <Typography variant="h2" align="left" >
            {ProductName}
          </Typography>
        <Typography variant="h3" align="left" >
            {Paice}
          </Typography>
        <Typography variant="h4" align="left" >
            {Description}
          </Typography>
        <Typography variant="h4" align="left" >
            {id}
          </Typography>
       
       
        <TextField
          label="Comment "
          multiline
          rows={9}
   
        />
       <Rating value={value} size="large" precision={0.5} 
         getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
       {value !== null && (
        <Box >{labels[hover !== -1 ? hover : value]}</Box>
      )}

        </Container>
      </Grid>
    </div>
  );
}

export default Product;
