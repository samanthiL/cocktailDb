// src/store.js
import { createStore, combineReducers } from 'redux';
import FavoriteReducer from './FavoriteReducer'; // Create this file

const rootReducer = combineReducers({
  Favorite: FavoriteReducer,
});

const store = createStore(rootReducer);

export default store;