import {AppRoutes, getRouteCart, getRouteMain, getRouteProductDetails} from "components/shared/const/routes";
import CartPage from "pages/cart-page/CartPage";
import Home from "pages/home-page/Home";
import {NotFoundPage} from "pages/not-found-page/NotFoundPage";
import SingleProduct from "pages/product-page/SingleProduct";
import {RouteProps} from "react-router-dom";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <Home />
  },
  [AppRoutes.PRODUCT]: {
    path: getRouteProductDetails('/:id'),
    element: <SingleProduct />,
  },
  [AppRoutes.CART]: {
    path: getRouteCart(),
    element: <CartPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
