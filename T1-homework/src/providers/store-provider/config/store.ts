import {Middleware, combineReducers, configureStore, isRejected} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {userReducer} from 'entities/user/slice/userSlice';
import {$api} from 'http/index';
import {authApi} from 'pages/auth-page/services/authApi';
import {loginReducer} from 'pages/auth-page/slice/loginSlice';
import {cartReducer} from 'pages/cart-page/slice/cartSlice';
import {productsApi} from 'services/product.api';
import {ThunkExtraArg} from './StateSchema';

const extraArg: ThunkExtraArg = {
  api: $api,
};


const rootReducer = combineReducers({
  cart: cartReducer,
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  loginForm: loginReducer,
  user: userReducer
})

export const rtkQueryErrorLogger: Middleware =
  () => (next) => (action) => {
    if (isRejected(action)) {
      console.log(action)
    }
    return next(action);
  };


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: {extraArgument: extraArg}})
    .concat(productsApi.middleware)
    .concat(authApi.middleware)
    .concat(rtkQueryErrorLogger)
})

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch)
