import { Action, ActionType } from './actions';

export interface ICartState {
}

export const initialState: ICartState = {
};

export function cartReducer(
  state: ICartState = initialState,
  action: Action
): ICartState {
  switch (action.type) {
    case ActionType.Add:
      return {
        ...state,
      };
    default:
      return state;
  }
}