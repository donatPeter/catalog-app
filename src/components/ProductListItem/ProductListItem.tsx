import * as React from "react";

import { Button, ButtonVariant } from "../Button/Button";
import { FlexHorizontal } from "../FlexHorizontal/FlexHorizontal";

interface IProps {
  id: number;
  name: string;
  amount: number;
  increment: (id: number) => void;
  decrement: (id: number) => void;
}

export class ProductListItem extends React.PureComponent<IProps, any> {
  public render() {
    const { amount, name } = this.props;
    return (
      <FlexHorizontal margin='10px 0px'>
        <div>{`${name} (${amount})`}</div>
        <Button margin='0px 10px' variant={ButtonVariant.KNOB} onClick={this.onIncrement} >+</Button>
        <Button disabled={!amount} margin='0px 10px' variant={ButtonVariant.KNOB} onClick={this.onDecrement} >-</Button>
      </FlexHorizontal>
    );
  }

  private onIncrement = () => {
    const { increment, id } = this.props;
    increment(id);
  }

  private onDecrement = () => {
    const { decrement, id } = this.props;
    decrement(id);
  }
}
