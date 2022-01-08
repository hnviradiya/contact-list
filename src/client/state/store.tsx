import { Context, createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore, Store } from 'redux';
import logger from 'redux-logger';
import loginReducer, { State } from './reducer';

export const makeStore = (context: Context) => {
  const store = createStore(loginReducer, applyMiddleware(logger));
  return store;
};

export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });
