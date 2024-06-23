import {AxiosInstance} from "axios";
import {UserSchema} from "entities/user/types/user.types";
import {LoginSchema} from "pages/auth-page/types/loginSchema";
import {CartDetailsSchema} from "pages/cart-page/types/cartDetailsSchema";

export interface StateSchema {
  cart: CartDetailsSchema;
  loginForm: LoginSchema;
  user: UserSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
