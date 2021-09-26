export const LOAD_COIN_REQUEST = 'LOAD_COIN_REQUEST';
export const LOAD_COIN_SUCCESS = 'LOAD_COIN_SUCCESS';
export const LOAD_COIN_FAILURE = 'LOAD_COIN_FAILURE';

export const coinRequestAction = () => ({
  type: LOAD_COIN_REQUEST,
});

export const initialState = {
  loadCoinData: false,
  loadCoinDone: false,
  loadCoinError: null,
  coinData: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COIN_REQUEST:
      return {
        ...state,
        loadCoinData: true,
        loadCoinDone: false,
        loadCoinError: null,
      };
    case LOAD_COIN_SUCCESS:
      return {
        ...state,
        loadCoinData: false,
        loadCoinDone: true,
        coinData: action.data,
      };
    case LOAD_COIN_FAILURE:
      return {
        ...state,
        loadCoinData: false,
        loadCoinError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
