import produce from 'immer';

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

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_COIN_REQUEST:
        draft.loadCoinData = true;
        draft.loadCoinDone = false;
        draft.loadCoinError = null;
        break;
      case LOAD_COIN_SUCCESS:
        draft.loadCoinData = false;
        draft.loadCoinDone = true;
        draft.coinData = action.data;
        break;
      case LOAD_COIN_FAILURE:
        draft.loadCoinData = false;
        draft.loadCoinError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
