import * as React from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { IProduct } from '../../types/IProduct';
import { AppHeader } from '../../components/AppHeader/AppHeader';
import { IProductWithAmount } from '../../store/cart';

export interface IProps {
  products: IProduct[];
  productsInCart: IProductWithAmount[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
}

export class ProductCatalogBase extends React.Component<IProps> {
  public render() {
    const { products, productsInCart } = this.props;
    const itemsInCart = productsInCart.reduce((prev, acc) => acc.amount + prev, 0)
    return (
      <React.Fragment>
        <AppHeader itemsInCart={itemsInCart} />
        {products.map(({ name, id }) =>
          <ProductCard
            onAdd={this.addToCart}
            onRemove={this.removeFromCart}
            key={id}
            id={id}
            name={name}
            amount={this.getAmount(id)}>
          </ProductCard>)
        }
      </React.Fragment>
    );
  }

  private addToCart = (product: IProduct) => {
    this.props.addToCart(product);
  }

  private removeFromCart = (product: IProduct) => {
    this.props.removeFromCart(product);
  }

  private getAmount = (id: number) => {
    const { productsInCart } = this.props;
    const product = productsInCart.find(p => p.id === id);
    return product ? product.amount : 0;
  }
}
