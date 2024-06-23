import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOKEN} from 'components/shared/const/localStorage';
import {API_URL} from 'http/index';
import {User} from 'pages/auth-page/types/user.types';
import {ThunkConfig} from 'providers/store-provider/config/StateSchema';


export const checkMe = createAsyncThunk<
  User,
  undefined,
  ThunkConfig<string>
>(
  'auth/checkMe', async (_, thunkApi) => {
    const {rejectWithValue, extra} = thunkApi;

    try {
      const token = localStorage.getItem(TOKEN);

      const response = await extra.api.get(`${API_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      return response.data;
    } catch (e) {
      console.log(e)
      return rejectWithValue('401 UnAuthorized')
    }
  });
