import { AnyAction } from 'redux';

export interface State {
  loggedIn: boolean;
}

export const loginReducer = (
  state: State = { loggedIn: false },
  action: AnyAction,
) => {
  switch (action.type) {
    case 'login':
      return { loggedIn: true };
    case 'logout':
      return { loggedIn: false };
    default:
      return state;
  }
};

export default loginReducer;
