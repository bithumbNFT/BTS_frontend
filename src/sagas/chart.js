import { instance } from 'utils/axiosUtils';
import {
  all,
  fork,
  takeLatest,
  delay,
  put,
  call,
} from '@redux-saga/core/effects';
import {
  LOAD_COIN_REQUEST,
  LOAD_COIN_SUCCESS,
  LOAD_COIN_FAILURE,
} from '../reducers/chart';

function klaytnDataAPI() {
  const response = instance({
    method: 'GET',
    url: '/klayapi',
  });
  // [TODO] 실제 response로 바꿔야함
  const dummyData = {
    data: {
      time_stamp: 1620918000000, // 시간
      start_price: '3100', // 시가
      end_price: '3265', // 종가
      highest_price: '6900', // 고가
      lowest_price: '2660', // 저가
      trading_volume: '20306439.987773099405751505', // 거래량
    },
  };
  return dummyData;
}

function* klaytnData() {
  try {
    const result = yield call(klaytnDataAPI);
    yield put({
      type: LOAD_COIN_SUCCESS,
      data: result.data,
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
  yield all([fork[watchKlaytnData]]);
}
