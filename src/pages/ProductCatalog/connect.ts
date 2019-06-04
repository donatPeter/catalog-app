import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '../../store/rootReducer';
import { ProductCatalogBase, IProps } from './ProductCatalog';

const mapStateToProps: MapStateToProps<any, any, IRootState> = (
  state: IRootState
) => {
  return {};
};

const mapDispatchToProps: MapDispatchToProps<any, IProps> = (
  dispatch: Dispatch<any>
) => ({});

export const ProductCatalogPage: React.ComponentType<any> = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCatalogBase);