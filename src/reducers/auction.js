import shortId from 'shortid';
import produce from 'immer';
import faker from 'faker';

export const initialState = {
  // 👉 더미데이터
  auction: [
    {
      // 📝 경매 아이템
      id: shortId.generate(),
      no: shortId.generate(),
      name: faker.name.firstName(),
      description: faker.lorem.paragraph(),
      image: faker.image.image(),
      owner: shortId.generate(),
    },
  ],

  mainAuctions: [],
  singlePost: null,

  // 👉 초기상태 정의
  // 경매템 리스트 로드
  loadAuctionLoading: false,
  loadAuctionDone: false,
  loadAuctionError: null,

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
// 경매템 로드
export const LOAD_AUCTION_REQUEST = 'LOAD_AUCTION_REQUEST';
export const LOAD_AUCTION_SUCCESS = 'LOAD_AUCTION_SUCCESS';
export const LOAD_AUCTION_FAILURE = 'LOAD_AUCTION_FAILURE';

// 경매템 view 로드 (단일 게시물)
export const LOAD_ONE_AUCTION_REQUEST = 'LOAD_AUCTION_REQUEST';
export const LOAD_ONE_AUCTION_SUCCESS = 'LOAD_AUCTION_SUCCESS';
export const LOAD_ONE_AUCTION_FAILURE = 'LOAD_AUCTION_FAILURE';

// 경매템 작성
export const ADD_AUCTION_REQUEST = 'post/ADD_AUCTION_REQUEST';
export const ADD_AUCTION_SUCCESS = 'post/ADD_AUCTION_SUCCESS';
export const ADD_AUCTION_FAILURE = 'post/ADD_AUCTION_FAILURE';

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
  type: LOAD_AUCTION_REQUEST,
  data,
});

const dummyAuction = data => ({
  name: data.name,
  description: data.description,
  image: data.image,
  owner: data.owner,
  no: data.no,
  date: data.date,
});

export const generateDummyAuction = number =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      no: shortId.generate(),
      description: faker.lorem.paragraph(),
      image: [
        {
          src: faker.image.image(),
        },
      ],
      name: faker.name(),
    }));

const postReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // 경매템 로드
      case LOAD_AUCTION_REQUEST:
        draft.loadAuctionLoading = true;
        draft.loadAuctionDone = false;
        draft.loadAuctionError = null;
        break;

      case LOAD_AUCTION_SUCCESS: {
        draft.loadAuctionLoading = false;
        draft.loadAuctionDone = true;
        draft.auction = action.data.concat(draft.auction);
        break;
      }

      case LOAD_AUCTION_FAILURE: {
        draft.loadAuctionLoading = false;
        draft.loadAuctionError = action.error;
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
        draft.singlePost = action.data;
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
        draft.me.Followings.push({ id: action.data.id });
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
        draft.me.Followings = draft.me.Followings.filter(
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

export default postReducer;
