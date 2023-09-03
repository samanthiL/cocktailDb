import React, { useEffect, useState } from 'react';
import Header from '../../component/Header';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
  import Cocktail from '../../component/Cocktail';
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";

const  Home =()=> {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    let { mode } = useParams();
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
        .then((response) => 
        response.json())
        .then((data) => setData(data.drinks));
       
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
alignItems="center"
justifyContent="center"
marginTop= "25px"
>
        <Cocktail randomData={randomData} getNextRandomSet={getNextRandomSet} cocktail={data}  />
  </Grid>
</Box>
    </>
        );
}

export default Home;
