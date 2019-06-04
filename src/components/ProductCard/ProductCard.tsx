import * as React from "react";

import { Button, ButtonVariant } from "../Button/Button";
import { Card } from "../Card/Card";
import { IProduct } from "../../types/IProduct";
import { FlexHorizontal } from "../FlexHorizontal/FlexHorizontal";

interface IProps {
  id: number;
  name: string;
  amount: number;
  onAdd: (product: IProduct) => void;
  onRemove: (product: IProduct) => void;
}

export class ProductCard extends React.PureComponent<IProps, any> {
  public render() {
    const { name, amount } = this.props;
    return (
      <Card className="card">
        <FlexHorizontal flexDirection="column">
          <p>{name}</p>
          <FlexHorizontal flexDirection="column">
            <Button disabled={!!amount} margin='10px 0px' onClick={this.onAddClick}>Add to Cart</Button>
            <Button disabled={!amount} margin='10px 0px' variant={ButtonVariant.SECONDARY} onClick={this.onRemoveClick}>Remove from Cart</Button>
          </FlexHorizontal>
        </FlexHorizontal>
      </Card>
    );
  }

  private onAddClick = () => {
    const { onAdd, id, name } = this.props;
    onAdd({ id, name });
  }

  private onRemoveClick = () => {
    const { onRemove, id, name } = this.props;
    onRemove({ id, name });
  }
}
