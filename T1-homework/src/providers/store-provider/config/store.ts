import {Middleware, combineReducers, configureStore, isRejected} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {cartReducer} from 'pages/cart-page/slice/cartSlice'
import {productsApi} from 'services/product.api'

const rootReducer = combineReducers({
  cart: cartReducer,
  [productsApi.reducerPath]: productsApi.reducer,
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
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware).concat(rtkQueryErrorLogger)
})

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch)
