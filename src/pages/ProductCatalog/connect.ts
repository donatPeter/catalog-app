import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '../../store/rootReducer';

import { selectProducts } from '../../store/product/selectors';
import { selectProductsInCart } from '../../store/cart/selectors';

import { Action as CartAction, addToCart, removeFromCart } from '../../store/cart/actions'

import { ProductCatalogBase, IProps } from './ProductCatalog';
import { IProduct } from '../../types/IProduct';

const mapStateToProps: MapStateToProps<any, any, IRootState> = (
  state: IRootState
) => {
  return {
    products: selectProducts(state),
    productsInCart: selectProductsInCart(state),
  };
};

const mapDispatchToProps: MapDispatchToProps<any, IProps> = (
  dispatch: Dispatch<CartAction>
) => ({
  addToCart: (product: IProduct) => dispatch(addToCart(product)),
  removeFromCart: (product: IProduct) => dispatch(removeFromCart(product))
});

export const ProductCatalogPage: React.ComponentType<any> = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCatalogBase);