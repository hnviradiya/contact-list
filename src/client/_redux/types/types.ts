import { IAuth } from '../../models/IAuth';
import { authTypes } from '../Actiontypes/authTypes';

//---- auth login
export interface AuthLoginState {
  pending: boolean;
  userId: IAuth[];
  error: string | null;
}

export interface AuthLoginRequestPayload {
  data: object;
}
export interface AuthLoginSuccessPayload {
  userId: IAuth[];
}

export interface AuthLoginFailurePayload {
  error: string;
}

export interface AuthLoginRequest {
  type: typeof authTypes.LOGIN_AUTH_REQUEST;
  payload: AuthLoginRequestPayload;
}

export type AuthLoginSuccess = {
  type: typeof authTypes.LOGIN_AUTH_SUCCESS;
  payload: AuthLoginSuccessPayload;
};

export type AuthLoginFailure = {
  type: typeof authTypes.LOGIN_AUTH_FAILURE;
  payload: AuthLoginFailurePayload;
};

export type AuthLoginActions =
  | AuthLoginRequest
  | AuthLoginSuccess
  | AuthLoginFailure;
