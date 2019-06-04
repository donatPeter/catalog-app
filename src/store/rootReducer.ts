import { combineReducers } from 'redux';

import { cartReducer as cart, ICartState } from './cart';

export interface IRootState {
  cart: ICartState;
}

export const rootReducer = combineReducers({
  cart,
});
