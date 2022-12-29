import React ,{useState, useEffect }from "react";
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
import Cookie from 'js-cookie'
import axios from "axios";
import stringify from "json-stringify"
function UsersList() {
  const[data,setData]= useState({
    username:'',
    email:'',
    phone:'',
    city:'',
    state:''

 });


  const handleSubmit = () => {


    axios.get("http://localhost:3000/api/user/getAll",{
      headers: {
        'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTlhZjAxZjk2ODRiNjg4MjU0MDhkNCIsImFkbWluIjp0cnVlLCJpYXQiOjE2NzIyNzQyMzEsImV4cCI6MTY3MjQ0NzAzMX0._LDaAzf7sJhikSb9Mxne9vQ6fAGhDCFMUGy5LiHjUrY"
      } })
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
       console.log(stringify(Cookie.get("SavedToken")) )
       for(let i=0;i<13;i++){
       setData(response.data.users)
              }
      })

  };

  return (
    <div>
      {data.map((userDetails,i)=>(
       
       <Card sx={{ minWidth: 275 }}>
       <CardContent>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Word of the Day
         </Typography>
         <Typography variant="h5" component="div">
          {userDetails.email}
         </Typography>
         <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {userDetails.phone}
         </Typography>
         <Typography variant="body2">
           well meaning and kindly.
                
         </Typography>
       </CardContent>
     </Card>
        
    ))}
     
     
    </div>
  );
}

export default UsersList;
