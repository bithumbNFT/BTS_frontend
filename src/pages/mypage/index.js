import React from 'react';
import Profile from 'components/MyPage/Profile';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import LikeImage from 'components/MyPage/LikeImage';
import PurchaseImage from 'components/MyPage/PurchaseImgae';
import MyUpload from 'components/MyPage/MyUpload';
import Header from 'components/Common/Header';
import {
  Title,
  Container,
  Content,
  MyPageLink,
  MyPageTab,
  TabList,
} from './styles';

function mypage({ location: { pathname } }) {
  // const LikeImage = lazy(() => import('components/MyPage/LikeImage'));
  // const location = useLocation();
  // const location = { pathname: 'a' };
  const subTabs = [
    {
      id: 1,
      path: '/mypage',
      comp: MyUpload,
      tabName: '🎨 내가 등록한 작품',
    },
    {
      id: 3,
      path: '/mypage/wishlist',
      comp: LikeImage,
      tabName: '❤️ 좋아요한 작품',
    },
  ];
  return (
    <div>
      <Header />

      <Container>
        <Title>마이페이지</Title>

        <Content>
          {/* 왼쪽 (프로필) */}
          <section className="menutab">
            <Profile />
            <MyPageLink>
              <ul>
                {subTabs.map(subTab => (
                  <TabList key={subTab.id} current={pathname === subTab.path}>
                    <Link to={subTab.path}>{subTab.tabName}</Link>
                  </TabList>
                ))}
              </ul>
            </MyPageLink>
          </section>

          {/* 오른쪽 (경매 리스트) */}
          <MyPageTab>
            <Switch>
              <Route exact path="/mypage" component={MyUpload} />
              <Route path="/mypage/wishList" exact component={LikeImage} />
            </Switch>
          </MyPageTab>
        </Content>
      </Container>
    </div>
  );
}

export default withRouter(mypage);
