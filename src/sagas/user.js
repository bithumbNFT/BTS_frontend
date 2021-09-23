import axios from 'axios';
import { redirect, push } from 'utils/historyUtils';
import {
  all,
  fork,
  takeLatest,
  delay,
  put,
  call,
} from '@redux-saga/core/effects';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  NAVER_LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
} from '../reducers/user';
//------------------------------------------------
function kakaoLogInAPI(code, state) {
  const response = axios({
    method: 'GET',
    url: `/test?code=${code}&state=${state}&type=kakao`,
  });
  // [TODO] 실제 response로 바꿔야함 , 토큰 받아서 axios header에 저장
  const dummyData = {
    data: {
      id: 1,
      email: 'qor7111@naver.com',
      social: 'naver',
      name: '백인준',
      picture: 'https://ssl.pstatic.net/static/pwe/address/img_profile.png',
      coinWallet: '',
      token: 'accesstoken',
      refreshToken: 'refreshToken',
    },
  };
  return dummyData;
}

function* kakaoLogIn(action) {
  try {
    console.log('사가 로그인');
    const result = yield call(kakaoLogInAPI, action.payload);
    const ACCESS_TOKEN = result.data.token;
    localStorage.setItem('token', ACCESS_TOKEN);
    // yield localStorage.setItem('token', ACCESS_TOKEN);
    yield delay(2000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
    yield call(redirect, '/');
    console.log('redirect');
  } catch (err) {
    console.log('사가 로그인 실패');
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response,
    });
    yield call(redirect, '/');
  }
}
//------------------------------------------------

function naverLogInAPI(code, state) {
  const response = axios({
    method: 'GET',
    url: `/test?code=${code}&state=${state}&type=naver`,
  });
  // [TODO] 실제 response로 바꿔야함
  const dummyData = {
    data: {
      email: 'qor7111@naver.com',
      social: 'naver',
      name: '백인준',
      picture: 'https://ssl.pstatic.net/static/pwe/address/img_profile.png',
      coinWallet: '',
      token: 'accesstoken',
      refreshToken: 'refreshToken',
    },
  };
  return dummyData;
}

function* naverLogIn(action) {
  try {
    console.log('사가 로그인');
    const result = yield call(
      naverLogInAPI,
      action.data.code,
      action.data.state,
    );
    const ACCESS_TOKEN = result.data.token;
    localStorage.setItem('token', ACCESS_TOKEN);
    yield delay(2000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });

    yield call(redirect, '/');
    console.log('redirect');
  } catch (err) {
    console.log('사가 로그인 실패');
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response,
    });
    yield call(redirect, '/');
  }
}
//------------------------------------------------

function logOutAPI() {
  const response = axios({
    method: 'GET',
    url: '/logout',
  });
  return response;
}

function* logOut() {
  try {
    const result = yield call(logOutAPI);
    localStorage.removeItem('token');
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

//------------------------------------------------

function* watchKakaoLogIn() {
  yield takeLatest(LOG_IN_REQUEST, kakaoLogIn);
}
function* watchNaverLogIn() {
  yield takeLatest(NAVER_LOG_IN_REQUEST, naverLogIn);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga() {
  yield all([fork(watchKakaoLogIn), fork(watchNaverLogIn), fork(watchLogOut)]);
}
