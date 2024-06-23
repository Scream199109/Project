import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {TOKEN, USER_LOCALSTORAGE_KEY} from 'components/shared/const/localStorage';
import {API_URL} from 'http/index';
import {User} from 'pages/auth-page/types/user.types';
import {ThunkConfig} from 'providers/store-provider/config/StateSchema';


export const checkAuth = createAsyncThunk<
  User,
  undefined,
  ThunkConfig<string>
>(
  'auth/checkAuth', async (authData, thunkApi) => {
    const {rejectWithValue} = thunkApi;

    try {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      let refreshToken;

      if (user) {
        refreshToken = JSON.parse(user)?.refreshToken
      }
      // const response = await axios.post(`${API_URL}/auth/refresh`, {refreshToken});

      // localStorage.setItem(TOKEN, response.data.token);

      return response.data;
    } catch (e) {
      console.log(e)
      return rejectWithValue('401 UnAuthorized')
    }
  });
