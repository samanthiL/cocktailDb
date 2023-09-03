import React, { Component, useEffect, useState } from 'react';
  
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import Header from '../../component/Header';
  import Box from '@mui/material/Box';
  import Paper from '@mui/material/Paper';
  import Grid from '@mui/material/Grid';
  import CardContent from '@mui/material/CardContent';
  import CardMedia from '@mui/material/CardMedia';
  import Button from '@mui/material/Button';
  import Typography from '@mui/material/Typography';
  import Card from '@mui/material/Card';
import { CardActions } from '@mui/material';
      
const  Favorite =(props)=> {
    let { mode } = useParams();

    const [data1, setData1] = useState([]);
console.log("mode",mode);
    useEffect(() => {
        fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${mode}`)
            .then((response) =>
                response.json())
            .then((data) =>
            setData1(data.drinks)
            );
    }, []);
    // const filterData = data1.filter((num)=> num.strDrink === mode);
    const favouritArray = [];
    favouritArray.push(data1);
    console.log("favouritArray",data1)
	return (
	<>
<Header />
    <Box sx={{ flexGrow: 1 }}>
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
//   style={{ minHeight: '100vh' }}
>
      <Grid container spacing={2}>

      {favouritArray.map((item,index) => (
     
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }} key={item.idDrink}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.strDrinkThumb}
        title="green iguana"
      /> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.strDrink}
        </Typography>
      </CardContent>
<CardActions>

</CardActions>
    
    </Card>
   </Grid>
      ))}
            </Grid>
      </Grid>
    </Box>
    </>
        );
}


export default Favorite;
