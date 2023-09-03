import React from 'react';
import { connect } from 'react-redux';
  import Box from '@mui/material/Box';
  import Grid from '@mui/material/Grid';
  import CardContent from '@mui/material/CardContent';
  import CardMedia from '@mui/material/CardMedia';
  import Typography from '@mui/material/Typography';
  import Card from '@mui/material/Card';
import { CardActions } from '@mui/material';
import { removeFromFavorite } from '../../redux/actions';

const  Favorite =({ FavoriteItems, removeFromFavorite })=> {
return(
<>

    <Box >
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
>
<Grid id="sdsdasd">
      {FavoriteItems.map((item,index) => (
    
      
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
<button onClick={() => removeFromFavorite(item.id)}>Remove</button>

</CardActions>
    
    </Card>

      ))}
   </Grid>
      </Grid>
    </Box>
    </>
        );
}


const mapStateToProps = (state) => {
  return {
    FavoriteItems: state.Favorite.items,
  };
};

export default connect(mapStateToProps, { removeFromFavorite })(Favorite);


