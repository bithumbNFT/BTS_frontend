import { all, fork } from 'redux-saga/effects';
import post from './post';
import user from './user';

export default function* rootSaga() {
  yield all([fork(user), fork(post)]);
}
