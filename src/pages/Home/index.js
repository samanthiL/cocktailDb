import React, { Component, useEffect, useState } from 'react';
import Header from '../../component/Header';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

const  Home =(prop)=> {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
        .then((response) => 
        response.json())
        .then((data) => setData(data.drinks));
        console.log("result",data)

    }, []);

    const randomData = data.sort(() => Math.random() - 0.5).slice(0, 5);

    const getNextRandomSet = () =>{
        return setData(data.sort(() => Math.random() - 0.5).slice(0, 5));
    }

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
      <Button size="small" onClick={getNextRandomSet}>Refresh</Button>

      {randomData.map((item,index) => (
     
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
  
    </Card>
   </Grid>
      ))}
            </Grid>
      </Grid>
    </Box>
    </>
        );
}

export default Home;
