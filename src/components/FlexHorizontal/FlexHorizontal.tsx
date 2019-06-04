import styled from '../../utils/styledComponents';

export interface IProps {
  align?: string;
  justify?: string;
  margin?: string;
  flexDirection?: string;
}

export const FlexHorizontal = styled.div<IProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  margin: ${({ margin }) => margin || '0px'};
  flex-wrap: 'nowrap';
`;
