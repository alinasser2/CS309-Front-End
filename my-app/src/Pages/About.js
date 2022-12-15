import React from "react";
import { Typography, Grid, CssBaseline, Container, link } from "@mui/material";
import { makeStyles} from '@mui/styles';


const useStayle = makeStyles({
    Bady:{
         background : "Linear-gradient(#264653,#2a9d8f,#2a9d8f,#e9c46a,#e9c46a,#f4a261,#f4a261,#e76f51)",
    },
    About:{
       

    },
    About_con:{

        

    },
    Contact:{

       

    },
    Contact_con:{

      

    },

}) ;
function About() {
 const  stayles = useStayle()
  return (
    <main>
        <div className={stayles.Bady}>
    <CssBaseline/>
      <Grid container justify="center"  >
        <Container  >
          <Typography variant="h2" align="center"  className={stayles.About}>
            ABOUT US
          </Typography>
          <div  className={stayles.About_con}>
          <Typography variant="h5" align="left">
            What this site for ?
          </Typography>
          <Typography variant="h6" align="left">
            This site made to people with passion to Art to make buing painting
            Easier for them
          </Typography>
          <Typography variant="h5" align="left">
            who made this site ?
          </Typography>
          <Typography variant="h6" align="left">
            This site made by Ali yasser , Mounir maged , Ali nasser and Shehab mohammed
          </Typography>
          </div>
        </Container>
        <Container >
          <Typography variant="h2" align="center"className={stayles.Contact}>
            CONTACT US
          </Typography>
          <div  className={stayles.Contact_con}>
          <Typography variant="h5">Emails :</Typography>
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

          <Typography variant="h5">Phone Number :</Typography>
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
    </main>
  );
}

export default About;
