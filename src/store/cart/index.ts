import { Action, ActionType } from './actions';
import { IProduct } from '../../types/IProduct';

export interface IProductWithAmount extends IProduct {
  amount: number;
}

export interface ICartState {
  productsInCart: IProductWithAmount[];
}

export const initialState: ICartState = {
  productsInCart: [],
};

export function cartReducer(
  state: ICartState = initialState,
  action: Action
): ICartState {
  switch (action.type) {
    case ActionType.Add:
      const temp = state.productsInCart.find(p => p.id === action.payload.id)
      if (temp) {
        const rest = state.productsInCart.filter(p => p.id !== action.payload.id);
        return {
          ...state,
          productsInCart: [...rest, { ...action.payload, amount: temp.amount + 1 }],
        };
      } else {
        return {
          ...state,
          productsInCart: [...state.productsInCart, { ...action.payload, amount: 1 }],
        };
      }
    case ActionType.Remove:
      return {
        ...state,
        productsInCart: state.productsInCart.filter(p => p.id !== action.payload.id),
      };
    case ActionType.Increment:
      return {
        ...state,
        productsInCart: state.productsInCart.map(p => {
          if (p.id === action.payload) {
            return {
              name: p.name,
              id: p.id,
              amount: p.amount + 1
            }
          }
          return p;
        }),
      };
    case ActionType.Decrement:
      return {
        ...state,
        productsInCart: state.productsInCart.map(p => {
          if (p.id === action.payload) {
            return {
              name: p.name,
              id: p.id,
              amount: p.amount - 1
            }
          }
          return p;
        }),
      };
    default:
      return state;
  }
}

export const getProductsInCart = (state: ICartState) => state.productsInCart;
