import axios from 'axios';
import { instance } from 'utils/axiosUtils';
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
    const result = yield call(
      kakaoLogInAPI,
      action.data.code,
      action.data.state,
    );
    const { token, refreshToken, ...userInfo } = result.data;
    localStorage.setItem('token', token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
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

    const { token, refreshToken, ...userInfo } = result.data;
    localStorage.setItem('token', token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
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

function* logOut() {
  try {
    // 로그아웃 시, localstorage에 저장된 토큰 삭제
    localStorage.clear();
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
function createWalletAPI(user) {
  const response = instance({
    method: 'GET',
    url: '/test',
    // url: `/Wallet/create?user=${user}`,
  });

  const dummyData = {
    address: '0x65D074E30D1443fD66B76780b9F050A396baC46f',
  };

  return dummyData;
}

function* createWallet(action) {
  try {
    console.log('사가 지갑생성');
    const result = yield call(createWalletAPI, action.data.email);
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    userInfo = { ...userInfo, coinWallet: result.address };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    yield delay(2000);
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
    url: `/test?wallet=${wallet}`,
    // url: `/Wallet/much/`${wallet}`,
  });

  const dummyData = {
    klay: 7.990325,
  };

  return dummyData;
}

function* checkBalance(action) {
  try {
    console.log(action);
    console.log('사가 잔고 조회');
    const result = yield call(checkBalanceAPI, action.payload);
    yield delay(2000);
    yield put({
      type: CHECK_BALANCE_SUCCESS,
      data: result.klay,
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
  yield takeLatest(CREATE_WALLET_REQUEST, createWallet);
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
