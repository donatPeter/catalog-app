import { combineReducers } from 'redux';

import { cartReducer as cart, ICartState } from './cart';
import { productsReducer as product, IProductsState } from './product';

export interface IRootState {
  cart: ICartState;
  product: IProductsState;
}

export const rootReducer = combineReducers({
  cart,
  product,
});
