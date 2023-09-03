import React, { useEffect, useState } from 'react';
  
import {
    useParams,
  } from "react-router-dom";
  import Header from '../../component/Header';
  import Button from '@mui/material/Button';
import Cocktail from '../../component/Cocktail';
import Favorite from '../../component/Favorite';

const  SearchBar =()=> {
    let { mode } = useParams();
    const [data1, setData1] = useState([]);
    const[favoriteSet,setFavoriteSet]= useState(false);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${mode}`)
            .then((response) =>
                response.json())
            .then((data) =>
                setData1(data.drinks)
            );
    }, [mode]);

const getFaviorit= ()=>{
  setFavoriteSet(true);
}

    return (
	<>
<Header />
<Button onClick={()=>getFaviorit()}>Faviourtt</Button>
{favoriteSet ?
<Favorite />
:
<Cocktail serchdata={data1} name={data1.strDrink} price={data1.idDrink} />
}
</>

    )}
export default SearchBar;