import { createSelector } from 'reselect';

import { IRootState } from '../rootReducer';

import {
  getProducts, IProductsState
} from '.';

export const createProductSelector = createSelector(
  (state: IRootState): IProductsState => state.product,
  (products: IProductsState): IProductsState => products
);

export const selectProducts = createSelector(
  createProductSelector,
  getProducts
);

