import { all } from 'redux-saga/effects';
import authSaga from './authSaga.ts/authSaga';
import postsSaga from './postsSaga.ts/postsSaga';

export function* rootSaga() {
  yield all([postsSaga(), authSaga()]);
}
