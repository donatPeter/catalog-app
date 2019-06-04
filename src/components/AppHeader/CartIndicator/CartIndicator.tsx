import * as React from "react";

interface IProps {
  itemsInCart: number;
}

export class CartIndicator extends React.PureComponent<IProps, any> {
  public render() {
    return (
      <div style={{
        backgroundColor: 'indianred',
        borderRadius: '50%',
        margin: '10px',
        padding: '10px'
      }}>
        {this.props.itemsInCart}
      </div>
    );
  }
}
