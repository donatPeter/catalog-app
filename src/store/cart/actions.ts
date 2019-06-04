import { IProduct } from "../../types/IProduct";

export enum ActionType {
  Add = 'ADD',
  Remove = 'REMOVE',
  Increment = 'INCREMENT',
  Decrement = 'DECREMENT',
}

export interface IAdd {
  payload: IProduct;
  type: ActionType.Add;
}
export const addToCart = (
  payload: IProduct
): IAdd => ({
  payload,
  type: ActionType.Add,
});

export interface IRemove {
  payload: IProduct;
  type: ActionType.Remove;
}
export const removeFromCart = (
  payload: IProduct
): IRemove => ({
  payload,
  type: ActionType.Remove,
});

export interface IIncrement {
  payload: number;
  type: ActionType.Increment;
}
export const increment = (
  payload: number
): IIncrement => ({
  payload,
  type: ActionType.Increment,
});

export interface IDecrement {
  payload: number;
  type: ActionType.Decrement;
}
export const decrement = (
  payload: number
): IDecrement => ({
  payload,
  type: ActionType.Decrement,
});


export type Action =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>;
