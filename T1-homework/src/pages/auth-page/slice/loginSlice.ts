import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {loginByUsername} from "../services/loginByUsername/loginByUsername";
import {LoginSchema} from "../types/loginSchema";

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: ''
};

type ActionPayloadType = PayloadAction<string>;

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: ActionPayloadType) => {
      state.username = action.payload;
    },
    setPassword: (state, action: ActionPayloadType) => {
      state.password = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        loginByUsername.fulfilled,
        (state) => {
          state.isLoading = false;
        },
      )
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
})

export const {actions: loginActions} = loginSlice;
export const {reducer: loginReducer} = loginSlice;
