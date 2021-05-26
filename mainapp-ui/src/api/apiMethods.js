import { SERVER_URL, POST_HEADERS } from "../helpers/constants";

export const apiMethods = {
  async fetchLogin({ email, password }) {
    let status;
    return fetch(SERVER_URL.concat("/users/login/"), {
      method: "POST",
      headers: POST_HEADERS,
      body: JSON.stringify({ user: { email, password } }),
    })
      .then((res) => {
        status = res.status
        return res.json()
      })
      .then((body) => {
        if (status >= 200 && status < 300) {
          return {
            user: {
              email: body.user.email,
              username: body.user.username,
              isStaff: body.user.isStaff
            },
            token: body.user.token,
            status: status
          };
        } else {
          return {
            error: body.errors.error,
            status: status
          }
        }
      })
  },
  async fetchRegister({ email, password, username }) {
    let status;
    return fetch(SERVER_URL.concat("/users/register/"), {
      method: "POST",
      headers: POST_HEADERS,
      body: JSON.stringify({ user: { email, password, username } }),
    })
      .then((res) => {
        status = res.status;
        return res.json();
      })
      .then((body) => {
        if (status >= 200 && status < 300) {
          return {};
        } else {
          return {
            error: body.errors,
            status: status
          }
        }
      })
  },
};