import axios from "axios";
import {TOKEN, USER_LOCALSTORAGE_KEY} from "components/shared/const/localStorage";

export const API_URL = 'https://dummyjson.com';

export const $api = axios.create({
  baseURL: API_URL
})

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN);
  config.headers.Authorization = `Bearer ${token}` || '';
  return config;
})

$api.interceptors.response.use((config) => {
  return config;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      let refreshToken;
      if (user) {
        refreshToken = JSON.parse(user)?.refreshToken
      }
      const response = await axios.post(`${API_URL}/auth/refresh`, {refreshToken});
      localStorage.setItem(TOKEN, response.data.token)
      return $api.request(originalRequest)
    } catch (e) {
      console.log(e)
    }
  }
  throw error
})
