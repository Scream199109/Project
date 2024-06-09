export enum AppRoutes {
  MAIN = 'main',
  PRODUCT = 'product',
  CART = 'cart',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteProductDetails = (id: string) => `/product${id}`;
export const getRouteCart = () => `/cart`;
export const getRouteForbidden = () => '/forbidden';
export const getRouteAbout = () => '/about';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteProductDetails(':id')]: AppRoutes.PRODUCT,
  [getRouteCart()]: AppRoutes.CART,
  [getRouteAbout()]: AppRoutes.NOT_FOUND,
};
