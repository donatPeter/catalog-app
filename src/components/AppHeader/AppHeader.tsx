import * as React from "react";

import { LinkButton } from "../Button/Button";
import { FlexHorizontal } from "../FlexHorizontal/FlexHorizontal";

interface IProps {
}

export class AppHeader extends React.PureComponent<IProps, any> {
  public render() {
    return (
      <div style={{
        backgroundColor: 'whitesmoke'
      }}>
        <FlexHorizontal
          justify="space-between"
          className='header'>
          <LinkButton
            to={'/'} >
            Home
        </LinkButton>
          <h1>Product Catalog</h1>
          <LinkButton
            to={'/cart'} >
            Cart
          </LinkButton>
        </FlexHorizontal>
      </div>
    );
  }
}
