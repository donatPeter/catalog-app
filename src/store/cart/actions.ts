export enum ActionType {
  Add = 'ADD',
}

export interface IAddAncillary {
  type: ActionType.Add;
}
export const add = (
): IAddAncillary => ({
  type: ActionType.Add,
});


export type Action =
  | ReturnType<typeof add>;
