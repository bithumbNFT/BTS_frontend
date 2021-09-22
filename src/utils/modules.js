import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import userSaga from '../sagas/user';
import postSaga from '../sagas/post';
import userReducer from '../reducers/user';
import postReducer from '../reducers/post';

const rootReducer = combineReducers({
  userReducer,
  postReducer,
});

export function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}

export default rootReducer;
