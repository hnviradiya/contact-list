import { authTypes } from '../../Actiontypes/authTypes';
import {
  AuthLoginFailure,
  AuthLoginFailurePayload,
  AuthLoginRequestPayload,
  AuthLoginRequest,
  AuthLoginSuccess,
  AuthLoginSuccessPayload,
} from '../../types/types';

export const authLoginRequest = (
  payload: AuthLoginRequestPayload,
): AuthLoginRequest => ({
  type: authTypes.LOGIN_AUTH_REQUEST,
  payload,
});

export const authLoginSuccess = (
  payload: AuthLoginSuccessPayload,
): AuthLoginSuccess => ({
  type: authTypes.LOGIN_AUTH_SUCCESS,
  payload,
});

export const authLoginFailure = (
  payload: AuthLoginFailurePayload,
): AuthLoginFailure => ({
  type: authTypes.LOGIN_AUTH_FAILURE,
  payload,
});
