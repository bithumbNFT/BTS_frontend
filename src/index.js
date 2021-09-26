import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import logger from 'redux-logger';
// import { API_SERVER_PATH } from 'utils/config';

import { Router } from 'react-router';
import { browserHistory } from 'utils/historyUtils';

import rootReducer, { rootSaga } from './utils/modules';
import App from './App';
import './styles/font.css';

// axios 설정
// axios.defaults.baseURL = API_SERVER_PATH;
// [TODO] withCredentials를 true로 설정해야 refreshToken cookie를 주고 받을 수 있다?
axios.defaults.withCredentials = true;

const sagaMiddleware = createSagaMiddleware({
  context: { history: browserHistory },
});
const enhancedReducer = rootReducer;
const store = createStore(
  enhancedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);
console.log(store);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
