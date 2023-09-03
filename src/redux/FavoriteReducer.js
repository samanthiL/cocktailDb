const initialState = {
  items: [],
};

const FavoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_Favorite':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_Favorite':
      return {
        ...state,
        items: state.items.filter(item => item.idDrink !== action.payload),
        
      };
      
    default:
      return state;
  }
};

export default FavoriteReducer;
