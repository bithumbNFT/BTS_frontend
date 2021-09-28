import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import userSaga from '../sagas/user';
import postSaga from '../sagas/post';
import auctionSaga from '../sagas/auction';
import userReducer from '../reducers/user';
import postReducer from '../reducers/post';
import auctionReducer from '../reducers/auction';

const rootReducer = combineReducers({
  userReducer,
  postReducer,
  auctionReducer,
});

export function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga), fork(auctionSaga)]);
}

export default rootReducer;
