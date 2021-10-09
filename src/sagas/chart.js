import axios from 'axios';
import { all, fork, takeLatest, put, call } from '@redux-saga/core/effects';
import {
  LOAD_COIN_REQUEST,
  LOAD_COIN_SUCCESS,
  LOAD_COIN_FAILURE,
} from '../reducers/chart';

function klaytnDataAPI() {
  const response = axios({
    method: 'get',
    url: 'main/klayapi',
  });
  return response;
}

function* klaytnData() {
  try {
    const result = yield call(klaytnDataAPI);
    yield put({
      type: LOAD_COIN_SUCCESS,
      data: result.data.data,
    });
  } catch (err) {
    console.error('클레이튼 데이터를 받아오지 못했습니다.');
    yield put({
      type: LOAD_COIN_FAILURE,
      error: err.response,
    });
  }
}

function* watchKlaytnData() {
  yield takeLatest(LOAD_COIN_REQUEST, klaytnData);
}

export default function* chartSaga() {
  yield all([fork(watchKlaytnData)]);
}
