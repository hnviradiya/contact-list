import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  authLoginFailure,
  authLoginSuccess,
} from '../../actions/authActions/authActions';
import { authTypes } from '../../Actiontypes/authTypes';

const authLogin = async (data: any) =>
  await axios.post('auth/login', data.payload);

function* authLoginSaga(data: any) {
  try {
    const response = yield call(authLogin, data);
    console.log('response', response);
    yield put(
      authLoginSuccess({
        userId: response.data.id,
      }),
    );
  } catch (e) {
    yield put(
      authLoginFailure({
        error: e.message,
      }),
    );
  }
}

function* authSaga() {
  yield all([takeLatest(authTypes.LOGIN_AUTH_REQUEST, authLoginSaga)]);
}

export default authSaga;
