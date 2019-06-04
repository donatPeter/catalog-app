import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '../../store/rootReducer';
import { Action as CartAction, increment, decrement } from '../../store/cart/actions';

import { selectProductsInCart } from '../../store/cart/selectors'

import { CartBase, IProps } from './Cart';

const mapStateToProps: MapStateToProps<any, any, IRootState> = (
  state: IRootState
) => {
  return {
    productsInCart: selectProductsInCart(state),
  };
};

const mapDispatchToProps: MapDispatchToProps<any, IProps> = (
  dispatch: Dispatch<CartAction>
) => ({
  decrement: (id: number) => dispatch(decrement(id)),
  increment: (id: number) => dispatch(increment(id))
});

export const CartPage: React.ComponentType<any> = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartBase);