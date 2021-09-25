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
      name: faker.name(),
      description: faker.lorem.paragraph(),
      image: faker.image.image(),
      owner: shortId.generate(),
      date: faker.date(),
    },
  ],
  mainAuctions: [],

  // 👉 초기상태 정의
  // 경매템 작성
  addAuctionLoading: false,
  addAuctionDone: false,
  addAuctionError: null,

  // 경매템 삭제
  removeAuctionLoading: false,
  removeAuctionDone: false,
  removeAuctionError: null,

  // 경매템 찜하기
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,

  // 경매템 찜 취소
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
};

// ----------------------------
// 경매템 로드
export const LOAD_AUCTION_REQUEST = 'LOAD_AUCTION_REQUEST';
export const LOAD_AUCTION_SUCCESS = 'LOAD_AUCTION_SUCCESS';
export const LOAD_AUCTION_FAILURE = 'LOAD_AUCTION_FAILURE';

// 게시글 작성
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

export const addPost = data => ({
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
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_AUCTION_SUCCESS: {
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.board = draft.board.concat(action.data);
        break;
      }

      case LOAD_AUCTION_FAILURE: {
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      }

      //  경매템 추가
      case ADD_AUCTION_REQUEST: {
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      }
      case ADD_AUCTION_SUCCESS: {
        draft.board.unshift(dummyAuction(action.data.id));
        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;
      }
      case ADD_AUCTION_FAILURE: {
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      }

      //  경매템 삭제
      case REMOVE_AUCTION_REQUEST: {
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      }
      case REMOVE_AUCTION_SUCCESS: {
        draft.board = draft.board.filter(v => v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      }

      // ------------------------------------
      //  경매템 찜하기

      case LIKE_AUCTION_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;
      case LIKE_AUCTION_SUCCESS:
        draft.followLoading = false;
        draft.me.Followings.push({ id: action.data.id });
        draft.followDone = true;
        break;
      case LIKE_AUCTION_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      //  경매템 찜 취소
      case UNLIKE_AUCTION_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;
      case UNLIKE_AUCTION_SUCCESS:
        draft.unfollowLoading = false;
        draft.me.Followings = draft.me.Followings.filter(
          v => v.id !== action.data.id,
        );
        draft.unfollowDone = true;
        break;
      case UNLIKE_AUCTION_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      default:
        break;
    }
  });

export default postReducer;
