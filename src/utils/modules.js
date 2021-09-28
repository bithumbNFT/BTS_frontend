import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import userSaga from '../sagas/user';
import postSaga from '../sagas/post';
import chartSaga from '../sagas/chart';
import auctionSaga from '../sagas/auction';

import userReducer from '../reducers/user';
import postReducer from '../reducers/post';
import chartReducer from '../reducers/chart';
import auctionReducer from '../reducers/auction';

const rootReducer = combineReducers({
  userReducer,
  postReducer,
  chartReducer,
  auctionReducer,
});

export function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(postSaga),
    fork(chartSaga),
    fork(auctionSaga),
  ]);
}

export default rootReducer;
