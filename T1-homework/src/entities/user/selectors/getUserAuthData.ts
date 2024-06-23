import {StateSchema} from "providers/store-provider/config/StateSchema";

export const getUserAuthData = (state: StateSchema) => state.user.authData;
