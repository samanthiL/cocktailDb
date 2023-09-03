import React from 'react';
import { connect } from 'react-redux';
import { addToFavorite } from '../redux/actions';
import Favorite from './Favorite';
import {  useEffect, useState } from 'react';

const ProductList = ({  addToFavorite }) => {
  const[favoriteSet,setFavoriteSet]= useState(false);
  const getFaviorit= ()=>{
    setFavoriteSet(true);
  }
const [products, setProducts] = useState([]);

useEffect(() => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
  .then((response) => 
  response.json())
  .then((data) => setProducts(data.drinks));
 
}, []);

 
  return (
<> 
<button onClick={()=>getFaviorit()}>Faviourtt</button>

    {favoriteSet ?
          <Favorite />

    :
    
    <div>
      <h2>Products</h2>
       <ul>
        {products.map(product => (
          <li key={product.idDrink}>
<p>title: {product.strDrink}</p>


            <button onClick={() => addToFavorite(product)}>Add to Favorite</button>
          </li>
        ))}
      </ul> 
    </div>
        }
        </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, { addToFavorite })(ProductList);
