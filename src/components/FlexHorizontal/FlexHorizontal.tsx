import styled from '../../utils/styledComponents';

export interface IProps {
  align?: string;
  justify?: string;
  margin?: string;
}

export const FlexHorizontal = styled.div<IProps>`
  display: flex;
  flex-direction: 'row';
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  margin: ${({ margin }) => margin || '0px'};
  flex-wrap: 'nowrap';
`;
