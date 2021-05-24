import { apiMethods } from "./apiMethods";

export const UserApi = {
  login(loginData) {
    return apiMethods.fetchLogin(loginData);
  },
  register(registerData) {
    return apiMethods.fetchRegister(registerData);
  },
};