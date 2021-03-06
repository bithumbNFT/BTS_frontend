import produce from 'immer';

export const initialState = {
  // ๐ ๋๋ฏธ๋ฐ์ดํฐ
  // auction: [],

  // home ๊ฒฝ๋งค
  mainAuctions: [],
  // ๋จ์ผ ๊ฒฝ๋งค ํ์ด์ง
  singleAuction: {},
  // ์ข์์ํ ์ํ
  likeAuctions: [],
  // ๊ตฌ๋งคํ ์ํ
  getAuctions: [],
  // ๋ด๊ฐ ๋ฑ๋กํ ์ํ
  myAuctions: [],
  // NFT ๊ฒฝ๋งค ์์ดํ ๋ฆฌ์คํธ
  searchNft: [],
  me: null,

  // ๐ ์ด๊ธฐ์ํ ์ ์
  // home ๊ฒฝ๋งคํ ๋ฆฌ์คํธ ๋ก๋
  loadAuctionLoading: false,
  loadAuctionDone: false,
  loadAuctionError: null,

  // wishlist ์ข์์ํ ๊ฒฝ๋งคํ ๋ฆฌ์คํธ ๋ก๋
  loadLikeAuctionLoading: false,
  loadLikeAuctionDone: false,
  loadLikeAuctionError: null,

  // ๋ด๊ฐ ๋ฑ๋กํ ์ํ ๊ฒฝ๋งคํ ๋ก๋
  loadMyAuctionLoading: false,
  loadMyAuctionDone: false,
  loadMyAuctionError: null,

  // ๊ฒฝ๋งคํ view ๋ก๋ (๋จ์ผ ๊ฒ์๋ฌผ)
  loadOneAuctionLoading: false,
  loadOneAuctionDone: false,
  loadOneAuctionError: null,

  // ๊ฒฝ๋งคํ ์์ฑ
  addAuctionLoading: false,
  addAuctionDone: false,
  addAuctionError: null,

  // ๊ฒฝ๋งคํ ์ญ์ 
  removeAuctionLoading: false,
  removeAuctionDone: false,
  removeAuctionError: null,

  // ๊ฒฝ๋งคํ ์ฐํ๊ธฐ
  likeAuctionLoading: false,
  likeAuctionDone: false,
  likeAuctionError: null,

  // ๊ฒฝ๋งคํ ์ฐ ์ทจ์
  unlikeAuctionLoading: false,
  unlikeAuctionDone: false,
  unlikeAuctionError: null,

  // NFT ๊ฒฝ๋งค ์์ดํ ๊ฒ์
  searchNftLoading: false,
  searchNftSuccess: false,
  searchNftFailure: null,

  // ํ๋งค์ - ๊ฒฝ๋งค์์
  startAuctionLoading: false,
  startAuctionDone: false,
  startAuctionError: null,

  // ๊ตฌ๋งค์ - ์์ฐฐ
  participateAuctionLoading: false,
  participateAuctionDone: false,
  participateAuctionError: null,

  // ์ต์ข ๊ตฌ๋งค์ - ๊ตฌ๋งคํ์ 
  confirmPurchaseLoading: false,
  confirmPurchaseDone: false,
  confirmPurchaseError: null,

  // ์ค์๊ฐ ๊ฒฝ๋งค ์งํ ์ํฉ
  checkAuctionLoading: false,
  checkAuctionDone: false,
  checkAuctionError: null,

  // ๊ฒฝ๋งค ๊ฒฐ๊ณผ ์กฐํ
  justCheckAuctionLoading: false,
  justCheckAuctionDone: false,
  justChekcAuctionError: null,

  // ๊ฒฝ๋งค ์ข๋ฃ
  terminateAuctionLoading: false,
  terminateAuctionDone: false,
  terminateAuctionError: null,
};

