import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addToFavorite } from '../redux/actions';
const Cocktail =({ addToFavorite, randomData,getNextRandomSet ,serchdata})=> {
const [serchdataset,setSerchdataset] = useState([])

useEffect(()=>{
  setSerchdataset(serchdata)
},[serchdata])

  return(
  <Grid container spacing={2} 
  alignItems="center"
  justifyContent="center"
  marginLeft="5px">
    <Grid id="box" >
    <Button  variant="contained" size="small" onClick={getNextRandomSet} >Refresh</Button>
    </Grid>

{serchdataset ?
     serchdataset.map((product,index) => (
 
  <Grid item xs={4}>
  <Card sx={{ maxWidth: 345 }} key={product.idDrink}>
 <CardMedia
  sx={{ height: 140 }}
  image={product.strDrinkThumb}
  title="strDrinkThumb"
 /> 
 <CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {product.strDrink}

  </Typography>
 </CardContent>
 <Button onClick={() => addToFavorite(product)}>Add to Favorite</Button>
 </Card>
 </Grid>
 ))
:
  randomData.map((item,index) => (
    <Grid item xs={3}>
    <Card sx={{ maxWidth: 340 }} key={item.idDrink}>
  <CardMedia
    sx={{ height: 250,objectFit:'fill' }}
    image={item.strDrinkThumb}
    title="strDrinkThumb1"
  /> 
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {item.strDrink}
    </Typography>
    <Button onClick={() => addToFavorite(item)}>Add to Favorite</Button>
  </CardContent>
</Card>
</Grid>
 ))}
       </Grid>
  )
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, { addToFavorite })(Cocktail);