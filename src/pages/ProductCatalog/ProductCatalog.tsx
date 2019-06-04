import * as React from 'react';
import { Product } from '../../components/ProductCard/ProductCard';
import { IProduct } from '../../types/IProduct';
import { AppHeader } from '../../components/AppHeader/AppHeader';

export interface IProps {
  products: IProduct[];
  addToCart: (product: IProduct) => void;
}

export class ProductCatalogBase extends React.Component<IProps> {
  public render() {
    const { products } = this.props;
    return (
      <React.Fragment>
        <AppHeader />
        {products.map(({ name, id }) =>
          <Product
            onClick={this.addToCart}
            key={id}
            id={id}
            name={name}>
          </Product>)
        }
      </React.Fragment>
    );
  }

  private addToCart = (product: IProduct) => {
    this.props.addToCart(product);
  }
}
