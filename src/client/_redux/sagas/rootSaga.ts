import { all } from 'redux-saga/effects';
import authSaga from './authSaga.ts/authSaga';

export function* rootSaga() {
  yield all([authSaga()]);
}
