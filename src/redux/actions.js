export const addToFavorite = (product) => {
  return {
    type: 'ADD_TO_Favorite',
    payload: product,
  };
};

export const removeFromFavorite = (productId) => {
  return {
    type: 'REMOVE_FROM_Favorite',
    payload: productId,
  };
};