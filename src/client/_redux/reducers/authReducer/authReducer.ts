import { authTypes } from '../../Actiontypes/authTypes';

const initialState: any = {
  pending: false,
  userId: '',
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case authTypes.LOGIN_AUTH_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case authTypes.LOGIN_AUTH_SUCCESS:
      return {
        ...state,
        pending: false,
        userId: action.payload.userId,
        error: null,
      };
    case authTypes.LOGIN_AUTH_FAILURE:
      return {
        ...state,
        pending: false,
        userId: '',
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
