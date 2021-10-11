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

  // NFT 경매 아이템 검색
  SEARCH_NFT_REQUEST,
  SEARCH_NFT_SUCCESS,
  SEARCH_NFT_FAILURE,

  // 경매시작
  START_AUCTION_REQUEST,
  START_AUCTION_SUCCESS,
  START_AUCTION_FAILURE,

  // 입찰
  PARTICIPATE_AUCTION_REQUEST,
  PARTICIPATE_AUCTION_SUCCESS,
  PARTICIPATE_AUCTION_FAILURE,

  // 실시간 경매 상태 확인
  CHECK_AUCTION_REQUEST,
  CHECK_AUCTION_SUCCESS,
  CHECK_AUCTION_FAILURE,

  // 경매 종료
  TERMINATE_AUCTION_FAILURE,
  TERMINATE_AUCTION_SUCCESS,
  TERMINATE_AUCTION_REQUEST,

  // 경매 결과 조회
  JUST_CHECK_AUCTION_REQUEST,
  JUST_CHECK_AUCTION_SUCCESS,
  JUST_CHECK_AUCTION_FAILURE,
} from '../reducers/auction';

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
  return instance.get(`main/NFT/userlikelist/${id}`);
}

function* loadLikeAuction(action) {
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
  return instance.get(`main/NFT/checkNftbyid/${id}`);
}

