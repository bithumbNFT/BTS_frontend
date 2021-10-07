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
import { instance } from 'utils/axiosUtils';
import { redirect, push } from 'utils/historyUtils';

import {
  // home 경매템 로드
  LOAD_AUCTION_REQUEST,
  LOAD_AUCTION_SUCCESS,
  LOAD_AUCTION_FAILURE,

  // 좋아요한 작품(wishlist) 경매템 로드
  LOAD_LIKE_AUCTION_REQUEST,
  LOAD_LIKE_AUCTION_SUCCESS,
  LOAD_LIKE_AUCTION_FAILURE,

  // 내가 등록한 작품(mypage) 경매템 로드
  LOAD_MY_AUCTION_REQUEST,
  LOAD_MY_AUCTION_SUCCESS,
  LOAD_MY_AUCTION_FAILURE,

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

  // 경매시작
  START_AUCTION_REQUEST,
  START_AUCTION_SUCCESS,
  START_AUCTION_FAILURE,

  // 입찰
  PARTICIPATE_AUCTION_REQUEST,
  PARTICIPATE_AUCTION_SUCCESS,
  PARTICIPATE_AUCTION_FAILURE,

  // 구매확정
  CONFIRM_PURCHASE_REQUEST,
  CONFIRM_PURCHASE_SUCCESS,
  CONFIRM_PURCHASE_FAILURE,
} from '../reducers/auction';

import { ADD_AUCTION_TO_ME, REMOVE_AUCTION_OF_ME } from '../reducers/user';

// home 모든 경매템 로드
function loadAuctionAPI() {
  return axios.get('main/NFT/allNFT');
}

function* loadAuction(action) {
  try {
    const result = yield call(loadAuctionAPI);
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

//  좋아요한 작품(wishlist) 경매템 로드
function loadLikeAuctionAPI(id) {
  console.log('user 값이 뭘까요 ?? ---->', id);
  return axios.get(`main/NFT/userlikelist/${id}`);
}

function* loadLikeAuction(action) {
  console.log('loadLikeAuctionAPI action', action);
  try {
    const result = yield call(loadLikeAuctionAPI, action.data);
    yield put({
      type: LOAD_LIKE_AUCTION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_LIKE_AUCTION_FAILURE,
      error: err.response.data,
    });
  }
}

//  내가 등록한 작품(mypage) 경매템 로드
function loadGetAuctionAPI(id) {
  return axios.get(`main/NFT/checkNftbyid/${id}`);
}

function* loadGetAuction(action) {
  console.log('loadGetAuction action', action);
  try {
    const result = yield call(loadGetAuctionAPI, action.data);
    console.log('loadGetAuction result', result);
    yield put({
      type: LOAD_MY_AUCTION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MY_AUCTION_FAILURE,
      error: err.response.data,
    });
  }
}

// 경매템 view 로드 (단일 게시물)
function loadOneAuctionAPI(id) {
  return instance.get(`main/NFT/checkNftbyNftid/${id}`);
}

function loadAuctionLikeCount(id) {
  return instance.get(`main/NFT/countlike/${id}`);
}
function* loadOneAuction(action) {
  try {
    const result = yield call(loadOneAuctionAPI, action.data);
    const likeCount = yield call(loadAuctionLikeCount, action.data);
    yield put({
      type: LOAD_ONE_AUCTION_SUCCESS,
      data: { auction: result.data, likes: likeCount.data.count },
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
  console.log(data);
  const response = instance.post('main/NFT/makeNFT', data);

  return response;
}

function* addAuction(action) {
  try {
    console.log(action);
    console.log('사가 작품 등록');
    const result = yield call(addAuctionAPI, action.data);
    console.log(result);
    // [TODO] 실제 nft id로 변경
    yield put({
      type: ADD_AUCTION_SUCCESS,
      data: result.data,
    });
    // yield put({
    //   type: ADD_AUCTION_TO_ME,
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
  console.log('data in remove AuctionAPI', data);
  const response = instance({
    url: 'main/NFT/deleteNFT',
    method: 'delete',
    data,
  });
  return response;
}

function* removeAuction(action) {
  try {
    console.log('action in remove', action);
    const result = yield call(removeAuctionAPI, action.data);
    console.log('result', result);
    yield put({
      type: REMOVE_AUCTION_SUCCESS,
      data: action.data.id,
    });
    // yield put({
    //   type: REMOVE_AUCTION_OF_ME,
    //   data: action.data.id,
    // });
  } catch (err) {
    yield put({
      type: REMOVE_AUCTION_FAILURE,
      data: err.response.data,
    });
  }
}

function likeAPI(data) {
  console.log('data', data);
  return axios({
    url: '/main/NFT/likeNFT',
    method: 'post',
    data: {
      nftid: data.nftid,
      user: data.user,
    },
  });
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
  return axios({
    url: '/main/NFT/likeNFT',
    method: 'delete',
    data: {
      nftid: data.nftid,
      user: data.user,
    },
  });
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

function startAuctionAPI(data) {
  const response = instance({
    method: '',
    url: '',
  });

  return response;
}

function* startAuction(action) {
  try {
    const result = yield call(startAuctionAPI, action.data);
    yield put({
      type: UNLIKE_AUCTION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: START_AUCTION_FAILURE,
      error: err.response.data,
    });
  }
}

function participateAuctionAPI(data) {
  const response = instance({
    method: '',
    url: '',
  });

  return response;
}

function* participateAuction(action) {
  // api function 생성 후 수정 필요
  try {
    const result = yield call(participateAuctionAPI, action.data);
    yield put({
      type: UNLIKE_AUCTION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: PARTICIPATE_AUCTION_FAILURE,
      error: err.response.data,
    });
  }
}

function confirmPurchaseAPI(data) {
  const response = instance({
    method: '',
    url: '',
  });

  return response;
}

function* confirmPurchase(action) {
  // api function 생성 후 수정 필요
  try {
    const result = yield call(confirmPurchaseAPI, action.data);
    yield put({
      type: UNLIKE_AUCTION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: CONFIRM_PURCHASE_FAILURE,
      error: err.response.data,
    });
  }
}

// home 경매템 게시물 로드
function* watchLoadAuction() {
  yield takeLatest(LOAD_AUCTION_REQUEST, loadAuction);
}

// 좋아요한 작품(wishlist) 경매템 로드
function* watchLoadLikeAuction() {
  yield takeLatest(LOAD_LIKE_AUCTION_REQUEST, loadLikeAuction);
}

// 내가 등록한 작품(mypage) 경매템 로드
function* watchLoadGetAuction() {
  yield takeLatest(LOAD_MY_AUCTION_REQUEST, loadGetAuction);
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

// 경매 시작 로딩
function* watchStartAuctions() {
  yield throttle(2000, START_AUCTION_REQUEST, startAuction);
}

// 입찰 로딩
function* watchParticipateAuctions() {
  yield throttle(1000, PARTICIPATE_AUCTION_REQUEST, participateAuction);
}

// 구매확정 로딩
function* watchConfirmPurchase() {
  yield throttle(2000, CONFIRM_PURCHASE_REQUEST, confirmPurchase);
}

export default function* auctionSaga() {
  yield all([
    fork(watchLoadAuction),
    fork(watchLoadLikeAuction),
    fork(watchLoadGetAuction),
    fork(watchLoadOneAuction),
    fork(watchAddAuction),
    fork(watchRemoveAuction),
    fork(watchLikeAuctions),
    fork(watchUnLikeAuctions),
    fork(watchParticipateAuctions),
    fork(watchConfirmPurchase),
  ]);
}
