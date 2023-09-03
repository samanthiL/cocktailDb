import React from 'react';
import { connect } from 'react-redux';
import { removeFromFavorite } from '../redux/actions';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const Favorite = ({ FavoriteItems, removeFromFavorite }) => {
  return (
    
    FavoriteItems.map((item,index) => (
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }} key={item.idDrink}>
       <CardMedia
        sx={{ height: 140 }}
        image={item.strDrinkThumb}
        title="strDrinkThumb"
       /> 
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.strDrink}
      
        </Typography>
       </CardContent>
       <button onClick={() => removeFromFavorite(item.idDrink)}>Remove</button>
       </Card>
       </Grid>
       ))
      
  );
};

const mapStateToProps = (state) => {
  return {
    FavoriteItems: state.Favorite.items,
  };
};

export default connect(mapStateToProps, { removeFromFavorite })(Favorite);
