import { createSlice } from "@reduxjs/toolkit";
import { UserApi } from "../api/UserAPI";
import { setCookie } from '../helpers/Cookies';

export const UserSlice = createSlice({
  name: "login",
  initialState: {
    isAuth: false,
    user: {},
    error: null,
    token: '',
    isLoading: false
  },
  reducers: {
    api_success: (state, action) => {
      const { user, token } = action.payload;
      state.isAuth = true;
      state.user = user;
      state.token = token;
      state.error = null;
      state.isLoading = false;
    },
    registered: (state) => {
      state.isLoading = false;
    },
    api_error: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    set_loader: (state) => {
      state.error = null
      state.isLoading = true;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = {};
      state.token = '';
    },
    set_token: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { logout, api_success, api_error, set_loader, registered, set_token } =
  UserSlice.actions;

export function login(loginObj) {
  return async (dispatch) => {
    dispatch(set_loader())
    const loginResult = await UserApi.login(loginObj);
    if (loginResult.user) {
      setCookie('authToken', `token ${loginResult.token}`, 60);
        dispatch(
          api_success({
            user: loginResult.user,
            token: loginResult.token
          })
        )
    } else {
      dispatch(api_error(loginResult.error));
    }
  };
}

export function register(registerObj) {
  return async (dispatch) => {
    dispatch(set_loader())
    const registerResult = await UserApi.register(registerObj);
    if (registerResult.error) {
      let error_message = '';
      for (const item in registerResult.error) {
        error_message = error_message + "\n" + registerResult.error[item][0]
      }
      dispatch(api_error(error_message));
    } else {
      dispatch(registered())
    }
  };
}

export default UserSlice.reducer;