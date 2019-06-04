import { IRoute } from '../types/IRoute';

import { CartPage } from '../pages/Cart/connect';
import { ProductCatalogPage } from '../pages/ProductCatalog/connect';
import { ROUTES } from './routes';

export const GLOBAL_ROUTES: IRoute[] = [
  {
    Component: ProductCatalogPage,
    id: 'catalog-page',
    path: `/`,
    title: 'Product Catalog',
  },
  {
    Component: CartPage,
    id: 'cart-page',
    path: `/${ROUTES.CART}`,
    title: 'Cart',
  },
];