function* loadGetAuction(action) {
  try {
    const result = yield call(loadGetAuctionAPI, action.data);
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
    if (result.data.auction === 'START') {
      yield put({
        type: CHECK_AUCTION_REQUEST,
        data: result.data.id,
        owner: result.data.email,
      });
    }
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
  const response = instance.post('main/NFT/makeNFT', data);

  return response;
}

function* addAuction(action) {
  try {
    const result = yield call(addAuctionAPI, action.data);
    yield put({
      type: ADD_AUCTION_SUCCESS,
      data: {
        ...result.data,
        username: JSON.parse(localStorage.getItem('userInfo')).name,
      },
    });
    yield call(redirect, '/mypage');
  } catch (err) {
    yield put({
      type: ADD_AUCTION_FAILURE,
      data: err.response.data,
    });
  }
}

function removeAuctionAPI(data) {
  const response = instance({
    url: 'main/NFT/deleteNFT',
    method: 'delete',
    data,
  });
  return response;
}

function* removeAuction(action) {
  try {
    const result = yield call(removeAuctionAPI, action.data);
    yield put({
      type: REMOVE_AUCTION_SUCCESS,
      data: action.data.id,
    });
  } catch (err) {
    yield put({
      type: REMOVE_AUCTION_FAILURE,
      data: err.response.data,
    });
  }
}

function likeAPI(data) {
  return instance({
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
    yield call(likeAPI, action.data);
    const result = yield call(loadOneAuctionAPI, action.data.nftid);
    const likeItem = yield call(loadOneAuctionAPI, action.data.nftid);
    yield put({
      type: LIKE_AUCTION_SUCCESS,
      data: likeItem.data,
    });
  } catch (err) {
    yield put({
      type: LIKE_AUCTION_FAILURE,
      error: err.response.data,
    });
  }
}

function unLikeAPI(data) {
  return instance({
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
      data: action.data.nftid,
    });
    alert('찜 목록에 제거되었습니다.');
  } catch (err) {
    console.error(err);
    yield put({
      type: UNLIKE_AUCTION_FAILURE,
      error: err.response.data,
    });
  }
}

function searchNftAPI(data) {
  return instance.get(`main/NFT/findNFT/${data}`);
}

function* searchNft(action) {
  try {
    const result = yield call(searchNftAPI, action.data);
    yield put({
      type: SEARCH_NFT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SEARCH_NFT_FAILURE,
      data: err,
    });
  }
}

// [main server에 보낼 API]
function startAuctionAPI(data) {
  const response = instance({
    method: 'post',
    url: `main/NFT/auction/${data}`,
  });

  return 1;
}
// [kafka server에 보낼 API]
function startAuctionKafkaAPI(data) {
  const response = instance({
    method: 'post',
    url: 'producer/auction/start',
    data: {
      nft: data.id,
      time: data.period,
    },
  });

  return response;
}

function* startAuction(action) {
  try {
    const resultFromMain = yield call(startAuctionAPI, action.data.id);
    yield call(startAuctionKafkaAPI, action.data);
    yield put({
      type: START_AUCTION_SUCCESS,
      data: resultFromMain,
    });
    alert('경매가 시작되었습니다');
  } catch (err) {
    yield put({
      type: START_AUCTION_FAILURE,
      error: err.response.data,
    });
  }
}

function participateAuctionAPI(data) {
  const response = instance({
    method: 'post',
    url: 'producer/auction/publish',
    data: {
      auctionPrice: data.price,
      email: data.attendee,
      nft_id: data.nftId,
    },
  });

  return response;
}

function* participateAuction(action) {
  // api function 생성 후 수정 필요
  try {
    yield call(participateAuctionAPI, action.data);
    yield put({
      type: PARTICIPATE_AUCTION_SUCCESS,
      data: action.data,
    });
    alert(`${action.data.price} klay 입찰 성공`);
  } catch (err) {
    yield put({
      type: PARTICIPATE_AUCTION_FAILURE,
      error: err.response.data,
    });
  }
}

function checkAuctionAPI(nftId) {
  const response = instance({
    method: 'get',
    url: `consumer/auction/${nftId}`,
  });
  return response;
}

function* checkAuction(action) {
  try {
    const result = yield call(checkAuctionAPI, action.data);
    const checkResult = yield put({
      type: CHECK_AUCTION_SUCCESS,
      data: result.data,
    });
    if (new Date() > new Date(result.data.time)) {
      yield put({
        type: TERMINATE_AUCTION_REQUEST,
        data: {
          id: result.data.nft_id,
          value: result.data.auction_price,
          owner: action.owner,
          user: result.data.email,
          auction: 'FINISH',
        },
      });
    }
  } catch (err) {
    yield put({
      type: CHECK_AUCTION_FAILURE,
      error: err.response.data,
    });
  }
}

function* justCheckAuction(action) {
  try {
    const result = yield call(checkAuctionAPI, action.data);
    yield put({
      type: JUST_CHECK_AUCTION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: JUST_CHECK_AUCTION_FAILURE,
      error: err.response.data,
    });
  }
}

function terminateAuctionAPI(data) {
  const response = instance({
    method: 'post',
    url: 'main/NFT/auction/finish',
    data,
  });
  return response;
}

function* terminateAuction(action) {
  try {
    yield call(terminateAuctionAPI, action.data);
    yield put({
      type: TERMINATE_AUCTION_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: TERMINATE_AUCTION_FAILURE,
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

// NFT 검색
function* watchSearchNFT() {
  yield takeLatest(SEARCH_NFT_REQUEST, searchNft);
}

// 경매 시작 로딩
function* watchStartAuctions() {
  yield throttle(2000, START_AUCTION_REQUEST, startAuction);
}

// 입찰 로딩
function* watchParticipateAuctions() {
  yield throttle(1000, PARTICIPATE_AUCTION_REQUEST, participateAuction);
}

// 실시간 경매 상태 로딩
function* watchCheckAuction() {
  yield takeLatest(CHECK_AUCTION_REQUEST, checkAuction);
}

// 경매 상태 로딩
function* watchJustCheckAuction() {
  yield takeLatest(JUST_CHECK_AUCTION_REQUEST, justCheckAuction);
}

// 경매 종료 로딩
function* watchTerminateAuction() {
  yield takeLatest(TERMINATE_AUCTION_REQUEST, terminateAuction);
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
    fork(watchSearchNFT),
    fork(watchStartAuctions),
    fork(watchParticipateAuctions),
    fork(watchCheckAuction),
    fork(watchJustCheckAuction),
    fork(watchTerminateAuction),
  ]);
}
