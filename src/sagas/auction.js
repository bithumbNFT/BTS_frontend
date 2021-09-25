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

import {
  // 경매템 로드
  LOAD_AUCTION_REQUEST,
  LOAD_AUCTION_SUCCESS,
  LOAD_AUCTION_FAILURE,

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

function* loadAuctions(action) {
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

function addAuctionAPI(data) {
  return axios.post('/api/auction', data);
}

function* addAuction(action) {
  try {
    const result = yield call(addAuctionAPI, action.data);
    yield delay(1000);
    const id = shortId.generate();
    yield put({
      type: ADD_AUCTION_SUCCESS,
      data: {
        id,
        content: action.data,
      },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    });
  } catch (err) {
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
  yield takeLatest(LOAD_AUCTION_REQUEST, loadAuctions);
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
    fork(watchAddAuction),
    fork(watchRemoveAuction),
    fork(watchLikeAuctions),
    fork(watchUnLikeAuctions),
  ]);
}
