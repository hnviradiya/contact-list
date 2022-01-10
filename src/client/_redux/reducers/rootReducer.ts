import { combineReducers } from 'redux';
import authReducer from './authReducer/authReducer';
import postReducer from './postsReducer/postsReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
