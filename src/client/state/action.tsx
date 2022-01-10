// actions.js
export const loginUser = (loginReducer: any) => ({
  type: 'LOGIN_USER',
  loginReducer,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});
