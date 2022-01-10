import { AnyAction } from 'redux';

export interface State {
  userId?: string | null;
}

export const loginReducer = (
  state: State = { userId: null },
  action: AnyAction,
) => {
  switch (action.type) {
    case 'login':
      return { userId: state.userId };
    case 'logout':
      return { userId: null };
    default:
      return state;
  }
};

export default loginReducer;
