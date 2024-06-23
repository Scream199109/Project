import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOKEN, USER_LOCALSTORAGE_KEY} from 'components/shared/const/localStorage';
import {userActions} from 'entities/user/slice/userSlice';
import {User} from 'pages/auth-page/types/user.types';
import {ThunkConfig} from 'providers/store-provider/config/StateSchema';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  'login/loginByUsername', async (authData, thunkApi) => {
    const {dispatch, rejectWithValue, extra} = thunkApi;

    try {
      const response = await extra.api.post<User>('auth/login', {...authData, expiresInMins: 3});

      if (!response.data) throw new Error();

      dispatch(userActions.setAuthData(response.data));

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      localStorage.setItem(TOKEN, response.data.token || '');

      return response.data;
    } catch (e) {
      console.log(e)
      return rejectWithValue('Incorrect username or password')
    }
  });
