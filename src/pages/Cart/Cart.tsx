import * as React from 'react';
import { AppHeader } from '../../components/AppHeader/AppHeader';
import { ProductListItem } from '../../components/ProductListItem/ProductListItem';
import { IProductWithAmount } from '../../store/cart';

export interface IProps {
  productsInCart: IProductWithAmount[],
  increment: (id: number) => void;
  decrement: (id: number) => void;
}

export class CartBase extends React.Component<IProps> {
  public render() {
    return (
      <React.Fragment>
        <AppHeader />
        <div
          style={{
            margin: '20px 20px',
          }}>
          <h1>Cart Content:</h1>
          {this.renderCartContent()}
        </div>
      </React.Fragment>
    );
  }

  private renderCartContent = () => {
    const { productsInCart, increment, decrement } = this.props;
    if (productsInCart.length) {
      const listItems = productsInCart.map(({ amount, name, id }) =>
        <li key={id}>
          <ProductListItem
            amount={amount}
            name={name}
            id={id}
            increment={increment}
            decrement={decrement}
          ></ProductListItem>
        </li>
      );
      return (
        <ul>{listItems}</ul>
      )
    }
    return (
      <h2>There is no product in the cart.</h2>
    )
  }
}
