import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {USER_LOCALSTORAGE_KEY} from "components/shared/const/localStorage";
import {User} from "pages/auth-page/types/user.types";
import {UserSchema} from "../types/user.types";

const initialState: UserSchema = {};

type ActionPayloadType = PayloadAction<User>;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: ActionPayloadType) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    },
  },
})

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;
