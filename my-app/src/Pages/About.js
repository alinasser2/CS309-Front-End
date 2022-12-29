import React from "react";
import { Typography, Grid, CssBaseline, Container, link } from "@mui/material";




function About() {

  return (
    
        <div className={""}>
    <CssBaseline/>
      <Grid container justify="center"  >
        <Container  >
          <Typography variant="h2" align="center" style={{background:"burlywood"}}  className={""}>
            ABOUT US
          </Typography>
          <div  className={""}>
          <Typography variant="h4" align="left">
            What this site for ?
          </Typography>
          <Typography variant="h6" align="left">
            This site made to people with passion to Art to make buing painting
            Easier for them
          </Typography>
          <Typography variant="h4" align="left">
            who made this site ?
          </Typography>
          <Typography variant="h6" align="left">
            This site made by Ali yasser , Mounir maged , Ali nasser and Shehab mohammed
          </Typography>
          </div>
        </Container>
        <Container >
          <Typography variant="h2" align="center" style={{background:"burlywood"}} className={""}>
            CONTACT US
          </Typography>
          <div  className={""}>
          <Typography variant="h4">Emails :</Typography>
          <Typography variant="h6" align="left">
             Mounirmageddg@gmail.com
          </Typography>
          <Typography variant="h6" align="left">
            alinasser2002full2g@gmail.com
          </Typography>
          <Typography variant="h6" align="left">
            Mounirmageddg@gmail.com
          </Typography>
          <Typography variant="h6" align="left">
            Mounirmageddg@gmail.com
          </Typography> 

          <Typography variant="h4">Phone Number :</Typography>
          <Typography variant="h6" align="left">
            2002-274-13
          </Typography>
          <Typography variant="h6" align="left">
          2002-274-39
          </Typography>
          <Typography variant="h6" align="left">
         2002-271-87
          </Typography>
          <Typography variant="h6" align="left">
          2002-270-42
          </Typography>
          </div>
        </Container>
      </Grid>
      </div>
   
  );
}

export default About;
