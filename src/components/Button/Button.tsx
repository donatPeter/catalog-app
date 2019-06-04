import styled from '../../utils/styledComponents';

import { Link } from '@reach/router';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  KNOB = 'knob',
}

interface IProps {
  width?: string;
  height?: string;
  variant?: ButtonVariant;
  margin?: string;
  padding?: string;
}

export const Button = styled.button<IProps>`
  margin: ${({ margin }) => margin || '0px'};
  padding: ${({ padding }) => padding || '0px'};
  height: ${({ variant, height }) => {
    if (height) {
      return height;
    }
    switch (variant) {
      case ButtonVariant.KNOB:
        return '25px';
      default:
        return '48px';
    }
  }};
  font-size: 10px;
  font-weight: bold;
  border-radius: 4px;
  width: ${({ variant, width }) => {
    if (width) {
      return width;
    }
    switch (variant) {
      case ButtonVariant.KNOB:
        return '25px';
      default:
        return '120px';
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  color: black;
  background-color: ${({ disabled, variant }) => {
    if (disabled) {
      return 'lightgrey';
    }
    switch (variant) {
      case ButtonVariant.SECONDARY:
        return 'indianred';
      default:
        return 'green';
    }
  }};
  border: none
`;

export const LinkButton = Button.withComponent(Link);
