import { Action } from './actions';
import { IProduct } from '../../types/IProduct';


export interface IProductsState {
  products: IProduct[];
}

export const initialState: IProductsState = {
  // TODO: fetch from server
  products: [{
    id: 1,
    name: 'device1'
  }, {
    id: 2,
    name: 'device2'
  },]
};

export function productsReducer(
  state: IProductsState = initialState,
  action: Action
): IProductsState {
  switch (action.type) {
    default:
      return state;
  }
}

export const getProducts = (state: IProductsState) => state.products;