// ----------------------------
// home ๊ฒฝ๋งคํ ๋ก๋
export const LOAD_AUCTION_REQUEST = 'LOAD_AUCTION_REQUEST';
export const LOAD_AUCTION_SUCCESS = 'LOAD_AUCTION_SUCCESS';
export const LOAD_AUCTION_FAILURE = 'LOAD_AUCTION_FAILURE';

// ์ข์์ํ ์ํ(wishlist) ๊ฒฝ๋งคํ ๋ก๋
export const LOAD_LIKE_AUCTION_REQUEST = 'LOAD_LIKE_AUCTION_REQUEST';
export const LOAD_LIKE_AUCTION_SUCCESS = 'LOAD_LIKE_AUCTION_SUCCESS';
export const LOAD_LIKE_AUCTION_FAILURE = 'LOAD_LIKE_AUCTION_FAILURE';

// ๋ด๊ฐ ๋ฑ๋กํ ์ํ(mypage) ๊ฒฝ๋งคํ ๋ก๋
export const LOAD_MY_AUCTION_REQUEST = 'LOAD_MY_AUCTION_REQUEST';
export const LOAD_MY_AUCTION_SUCCESS = 'LOAD_MY_AUCTION_SUCCESS';
export const LOAD_MY_AUCTION_FAILURE = 'LOAD_MY_AUCTION_FAILURE';

// ๊ฒฝ๋งคํ view ๋ก๋ (๋จ์ผ ๊ฒ์๋ฌผ)
export const LOAD_ONE_AUCTION_REQUEST = 'LOAD_ONE_AUCTION_REQUEST';
export const LOAD_ONE_AUCTION_SUCCESS = 'LOAD_ONE_AUCTION_SUCCESS';
export const LOAD_ONE_AUCTION_FAILURE = 'LOAD_ONE_AUCTION_FAILURE';

// ๊ฒฝ๋งคํ ์์ฑ
export const ADD_AUCTION_REQUEST = 'ADD_AUCTION_REQUEST';
export const ADD_AUCTION_SUCCESS = 'ADD_AUCTION_SUCCESS';
export const ADD_AUCTION_FAILURE = 'ADD_AUCTION_FAILURE';

// ๊ฒฝ๋งคํ ์ญ์ 
export const REMOVE_AUCTION_REQUEST = 'REMOVE_AUCTION_REQUEST';
export const REMOVE_AUCTION_SUCCESS = 'REMOVE_AUCTION_SUCCESS';
export const REMOVE_AUCTION_FAILURE = 'REMOVE_AUCTION_FAILURE';

// ----------------------------
// ๊ฒฝ๋งคํ ์ฐํ๊ธฐ
export const LIKE_AUCTION_REQUEST = 'LIKE_AUCTION_REQUEST';
export const LIKE_AUCTION_SUCCESS = 'LIKE_AUCTION_SUCCESS';
export const LIKE_AUCTION_FAILURE = 'LIKE_AUCTION_FAILURE';

// ๊ฒฝ๋งคํ ์ฐ ์ทจ์
export const UNLIKE_AUCTION_REQUEST = 'UNLIKE_AUCTION_REQUEST';
export const UNLIKE_AUCTION_SUCCESS = 'UNLIKE_AUCTION_SUCCESS';
export const UNLIKE_AUCTION_FAILURE = 'UNLIKE_AUCTION_FAILURE';

// NFT ๊ฒฝ๋งค ์์ดํ ๊ฒ์
export const SEARCH_NFT_REQUEST = 'SEARCH_NFT_REQUEST';
export const SEARCH_NFT_SUCCESS = 'SEARCH_NFT_SUCCESS';
export const SEARCH_NFT_FAILURE = 'SEARCH_NFT_FAILURE';

// ์ก์ ํ์ ์ ์
// ํ๋งค์ - ๊ฒฝ๋งค์์
export const START_AUCTION_REQUEST = 'START_AUCTION_REQUEST';
export const START_AUCTION_SUCCESS = 'START_AUCTION_SUCCESS';
export const START_AUCTION_FAILURE = 'START_AUCTION_FAILURE';

// ๊ตฌ๋งค์ - ์์ฐฐ
export const PARTICIPATE_AUCTION_REQUEST = 'PARTICIPATE_AUCTION_REQUEST';
export const PARTICIPATE_AUCTION_FAILURE = 'PARTICIPATE_AUCTION_FAILURE';
export const PARTICIPATE_AUCTION_SUCCESS = 'PARTICIPATE_AUCTION_SUCCESS';

// ์ต์ข ๊ตฌ๋งค์ - ๊ตฌ๋งคํ์ 
export const CONFIRM_PURCHASE_REQUEST = 'CONFIRM_PURCHASE_REQUEST';
export const CONFIRM_PURCHASE_SUCCESS = 'CONFIRM_PURCHASE_SUCCESS';
export const CONFIRM_PURCHASE_FAILURE = 'CONFIRM_PURCHASE_FAILURE';

// ๊ฒฝ๋งค ์งํ ์ํฉ ํ์ธ
export const CHECK_AUCTION_REQUEST = 'CHECK_AUCTION_REQUEST';
export const CHECK_AUCTION_SUCCESS = 'CHECK_AUCTION_SUCCESS';
export const CHECK_AUCTION_FAILURE = 'CHECK_AUCTION_FAILURE';

// ๊ฒฝ๋งค ๊ฒฐ๊ณผ ์กฐํ
export const JUST_CHECK_AUCTION_REQUEST = 'JUST_CHECK_AUCTION_REQUEST';
export const JUST_CHECK_AUCTION_SUCCESS = 'JUST_CHECK_AUCTION_SUCCESS';
export const JUST_CHECK_AUCTION_FAILURE = 'JUST_CHECK_AUCTION_FAILURE';

// ๊ฒฝ๋งค์ข๋ฃ
export const TERMINATE_AUCTION_REQUEST = 'TERMINATE_AUCTION_REQUEST';
export const TERMINATE_AUCTION_SUCCESS = 'TERMINATE_AUCTION_SUCCESS';
export const TERMINATE_AUCTION_FAILURE = 'TERMINATE_AUCTION_FAILURE';

// ๊ฒฝ๋งค ์ํ ๋ด์ฉ ๋น์ฐ๊ธฐ
export const CLEAR_AUCTION = 'CLEAR_AUCTION';

export const addAuction = data => ({
  type: ADD_AUCTION_REQUEST,
  data,
});

export const searchNftResult = data => ({
  type: SEARCH_NFT_REQUEST,
  data,
});

export const myPage = data => ({
  ...data,
  LikeList: [],
});

// ์ก์ํจ์ ์์ฑ
// [TODO] data์ ๋ญ๊ฐ ๋ค์ด๊ฐ๋์ง๋ ๋ชจ๋ฅด๊ฒ์
export const startAuction = (id, period) => ({
  type: START_AUCTION_REQUEST,
  data: {
    id,
    period,
  }, // ์์ - userid, nftid, ํ์ฌ์๊ฐ
});

export const participateAuction = (price, attendee, nftId) => ({
  type: PARTICIPATE_AUCTION_REQUEST,
  data: {
    price,
    attendee,
    nftId,
  }, // ์์ - userid, nftid, ์์ฐฐ๊ฐ๊ฒฉ(ํ์ฌ+1klay), ์๊ฐ
});

export const confirmPurchase = data => ({
  type: CONFIRM_PURCHASE_REQUEST,
  data,
});

export const clearAuction = () => ({
  type: CLEAR_AUCTION,
});

export const checkAuction = (data, owner) => ({
  type: CHECK_AUCTION_REQUEST,
  data,
  owner,
});

export const justCheckAuction = data => ({
  type: JUST_CHECK_AUCTION_REQUEST,
  data,
});

export const terminateAuction = data => ({
  type: TERMINATE_AUCTION_REQUEST,
  data,
});

const auctionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // home ๊ฒฝ๋งคํ ๋ก๋
      case LOAD_AUCTION_REQUEST:
        draft.loadAuctionLoading = true;
        draft.loadAuctionDone = false;
        draft.loadAuctionError = null;
        break;

      case LOAD_AUCTION_SUCCESS: {
        draft.loadAuctionLoading = false;
        draft.loadAuctionDone = true;
        draft.mainAuctions = action.data;
        break;
      }

      case LOAD_AUCTION_FAILURE: {
        draft.loadAuctionLoading = false;
        draft.loadAuctionError = action.error;
        break;
      }

      // wishlist ์ข์์ํ ์ํ ๊ฒฝ๋งคํ ๋ก๋
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

      // ๋ด๊ฐ ๋ฑ๋กํ ์ํ ๊ฒฝ๋งคํ ๋ก๋
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

      // ๊ฒฝ๋งคํ view ๋ก๋ (๋จ์ผ ๊ฒ์๋ฌผ)
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

      //  ๊ฒฝ๋งคํ ์ถ๊ฐ
      case ADD_AUCTION_REQUEST: {
        draft.addAuctionLoading = true;
        draft.addAuctionDone = false;
        draft.addAuctionError = null;
        break;
      }
      case ADD_AUCTION_SUCCESS: {
        draft.mainAuctions.unshift(action.data);
        draft.myAuctions.unshift(action.data);
        draft.addAuctionLoading = false;
        draft.addAuctionDone = true;
        break;
      }
      case ADD_AUCTION_FAILURE: {
        draft.addAuctionLoading = false;
        draft.addAuctionError = action.error;
        break;
      }

      //  ๊ฒฝ๋งคํ ์ญ์ 
      case REMOVE_AUCTION_REQUEST: {
        draft.removeAuctionLoading = true;
        draft.removeAuctionDone = false;
        draft.removeAuctionError = null;
        break;
      }
      case REMOVE_AUCTION_SUCCESS: {
        draft.mainAuctions = draft.mainAuctions.filter(
          v => v.id !== action.data,
        );
        draft.myAuctions = draft.myAuctions.filter(v => v.id !== action.data);
        draft.removeAuctionLoading = false;
        draft.removeAuctionDone = true;
        break;
      }
      case REMOVE_AUCTION_FAILURE: {
        draft.removeAuctionLoading = false;
        draft.removeAuctionError = action.error;
        break;
      }

      // ------------------------------------
      //  ๊ฒฝ๋งคํ ์ฐํ๊ธฐ

      case LIKE_AUCTION_REQUEST:
        draft.likeAuctionLoading = true;
        draft.likeAuctionError = null;
        draft.likeAuctionDone = false;
        break;
      case LIKE_AUCTION_SUCCESS:
        draft.likeAuctionLoading = false;
        draft.likeAuctions.unshift(action.data);
        draft.likeAuctionDone = true;
        break;
      case LIKE_AUCTION_FAILURE:
        draft.likeAuctionLoading = false;
        draft.likeAuctionError = action.error;
        break;

      //  ๊ฒฝ๋งคํ ์ฐ ์ทจ์
      case UNLIKE_AUCTION_REQUEST:
        draft.unlikeAuctionLoading = true;
        draft.unlikeAuctionError = null;
        draft.unlikeAuctionDone = false;
        break;
      case UNLIKE_AUCTION_SUCCESS:
        draft.unlikeAuctionLoading = false;
        draft.likeAuctions = draft.likeAuctions.filter(
          v => v.id !== action.data,
        );
        draft.unlikeAuctionDone = true;
        break;
      case UNLIKE_AUCTION_FAILURE:
        draft.unlikeAuctionLoading = false;
        draft.unlikeAuctionError = action.error;
        break;

      // ๊ฒ์
      case SEARCH_NFT_REQUEST: {
        draft.searchNftLoading = true;
        draft.searchNftSuccess = false;
        break;
      }
      case SEARCH_NFT_SUCCESS: {
        draft.searchNftLoading = false;
        draft.searchNftSuccess = true;
        draft.searchNft = action.data;
        break;
      }
      case SEARCH_NFT_FAILURE: {
        draft.searchNftSuccess = false;
        draft.searchNftFailure = action.error;
        break;
      }

      // ๊ฒฝ๋งค์์
      case START_AUCTION_REQUEST:
        draft.startAuctionLoading = true;
        draft.startAuctionDone = false;
        draft.startAuctionError = null;
        break;
      case START_AUCTION_SUCCESS:
        draft.startAuctionLoading = false;
        draft.startAuctionDone = true;
        draft.singleAuction.auction = 'START';
        break;
      case START_AUCTION_FAILURE:
        draft.startAuctionLoading = false;
        draft.startAuctionError = action.error;
        break;

      // ์์ฐฐ
      case PARTICIPATE_AUCTION_REQUEST:
        draft.participateAuctionLoading = true;
        draft.participateAuctionDone = false;
        draft.participateAuctionError = null;
        break;
      case PARTICIPATE_AUCTION_SUCCESS:
        draft.participateAuctionLoading = false;
        draft.participateAuctionDone = true;
        draft.singleAuction.curStatus.auction_price = action.data.price;
        draft.singleAuction.curStatus.email = action.data.email;
        break;
      case PARTICIPATE_AUCTION_FAILURE:
        draft.participateAuctionLoading = false;
        draft.participateAuctionError = action.error;
        break;

      // ๊ตฌ๋งคํ์ 
      case CONFIRM_PURCHASE_REQUEST:
        draft.confirmPurchaseLoading = true;
        draft.confirmPurchaseDone = false;
        draft.confirmPurchaseError = action.error;
        break;
      case CONFIRM_PURCHASE_SUCCESS:
        draft.confirmPurchaseLoading = false;
        draft.confirmPurchaseDone = true;
        // ๊ตฌ๋งคํ ์ํ ๋ชฉ๋ก์ ์ถ๊ฐ
        // [TODO] myAuctions์ ๋ค์ด๊ฐ data ์์ 
        draft.myAuctions.unshift({ id: action.data.nftId });
        break;
      case CONFIRM_PURCHASE_FAILURE:
        draft.confirmPurchaseLoading = false;
        draft.confirmPurchaseError = action.error;
        break;

      case CLEAR_AUCTION:
        draft.singleAuction = {};
        break;

      case CHECK_AUCTION_REQUEST:
        draft.checkAuctionLoading = true;
        draft.checkAuctionDone = false;
        draft.checkAuctionError = action.error;
        break;
      case CHECK_AUCTION_SUCCESS:
        draft.checkAuctionLoading = false;
        draft.checkAuctionDone = true;
        draft.singleAuction.curStatus = action.data;
        break;
      case CHECK_AUCTION_FAILURE:
        draft.checkAuctionLoading = false;
        draft.checkAuctionError = action.error;
        break;

      case JUST_CHECK_AUCTION_REQUEST:
        draft.justCheckAuctionLoading = true;
        draft.justCheckAuctionDone = false;
        draft.justChekcAuctionError = action.error;
        break;
      case JUST_CHECK_AUCTION_SUCCESS:
        draft.justCheckAuctionLoading = false;
        draft.justCheckAuctionDone = true;
        draft.singleAuction.curStatus = action.data;
        break;
      case JUST_CHECK_AUCTION_FAILURE:
        draft.justCheckAuctionLoading = false;
        draft.justChekcAuctionError = action.error;
        break;

      case TERMINATE_AUCTION_REQUEST:
        draft.terminateAuctionLoading = true;
        draft.terminateAuctionDone = false;
        draft.terminateAuctionError = action.error;
        break;
      case TERMINATE_AUCTION_SUCCESS:
        draft.terminateAuctionLoading = false;
        draft.terminateAuctionDone = true;
        draft.singleAuction.auction = 'FINISH';
        break;
      case TERMINATE_AUCTION_FAILURE:
        draft.terminateAuctionLoading = false;
        draft.terminateAuctionError = action.error;
        break;

      default:
        break;
    }
  });

export default auctionReducer;
