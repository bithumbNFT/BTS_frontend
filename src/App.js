import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { GlobalStyles } from 'styles/global-styles';
import Loader from 'components/Common/Loader';
import pMinDelay from 'p-min-delay';

function App() {
  const Auction = lazy(() => import('./pages/auction'));
  const Upload = lazy(() => import('./pages/upload'));
  const Board = lazy(() => import('./pages/board'));
  const Home = lazy(() => pMinDelay(import('./pages/home'), 5000));
  // const Home = lazy(() => import('./pages/home'));
  const MyPage = lazy(() => import('./pages/mypage'));
  const Post = lazy(() => import('./pages/board_post'));
  const Write = lazy(() => import('./pages/board_write'));
  const Notice = lazy(() => import('./pages/notice'));
  const NotFound = lazy(() => import('./pages/404page'));
  const Kakao = lazy(() => import('./components/LoginModal/login/kakao'));
  const Naver = lazy(() => import('./components/LoginModal/login/naver'));

  return (
    <>
      {GlobalStyles}
      <Suspense fallback={<Loader />}>
        <CacheSwitch>
          <CacheRoute exact path="/" component={Home} />
          {/* 홈화면 */}
          <Route exact path="/" component={Home} />
          {/* 경매 페이지 */}
          {/* <Route path="/auction" component={Auction} /> */}
          <Route path="/auction/:id" component={Auction} />
          {/* 작품 업로드 페이지 */}
          <Route exact path="/upload" component={Upload} />
          {/* 소통 게시판 */}
          <Route exact path="/board" component={Board} />
          {/* 마이페이지 */}
          <Route path="/mypage" component={MyPage} />
          {/* 게시글 view */}
          {/* <Route exact path="/board_post" component={Post} /> */}
          <Route exact path="/board_post/:id" component={Post} />
          {/* 게시글 view */}
          <Route exact path="/board_write" component={Write} />
          {/* 사용자 알람 view */}
          <Route exact path="/notice" component={Notice} />
          {/* kakao login redirect view */}
          <Route exact path="/login/oauth2/code/kakao" component={Kakao} />
          {/* kakao login redirect view */}
          <Route exact path="/login/oauth2/code/naver" component={Naver} />
          {/* <Redirect path="*" to="/" /> */}
          <Route component={NotFound} />
        </CacheSwitch>
      </Suspense>
    </>
  );
}

export default App;
