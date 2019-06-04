import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '../../store/rootReducer';

import { selectProducts } from '../../store/product/selectors';

import { Action as CartAction, addToCart } from '../../store/cart/actions'

import { ProductCatalogBase, IProps } from './ProductCatalog';
import { IProduct } from '../../types/IProduct';

const mapStateToProps: MapStateToProps<any, any, IRootState> = (
  state: IRootState
) => {
  return {
    products: selectProducts(state),
  };
};

const mapDispatchToProps: MapDispatchToProps<any, IProps> = (
  dispatch: Dispatch<CartAction>
) => ({
  addToCart: (product: IProduct) => dispatch(addToCart(product))
});

export const ProductCatalogPage: React.ComponentType<any> = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCatalogBase);