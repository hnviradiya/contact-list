import { IPost, IAuth } from '../../models/IPost';
import { postTypes } from '../Actiontypes/postsTypes';
import { authTypes } from '../Actiontypes/authTypes';

export interface PostsState {
  pending: boolean;
  posts: IPost[];
  error: string | null;
}

export interface FetchPostsSuccessPayload {
  posts: IPost[];
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface FetchPostsRequest {
  type: typeof postTypes.FETCH_POST_REQUEST;
}

export type FetchPostsSuccess = {
  type: typeof postTypes.FETCH_POST_SUCCESS;
  payload: FetchPostsSuccessPayload;
};

export type FetchPostsFailure = {
  type: typeof postTypes.FETCH_POST_FAILURE;
  payload: FetchPostsFailurePayload;
};

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure;

//---- auth login
export interface AuthLoginState {
  pending: boolean;
  posts: IPost[];
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
