import produce from 'immer';

export const initialState = {
  // 👉 더미데이터
  // auction: [],

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
  // NFT 경매 아이템 리스트
  searchNft: [],
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
  
  // NFT 경매 아이템 검색
  searchNftLoading: false,
  searchNftSuccess: false,
  searchNftFailure: null,
  
  // 판매자 - 경매시작
  startAuctionLoading: false,
  startAuctionDone: false,
  startAuctionError: null,

  // 구매자 - 입찰
  participateAuctionLoading: false,
  participateAuctionDone: false,
  participateAuctionError: null,

  // 최종 구매자 - 구매확정
  confirmPurchaseLoading: false,
  confirmPurchaseDone: false,
  confirmPurchaseError: null,

  // 실시간 경매 진행 상황
  checkAuctionLoading: false,
  checkAuctionDone: false,
  checkAuctionError: null,

  // 경매 종료
  terminateAuctionLoading: false,
  terminateAuctionDone: false,
  terminateAuctionError: null,

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

// NFT 경매 아이템 검색
export const SEARCH_NFT_REQUEST = 'SEARCH_NFT_REQUEST';
export const SEARCH_NFT_SUCCESS = 'SEARCH_NFT_SUCCESS';
export const SEARCH_NFT_FAILURE = 'SEARCH_NFT_FAILURE';

// 액션 타입 정의
// 판매자 - 경매시작
export const START_AUCTION_REQUEST = 'START_AUCTION_REQUEST';
export const START_AUCTION_SUCCESS = 'START_AUCTION_SUCCESS';
export const START_AUCTION_FAILURE = 'START_AUCTION_FAILURE';

// 구매자 - 입찰
export const PARTICIPATE_AUCTION_REQUEST = 'PARTICIPATE_AUCTION_REQUEST';
export const PARTICIPATE_AUCTION_FAILURE = 'PARTICIPATE_AUCTION_FAILURE';
export const PARTICIPATE_AUCTION_SUCCESS = 'PARTICIPATE_AUCTION_SUCCESS';

// 최종 구매자 - 구매확정
export const CONFIRM_PURCHASE_REQUEST = 'CONFIRM_PURCHASE_REQUEST';
export const CONFIRM_PURCHASE_SUCCESS = 'CONFIRM_PURCHASE_SUCCESS';
export const CONFIRM_PURCHASE_FAILURE = 'CONFIRM_PURCHASE_FAILURE';

// 경매 진행 상황 확인
export const CHECK_AUCTION_REQUEST = 'CHECK_AUCTION_REQUEST';
export const CHECK_AUCTION_SUCCESS = 'CHECK_AUCTION_SUCCESS';
export const CHECK_AUCTION_FAILURE = 'CHECK_AUCTION_FAILURE';

// 경매종료
export const TERMINATE_AUCTION_REQUEST = 'TERMINATE_AUCTION_REQUEST';
export const TERMINATE_AUCTION_SUCCESS = 'TERMINATE_AUCTION_SUCCESS';
export const TERMINATE_AUCTION_FAILURE = 'TERMINATE_AUCTION_FAILURE';

// 경매 작품 내용 비우기
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

// 액션함수 생성
// [TODO] data에 뭐가 들어가는지는 모르겟음
export const startAuction = (id, period) => ({
  type: START_AUCTION_REQUEST,
  data: {
    id,
    period,
  }, // 예상 - userid, nftid, 현재시간
});

export const participateAuction = (price, attendee, nftId) => ({
  type: PARTICIPATE_AUCTION_REQUEST,
  data: {
    price,
    attendee,
    nftId,
  }, // 예상 - userid, nftid, 입찰가격(현재+1klay), 시간
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

export const terminateAuction = data => ({
  type: TERMINATE_AUCTION_REQUEST,
  data,
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
        draft.mainAuctions = action.data;
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

      //  경매템 삭제
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
      //  경매템 찜하기

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

      //  경매템 찜 취소
      case UNLIKE_AUCTION_REQUEST:
        draft.unlikeAuctionLoading = true;
        draft.unlikeAuctionError = null;
        draft.unlikeAuctionDone = false;
        break;
      case UNLIKE_AUCTION_SUCCESS:
        console.log(action.data);
        draft.unlikeAuctionLoading = false;
        draft.likeAuctions = draft.likeAuctions.filter(
          v => v.id !== action.data.id,
        );
        draft.unlikeAuctionDone = true;
        break;
      case UNLIKE_AUCTION_FAILURE:
        draft.unlikeAuctionLoading = false;
        draft.unlikeAuctionError = action.error;
        break;

      // 검색
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
        
      // 경매시작
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

      // 입찰
      case PARTICIPATE_AUCTION_REQUEST:
        draft.participateAuctionLoading = true;
        draft.participateAuctionDone = false;
        draft.participateAuctionError = null;
        break;
      case PARTICIPATE_AUCTION_SUCCESS:
        draft.participateAuctionLoading = false;
        draft.participateAuctionDone = true;
        break;
      case PARTICIPATE_AUCTION_FAILURE:
        draft.participateAuctionLoading = false;
        draft.participateAuctionError = action.error;
        break;

      // 구매확정
      case CONFIRM_PURCHASE_REQUEST:
        draft.confirmPurchaseLoading = true;
        draft.confirmPurchaseDone = false;
        draft.confirmPurchaseError = action.error;
        break;
      case CONFIRM_PURCHASE_SUCCESS:
        draft.confirmPurchaseLoading = false;
        draft.confirmPurchaseDone = true;
        // 구매한 작품 목록에 추가
        // [TODO] myAuctions에 들어갈 data 수정
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
