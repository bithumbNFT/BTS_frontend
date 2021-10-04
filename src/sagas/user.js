import axios from 'axios';
import { instance } from 'utils/axiosUtils';
import { redirect, push } from 'utils/historyUtils';
import { setCookie, getCookie } from 'utils/cookieUtils';
import {
  all,
  fork,
  takeLatest,
  put,
  call,
  throttle,
} from '@redux-saga/core/effects';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  NAVER_LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  CREATE_WALLET_SUCCESS,
  CREATE_WALLET_FAILURE,
  CREATE_WALLET_REQUEST,
  CHECK_BALANCE_SUCCESS,
  CHECK_BALANCE_FAILURE,
  CHECK_BALANCE_REQUEST,
} from '../reducers/user';

//------------------------------------------------
function kakaoLogInAPI(code, state) {
  const response = axios({
    method: 'post',
    url: 'auth/login',
    data: {
      code,
      state,
      social: 'kakao',
    },
  });
  return response;
}

function* kakaoLogIn(action) {
  try {
    const result = yield call(
      kakaoLogInAPI,
      action.data.code,
      action.data.state,
    );
    // eslint-disable-next-line camelcase
    const { token, refresh_token, ...userInfo } = result.data;
    localStorage.setItem('token', token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('social', 'kakao');
    setCookie('refresh', refresh_token, {
      path: '/',
      secure: true,
      sameSite: 'none',
    });
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
    yield call(redirect, '/');
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
    method: 'post',
    url: 'auth/login',
    data: {
      code,
      state,
      social: 'naver',
    },
  });
  return response;
}

function* naverLogIn(action) {
  try {
    console.log('사가 로그인');
    const result = yield call(
      naverLogInAPI,
      action.data.code,
      action.data.state,
    );

    // eslint-disable-next-line camelcase
    const { token, refresh_token, ...userInfo } = result.data;
    localStorage.setItem('token', token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('social', 'naver');
    setCookie('refresh', refresh_token, {
      path: '/',
      secure: true,
      sameSite: 'none',
    });
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
  }
}
//------------------------------------------------
function logoutAPI(social) {
  const response = instance({
    method: 'post',
    url: '/auth/logout',
    headers: {
      refresh: getCookie('refresh'),
    },
    data: {
      social,
    },
  });
  return response;
}

function* logOut(action) {
  try {
    yield call(logoutAPI, action.data.social);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
    // 로그아웃 시, localstorage에 저장된 토큰 삭제
    localStorage.clear();
    yield call(redirect, '/');
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

//------------------------------------------------
function createWalletAPI(user) {
  const response = instance.get(`/main/Wallet/create/${user}`);
  return response;
}

function* createWallet(action) {
  try {
    const result = yield call(createWalletAPI, action.data);
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    userInfo = { ...userInfo, coin_wallet: result.address };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    yield put({
      type: CREATE_WALLET_SUCCESS,
      data: result.address,
    });
  } catch (err) {
    console.log('사가 지갑 실패');
    yield put({
      type: CREATE_WALLET_FAILURE,
      error: err.response,
    });
  }
}
//------------------------------------------------

function checkBalanceAPI(wallet) {
  const response = instance({
    method: 'GET',
    url: `main/Wallet/much/${wallet}`,
  });

  return response;
}

function* checkBalance(action) {
  try {
    const result = yield call(checkBalanceAPI, action.payload);
    yield put({
      type: CHECK_BALANCE_SUCCESS,
      data: result.data.klay,
    });
  } catch (err) {
    console.log('사가 잔고 조회 실패');
    yield put({
      type: CHECK_BALANCE_FAILURE,
      error: err.response,
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
function* watchCreateWallet() {
  console.log('watchCreateWallet in saga');
  yield throttle(500, CREATE_WALLET_REQUEST, createWallet);
}

function* watchCheckBalanceWallet() {
  yield takeLatest(CHECK_BALANCE_REQUEST, checkBalance);
}

export default function* userSaga() {
  yield all([
    fork(watchKakaoLogIn),
    fork(watchNaverLogIn),
    fork(watchLogOut),
    fork(watchCreateWallet),
    fork(watchCheckBalanceWallet),
  ]);
}
