import React, { lazy, Suspense, useEffect } from 'react';
import { Route } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { GlobalStyles } from 'styles/global-styles';
import Loader from 'components/Common/Loader';
import pMinDelay from 'p-min-delay';
import AuthRoute from 'hooks/useAuthRoute';
import './styles/font.css';

function App() {
  const Auction = lazy(() => import('./pages/auction'));
  const Upload = lazy(() => import('./pages/upload'));
  const Board = lazy(() => import('./pages/board'));
  const Home = lazy(() => pMinDelay(import('./pages/home'), 3000));
  const MyPage = lazy(() => import('./pages/mypage'));
  const Post = lazy(() => import('./pages/board_post'));
  const Write = lazy(() => import('./pages/board_write'));
  const Update = lazy(() => import('./pages/board_update'));
  const Notice = lazy(() => import('./pages/notice'));
  const NotFound = lazy(() => import('./pages/404page'));
  const Kakao = lazy(() => import('./components/LoginModal/login/kakao'));
  const Naver = lazy(() => import('./components/LoginModal/login/naver'));
  const Login = lazy(() => import('./pages/login'));
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
        window.scrollTo(0, 0);
      };
    }, []);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {GlobalStyles}
        <CacheSwitch>
          <CacheRoute exact path="/" component={Home} />
          {/* 홈화면 */}
          <Route exact path="/" component={Home} />
          {/* 경매 페이지 */}
          <AuthRoute
            path="/auction/:id"
            render={props => <Auction {...props} />}
          />
          {/* 작품 업로드 페이지 */}
          <Route exact path="/upload" component={Upload} />
          {/* 소통 게시판 */}
          <AuthRoute path="/board" render={props => <Board {...props} />} />
          {/* 마이페이지 */}
          <AuthRoute path="/mypage" render={props => <MyPage {...props} />} />
          {/* 게시글 view */}
          <Route
            exact
            path="/board_post/:id"
            render={props => <Post {...props} />}
          />
          {/* 게시글 작성 */}
          <Route exact path="/board_write" component={Write} />
          {/* 게시글 수정 */}
          <Route
            exact
            path="/board_update/:id"
            render={props => <Update {...props} />}
          />
          {/* 사용자 알람 view */}
          <Route exact path="/notice" component={Notice} />
          {/* 로그인 페이지 */}
          <Route exact path="/login" component={Login} />
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
