import * as React from "react";

import { LinkButton } from "../Button/Button";
import { FlexHorizontal } from "../FlexHorizontal/FlexHorizontal";
import { CartIndicator } from "./CartIndicator/CartIndicator";

interface IProps {
  itemsInCart: number;
}

export class AppHeader extends React.PureComponent<IProps, any> {
  public render() {
    return (
      <div style={{
        backgroundColor: 'whitesmoke'
      }}>
        <FlexHorizontal
          align="center"
          justify="space-between"
          className='header'>
          <LinkButton margin='20px' to={'/'} >Home</LinkButton>
          <h1>Product Catalog</h1>
          <LinkButton margin='20px' to={'/cart'} >
            Cart
            <CartIndicator itemsInCart={this.props.itemsInCart} />
          </LinkButton>
        </FlexHorizontal>
      </div>
    );
  }
}
