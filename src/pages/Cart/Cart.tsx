import * as React from 'react';

export interface IProps {}

export class CartBase extends React.Component<IProps> {
  public render() {
    return (
      <React.Fragment>
        <p>Cart</p>
      </React.Fragment>
    );
  }
}
