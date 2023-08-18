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
import { useNavigate } from 'react-router-dom';

const  SearchBar =(props)=> {
    let { mode } = useParams();
    const navigate = useNavigate();

    const [data1, setData1] = useState([]);
    const irr = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${mode}`;
    console.log("irr", mode)
    console.log("irrirr", irr)

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${mode}`)
            .then((response) =>
                response.json())
            .then((data) =>
                setData1(data.drinks)
            );
        console.log("result", data1)
    }, []);
    const filterData = data1.filter((num)=> num.strDrink === mode);

    const addToFavioueiyr =()=>{
        navigate(`/favorite/${filterData[0].idDrink}`)

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

      {filterData.map((item,index) => (
     
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
<Button size="small" onClick={addToFavioueiyr}>Add</Button>

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


export default SearchBar;
