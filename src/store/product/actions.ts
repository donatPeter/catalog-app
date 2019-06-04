export enum ActionType {
  GetProducts = 'GET_PRODUCTS',
}

export interface IGetProducts {
  type: ActionType.GetProducts;
}
export const getProducts = (
): IGetProducts => ({
  type: ActionType.GetProducts,
});


export type Action =
  | ReturnType<typeof getProducts>;
