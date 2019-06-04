import * as React from "react";

import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { IProduct } from "../../types/IProduct";

interface IProps {
  id: number;
  name: string;
  onClick: (product: IProduct) => void;
}

export class Product extends React.PureComponent<IProps, any> {
  public render() {
    const { name } = this.props;
    return (
      <Card className="card">
        <p>{name}</p>
        <Button onClick={this.onButtonClick}>Add to Cart</Button>
      </Card>
    );
  }

  private onButtonClick = () => {
    const { onClick, id, name } = this.props;
    onClick({ id, name });
  }
}
