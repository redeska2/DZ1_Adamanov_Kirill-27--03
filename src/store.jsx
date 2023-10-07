import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer';
import productsReducer from './components/productsSlice';  // Импортируем productsSlice

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer  // Добавляем редьюсер продуктов
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) 
);

export default store;
