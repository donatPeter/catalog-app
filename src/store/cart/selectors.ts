import { createSelector } from 'reselect';

import { IRootState } from '../rootReducer';

import {
  getProductsInCart, ICartState
} from '.';

export const createProductSelector = createSelector(
  (state: IRootState): ICartState => state.cart,
  (products: ICartState): ICartState => products
);

export const selectProductsInCart = createSelector(
  createProductSelector,
  getProductsInCart
);

