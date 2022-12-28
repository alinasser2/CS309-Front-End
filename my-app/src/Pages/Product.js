import React, { useState, component, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Grid, CssBaseline, Container, Box, CardMedia,Rating ,TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StarIcon from '@mui/icons-material/Star';


const useStayle = makeStyles({
  Bady: {
    background:
      "#F2E7D5",
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
    setProductName("ArtPAding");
    setPaice(999.99+"$");
    setDescription("is very good");
  return()=>{
  };
  },[value]);
   



  return (
    <div className={stayles.Bady}>
       <CssBaseline/>
      <Grid>
      <Container>
      <CardMedia
      style={{marginTop:"90px" ,width: "25%",height:"50%"}}
        component="img"
    
        image="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
        alt={ProductName}
    
        />
         <Typography fontSize="25px" align="center" marginTop="-6rem" >
            {ProductName}
          </Typography>
        <Typography fontSize="25px" align="center" >
            {Paice}
          </Typography>
        <Typography fontSize="25px" align="center" >
            {Description}
          </Typography>
        <Typography fontSize="25px" align="left" >
          </Typography>
       
       
        <TextField
          label="Comment "
          multiline
          rows={9}
       style={{marginLeft: '1% ',marginTop: '10%',width:'50%' }}
        />
       <Rating value={value} size="large"  precision={0.5} style={{marginLeft:"-530px"}}
         getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 50 }} fontSize="inherit" />}/>
       {value !== null && (
        <Box >{labels[hover !== -1 ? hover : value]}</Box>
      )}

        </Container>
      </Grid>
    </div>
  );
}

export default Product;
