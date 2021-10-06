import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import axios from 'axios';
import { CookiesProvider } from 'react-cookie';
import 'antd/dist/antd.css';

import { Router } from 'react-router';
import { browserHistory } from 'utils/historyUtils';
import { API_SERVER_PATH } from 'utils/config';
import rootReducer, { rootSaga } from './utils/modules';
import App from './App';

// axios 설정
axios.defaults.baseURL = API_SERVER_PATH;
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

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <Router history={browserHistory}>
        <App />
      </Router>
    </CookiesProvider>
  </Provider>,
  document.getElementById('root'),
);
