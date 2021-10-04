import produce from 'immer';

export const initialState = {
  loadUserLoading: false, // 유저 정보 가져오기 시도중
  loadUserDone: false,
  loadUserError: null,
  logInLoading: false, // 로그인 시도중 => true가 되면 로딩창을 띄운다.
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  createWalletLoading: false, // 지갑 생성 시도중
  createWalletDone: false,
  createWalletError: null,
  checkBalanceLoading: false, // 클레이튼 잔고 조회
  checkBalanceDone: false,
  checkBalanceError: null,
  me: null,
  loginData: {},
  balanceData: 0,
};

// 액션 선언
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const NAVER_LOG_IN_REQUEST = 'NAVER_LOG_IN_REQUEST';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const ADD_AUCTION_TO_ME = 'ADD_AUCTION_TO_ME';
export const REMOVE_AUCTION_OF_ME = 'REMOVE_AUCTION_OF_ME';

export const CREATE_WALLET_REQUEST = 'CREATE_WALLET_REQUEST';
export const CREATE_WALLET_SUCCESS = 'CREATE_WALLET_SUCCESS';
export const CREATE_WALLET_FAILURE = 'CREATE_WALLET_FAILURE';

export const CHECK_BALANCE_REQUEST = 'CHECK_BALANCE_REQUEST';
export const CHECK_BALANCE_SUCCESS = 'CHECK_BALANCE_SUCCESS';
export const CHECK_BALANCE_FAILURE = 'CHECK_BALANCE_FAILURE';

export const kakaoLoginRequestAction = (code, state) => ({
  type: LOG_IN_REQUEST,
  payload: code,
  data: {
    code,
    state,
  },
});

export const naverLoginRequestAction = (code, state) => ({
  type: NAVER_LOG_IN_REQUEST,
  data: {
    code,
    state,
  },
});

export const logoutRequestAction = social => ({
  type: LOG_OUT_REQUEST,
  data: {
    social,
  },
});

export const createWalletAction = id => ({
  type: CREATE_WALLET_REQUEST,
  payload: id,
  data: id,
});

export const checkBalanceAction = wallet => ({
  type: CHECK_BALANCE_REQUEST,
  payload: wallet,
});

// 리듀서 상태 선언
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case NAVER_LOG_IN_REQUEST:
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      // --------------------------------------------
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      // --------------------------------------------
      case ADD_AUCTION_TO_ME:
        draft.me.auctionPost.unshift({ id: action.data });
        break;

      case REMOVE_AUCTION_OF_ME:
        draft.me.auctionPost = draft.me.auctionPost.filter(
          y => y.id !== action.data,
        );
        break;

      // --------------------------------------------
      case CREATE_WALLET_REQUEST:
        draft.createWalletLoading = true;
        draft.createWalletDone = false;
        draft.createWalletError = null;
        break;

      case CREATE_WALLET_SUCCESS:
        draft.createWalletLoading = false;
        draft.createWalletDone = true;
        // [TODO] 이부분은 확인
        // draft.me.coinWallet = action.data;
        break;

      case CREATE_WALLET_FAILURE:
        draft.createWalletLoading = false;
        draft.createWalletError = action.error;
        break;

      // --------------------------------------------
      case CHECK_BALANCE_REQUEST:
        draft.checkBalanceLoading = true;
        draft.checkBalanceDone = false;
        draft.checkBalanceError = null;
        break;

      case CHECK_BALANCE_SUCCESS:
        draft.checkBalanceLoading = false;
        draft.checkBalanceDone = true;
        draft.balanceData = action.data;
        break;

      case CHECK_BALANCE_FAILURE:
        draft.checkBalanceLoading = false;
        draft.checkBalanceError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;
