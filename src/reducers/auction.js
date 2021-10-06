import shortId from 'shortid';
import produce from 'immer';
import faker from 'faker';

export const initialState = {
  // 👉 더미데이터
  auction: [],

  // home 경매
  mainAuctions: [],
  // 단일 경매 페이지
  singleAuction: {},
  // 좋아요한 작품
  likeAuctions: [],
  // 구매한 작품
  getAuctions: [],
  // 내가 등록한 작품
  myAuctions: [],
  me: null,

  // 👉 초기상태 정의
  // home 경매템 리스트 로드
  loadAuctionLoading: false,
  loadAuctionDone: false,
  loadAuctionError: null,

  // wishlist 좋아요한 경매템 리스트 로드
  loadLikeAuctionLoading: false,
  loadLikeAuctionDone: false,
  loadLikeAuctionError: null,

  // 구매한 경매템 리스트 로드 (api 미완성)
  // loadGetAuctionLoading: false,
  // loadGetAuctionDone: false,
  // loadGetAuctionError: null,

  // 내가 등록한 작품 경매템 로드
  loadMyAuctionLoading: false,
  loadMyAuctionDone: false,
  loadMyAuctionError: null,

  // 경매템 view 로드 (단일 게시물)
  loadOneAuctionLoading: false,
  loadOneAuctionDone: false,
  loadOneAuctionError: null,

  // 경매템 작성
  addAuctionLoading: false,
  addAuctionDone: false,
  addAuctionError: null,

  // 경매템 삭제
  removeAuctionLoading: false,
  removeAuctionDone: false,
  removeAuctionError: null,

  // 경매템 찜하기
  likeAuctionLoading: false,
  likeAuctionDone: false,
  likeAuctionError: null,

  // 경매템 찜 취소
  unlikeAuctionLoading: false,
  unlikeAuctionDone: false,
  unlikeAuctionError: null,
};

// ----------------------------
// home 경매템 로드
export const LOAD_AUCTION_REQUEST = 'LOAD_AUCTION_REQUEST';
export const LOAD_AUCTION_SUCCESS = 'LOAD_AUCTION_SUCCESS';
export const LOAD_AUCTION_FAILURE = 'LOAD_AUCTION_FAILURE';

// 좋아요한 작품(wishlist) 경매템 로드
export const LOAD_LIKE_AUCTION_REQUEST = 'LOAD_LIKE_AUCTION_REQUEST';
export const LOAD_LIKE_AUCTION_SUCCESS = 'LOAD_LIKE_AUCTION_SUCCESS';
export const LOAD_LIKE_AUCTION_FAILURE = 'LOAD_LIKE_AUCTION_FAILURE';

// 구매한 작품(wishlist) 경매템 로드 (api 미완성)
// export const LOAD_GET_AUCTION_REQUEST = 'LOAD_GET_AUCTION_REQUEST';
// export const LOAD_GET_AUCTION_SUCCESS = 'LOAD_GET_AUCTION_SUCCESS';
// export const LOAD_GET_AUCTION_FAILURE = 'LOAD_GET_AUCTION_FAILURE';

// 내가 등록한 작품(mypage) 경매템 로드
export const LOAD_MY_AUCTION_REQUEST = 'LOAD_MY_AUCTION_REQUEST';
export const LOAD_MY_AUCTION_SUCCESS = 'LOAD_MY_AUCTION_SUCCESS';
export const LOAD_MY_AUCTION_FAILURE = 'LOAD_MY_AUCTION_FAILURE';

// 경매템 view 로드 (단일 게시물)
export const LOAD_ONE_AUCTION_REQUEST = 'LOAD_ONE_AUCTION_REQUEST';
export const LOAD_ONE_AUCTION_SUCCESS = 'LOAD_ONE_AUCTION_SUCCESS';
export const LOAD_ONE_AUCTION_FAILURE = 'LOAD_ONE_AUCTION_FAILURE';

// 경매템 작성
export const ADD_AUCTION_REQUEST = 'ADD_AUCTION_REQUEST';
export const ADD_AUCTION_SUCCESS = 'ADD_AUCTION_SUCCESS';
export const ADD_AUCTION_FAILURE = 'ADD_AUCTION_FAILURE';

// 경매템 삭제
export const REMOVE_AUCTION_REQUEST = 'REMOVE_AUCTION_REQUEST';
export const REMOVE_AUCTION_SUCCESS = 'REMOVE_AUCTION_SUCCESS';
export const REMOVE_AUCTION_FAILURE = 'REMOVE_AUCTION_FAILURE';

// ----------------------------
// 경매템 찜하기
export const LIKE_AUCTION_REQUEST = 'LIKE_AUCTION_REQUEST';
export const LIKE_AUCTION_SUCCESS = 'LIKE_AUCTION_SUCCESS';
export const LIKE_AUCTION_FAILURE = 'LIKE_AUCTION_FAILURE';

// 경매템 찜 취소
export const UNLIKE_AUCTION_REQUEST = 'UNLIKE_AUCTION_REQUEST';
export const UNLIKE_AUCTION_SUCCESS = 'UNLIKE_AUCTION_SUCCESS';
export const UNLIKE_AUCTION_FAILURE = 'UNLIKE_AUCTION_FAILURE';

export const addAuction = data => ({
  type: ADD_AUCTION_REQUEST,
  data,
});

const dummyAuction = data => ({
  name: faker.name.findName(),
  description: faker.lorem.paragraph(),
  image: faker.image.image(),
  owner: faker.name.findName(),
  no: shortId.generate(),
  date: data.date,
});

export const myPage = data => ({
  ...data,
  LikeList: [],
});

const auctionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // home 경매템 로드
      case LOAD_AUCTION_REQUEST:
        draft.loadAuctionLoading = true;
        draft.loadAuctionDone = false;
        draft.loadAuctionError = null;
        break;

      case LOAD_AUCTION_SUCCESS: {
        draft.loadAuctionLoading = false;
        draft.loadAuctionDone = true;
        draft.auction = action.data;
        break;
      }

      case LOAD_AUCTION_FAILURE: {
        draft.loadAuctionLoading = false;
        draft.loadAuctionError = action.error;
        break;
      }

      // wishlist 좋아요한 작품 경매템 로드
      case LOAD_LIKE_AUCTION_REQUEST:
        draft.loadLikeAuctionLoading = true;
        draft.loadLikeAuctionDone = false;
        draft.loadLikeAuctionError = null;
        break;

      case LOAD_LIKE_AUCTION_SUCCESS: {
        draft.loadLikeAuctionLoading = false;
        draft.loadLikeAuctionDone = true;
        draft.likeAuctions = action.data;
        break;
      }

      case LOAD_LIKE_AUCTION_FAILURE: {
        draft.loadLikeAuctionLoading = false;
        draft.loadLikeAuctionError = action.error;
        break;
      }

      // 구매한 작품 경매템 로드 => API 아직 미완성
      // case LOAD_GET_AUCTION_REQUEST:
      //   draft.loadGetAuctionLoading = true;
      //   draft.loadGetAuctionDone = false;
      //   draft.loadGetAuctionError = null;
      //   break;

      // case LOAD_GET_AUCTION_SUCCESS: {
      //   draft.loadGetAuctionLoading = false;
      //   draft.loadGetAuctionDone = true;
      //   draft.getAuctions = action.data;
      //   break;
      // }

      // case LOAD_GET_AUCTION_FAILURE: {
      //   draft.loadGetAuctionLoading = false;
      //   draft.loadGetAuctionError = action.error;
      //   break;
      // }

      // 내가 등록한 작품 경매템 로드
      case LOAD_MY_AUCTION_REQUEST:
        draft.loadMyAuctionLoading = true;
        draft.loadMyAuctionDone = false;
        draft.loadMyAuctionError = null;
        break;

      case LOAD_MY_AUCTION_SUCCESS: {
        draft.loadMyAuctionLoading = false;
        draft.loadMyAuctionDone = true;
        draft.myAuctions = action.data;
        break;
      }

      case LOAD_MY_AUCTION_FAILURE: {
        draft.loadMyAuctionLoading = false;
        draft.loadMyAuctionError = action.error;
        break;
      }

      // 경매템 view 로드 (단일 게시물)
      case LOAD_ONE_AUCTION_REQUEST:
        draft.loadOneAuctionLoading = true;
        draft.loadOneAuctionDone = false;
        draft.loadOneAuctionError = null;
        break;

      case LOAD_ONE_AUCTION_SUCCESS: {
        draft.loadOneAuctionLoading = false;
        draft.loadOneAuctionDone = true;
        draft.singleAuction = action.data.auction;
        draft.singleAuction.likes = action.data.likes;
        break;
      }

      case LOAD_ONE_AUCTION_FAILURE: {
        draft.loadOneAuctionLoading = false;
        draft.loadOneAuctionError = action.error;
        break;
      }

      //  경매템 추가
      case ADD_AUCTION_REQUEST: {
        draft.addAuctionLoading = true;
        draft.addAuctionDone = false;
        draft.addAuctionError = null;
        break;
      }
      case ADD_AUCTION_SUCCESS: {
        draft.auction.unshift(dummyAuction(action.data.id));
        draft.addAuctionLoading = false;
        draft.addAuctionDone = true;
        break;
      }
      case ADD_AUCTION_FAILURE: {
        draft.addAuctionLoading = false;
        draft.addAuctionError = action.error;
        break;
      }

      //  경매템 삭제
      case REMOVE_AUCTION_REQUEST: {
        draft.removeAuctionLoading = true;
        draft.removeAuctionDone = false;
        draft.removeAuctionError = null;
        break;
      }
      case REMOVE_AUCTION_SUCCESS: {
        draft.auction = draft.auction.filter(v => v.id !== action.data);
        draft.removeAuctionLoading = false;
        draft.removeAuctionDone = true;
        break;
      }

      // ------------------------------------
      //  경매템 찜하기

      case LIKE_AUCTION_REQUEST:
        draft.likeAuctionLoading = true;
        draft.likeAuctionError = null;
        draft.likeAuctionDone = false;
        break;
      case LIKE_AUCTION_SUCCESS:
        draft.likeAuctionLoading = false;
        draft.me.LikeList.push({ id: action.data.UserId });
        draft.likeAuctionDone = true;
        break;
      case LIKE_AUCTION_FAILURE:
        draft.likeAuctionLoading = false;
        draft.likeAuctionError = action.error;
        break;

      //  경매템 찜 취소
      case UNLIKE_AUCTION_REQUEST:
        draft.unlikeAuctionLoading = true;
        draft.unlikeAuctionError = null;
        draft.unlikeAuctionDone = false;
        break;
      case UNLIKE_AUCTION_SUCCESS:
        draft.unlikeAuctionLoading = false;
        draft.me.LikeList = draft.me.LikeList.filter(
          v => v.id !== action.data.id,
        );
        draft.unlikeAuctionDone = true;
        break;
      case UNLIKE_AUCTION_FAILURE:
        draft.unlikeAuctionLoading = false;
        draft.unlikeAuctionError = action.error;
        break;

      default:
        break;
    }
  });

export default auctionReducer;
