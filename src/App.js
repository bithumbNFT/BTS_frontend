import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { GlobalStyles } from 'styles/global-styles';

function App() {
  const Auction = lazy(() => import('./pages/auction'));
  const Board = lazy(() => import('./pages/board'));
  const Home = lazy(() => import('./pages/home'));
  const MyPage = lazy(() => import('./pages/mypage'));
  const Post = lazy(() => import('./pages/board_post'));

  return (
    <Router>
      {GlobalStyles}
      <Suspense fallback={<div>Loading...</div>}>
        <CacheSwitch>
          <CacheRoute exact path="/" component={Home} />
          {/* 홈화면 */}
          <Route exact path="/" component={Home} />
          {/* 경매 페이지 */}
          <Route exact path="/auction" component={Auction} />
          {/* 소통 게시판 */}
          <Route exact path="/board" component={Board} />
          {/* 마이페이지 */}
          <Route exact path="/mypage" component={MyPage} />
          {/* 게시글 view */}
          <Route exact path="/board_post" component={Post} />
          <Redirect path="*" to="/" />
        </CacheSwitch>
      </Suspense>
    </Router>
  );
}

export default App;
