import {
  all,
  fork,
  delay,
  put,
  takeLatest,
  call,
  throttle,
} from '@redux-saga/core/effects';
import axios from 'axios';
import shortId from 'shortid';
import { instance } from 'utils/axiosUtils';
import { redirect, push } from 'utils/historyUtils';

import {
  // 경매템 로드
  LOAD_AUCTION_REQUEST,
  LOAD_AUCTION_SUCCESS,
  LOAD_AUCTION_FAILURE,

  // 경매템 view 로드 (단일 게시물)
  LOAD_ONE_AUCTION_REQUEST,
  LOAD_ONE_AUCTION_SUCCESS,
  LOAD_ONE_AUCTION_FAILURE,

  // 경매템 작성
  ADD_AUCTION_REQUEST,
  ADD_AUCTION_SUCCESS,
  ADD_AUCTION_FAILURE,

  // 경매템 삭제
  REMOVE_AUCTION_REQUEST,
  REMOVE_AUCTION_SUCCESS,
  REMOVE_AUCTION_FAILURE,

  // 경매템 찜하기
  LIKE_AUCTION_REQUEST,
  LIKE_AUCTION_SUCCESS,
  LIKE_AUCTION_FAILURE,

  // 경매템 찜 취소
  UNLIKE_AUCTION_REQUEST,
  UNLIKE_AUCTION_SUCCESS,
  UNLIKE_AUCTION_FAILURE,
} from '../reducers/auction';

import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

// 경매템 로드
function loadAuctionAPI(lastId) {
  return axios.get(`/posts?lastId=${lastId || 0}`);
}

function* loadAuction(action) {
  try {
    const result = yield call(loadAuctionAPI, action.lastId);
    yield put({
      type: LOAD_AUCTION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_AUCTION_FAILURE,
      error: err.response.data,
    });
  }
}

// 경매템 view 로드 (단일 게시물)
function loadOneAuctionAPI(data) {
  return axios.get(`/posts/${data}`);
}

function* loadOneAuction(action) {
  try {
    const result = yield call(loadOneAuctionAPI, action.data);
    yield put({
      type: LOAD_ONE_AUCTION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_ONE_AUCTION_FAILURE,
      error: err.response.data,
    });
  }
}

// 경매템 추가
function addAuctionAPI(data) {
  // const response = instance.post('/NFT/makeNFT', data);
  const response = instance.post('/test');
  const dummyData = {
    transactionHash:
      '0xa401e4c918d53aecdc89794b2bd3c59a8054a6d669bf1a6af737f37086bb7804',
    status: 'Submitted',
  };

  return dummyData;
}

function* addAuction(action) {
  try {
    console.log('사가 작품 등록');
    const result = yield call(addAuctionAPI, action.data);
    yield delay(1000);
    const id = shortId.generate();
    yield put({
      type: ADD_AUCTION_SUCCESS,
      data: {
        id,
        transactionHash: result.transactionHash,
        status: result.status,
      },
    });
    // [TODO] ADD_TO_ME 추가
    // yield put({
    //   type: ADD_POST_TO_ME,
    //   data: id,
    // });
    yield call(redirect, '/mypage');
  } catch (err) {
    console.log('사가 작품 등록 실패');
    yield put({
      type: ADD_AUCTION_FAILURE,
      data: err.response.data,
    });
  }
}

function removeAuctionAPI(data) {
  return axios.delete('/NFT/allNFT', data);
}

function* removeAuction(action) {
  try {
    const result = yield call(removeAuctionAPI, action.data);
    yield delay(1000);
    yield put({
      type: REMOVE_AUCTION_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_AUCTION_FAILURE,
      data: err.response.data,
    });
  }
}

function likeAPI(data) {
  return axios.patch(`/user/${data}/like`);
}

function* likeAuction(action) {
  try {
    const result = yield call(likeAPI, action.data);
    yield put({
      type: LIKE_AUCTION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LIKE_AUCTION_FAILURE,
      error: err.response.data,
    });
  }
}

function unLikeAPI(data) {
  return axios.delete(`/user/${data}/like`);
}

function* unLikeAuction(action) {
  try {
    const result = yield call(unLikeAPI, action.data);
    yield put({
      type: UNLIKE_AUCTION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UNLIKE_AUCTION_FAILURE,
      error: err.response.data,
    });
  }
}

// 경매템 게시물 로드
function* watchLoadAuction() {
  yield takeLatest(LOAD_AUCTION_REQUEST, loadAuction);
}

// 경매템 view 로드 (단일 게시물)
function* watchLoadOneAuction() {
  yield takeLatest(LOAD_ONE_AUCTION_REQUEST, loadOneAuction);
}
// 경매템 작성로드
function* watchAddAuction() {
  yield takeLatest(ADD_AUCTION_REQUEST, addAuction);
}

// 경매템 삭제로드
function* watchRemoveAuction() {
  yield takeLatest(REMOVE_AUCTION_REQUEST, removeAuction);
}

// 경매템 찜하기 로딩
function* watchLikeAuctions() {
  yield takeLatest(LIKE_AUCTION_REQUEST, likeAuction);
}

// 경매템 찜하기 취소 로딩
function* watchUnLikeAuctions() {
  yield throttle(2000, UNLIKE_AUCTION_REQUEST, unLikeAuction);
}

export default function* auctionSaga() {
  yield all([
    fork(watchLoadAuction),
    fork(watchLoadOneAuction),
    fork(watchAddAuction),
    fork(watchRemoveAuction),
    fork(watchLikeAuctions),
    fork(watchUnLikeAuctions),
  ]);
}
