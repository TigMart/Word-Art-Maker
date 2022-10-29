const auth = window.localStorage.getItem("token");
let userState = auth ? JSON.parse(auth) : null;

export const authReducer = (state = userState, action) => {
  if (action.type === "LOGGED_IN_USER") {
    return {
      ...state,
      ...action.payload,
    };
  }
  if (action.type === "LOGOUT") {
    return action.payload;
  }

  return state;
};
