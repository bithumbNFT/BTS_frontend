import React from 'react';
import Profile from 'components/MyPage/Profile';
import { Route, Link, Switch } from 'react-router-dom';
import LikeImage from 'components/MyPage/LikeImage';
import PurchaseImage from 'components/MyPage/PurchaseImgae';
import MyUpload from 'components/MyPage/MyUpload';
import Header from 'components/Common/Header';
import { Title, Container, Content, MyPageLink, MyPageTab } from './styles';

function mypage() {
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
      id: 2,
      path: '/mypage/purchase',
      comp: PurchaseImage,
      tabName: '💰 내가 구매한 작품',
    },
    {
      id: 3,
      path: '/mypage/wishlist',
      comp: LikeImage,
      tabName: '❤️ 좋아요한 작품',
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <Title>마이페이지</Title>
        <Content>
          <section className="menutab">
            <Profile />
            <MyPageLink>
              <ul>
                {subTabs.map(subTab => (
                  <li key={subTab.id}>
                    <Link to={subTab.path}>{subTab.tabName}</Link>
                  </li>
                ))}
              </ul>
            </MyPageLink>
          </section>
          <MyPageTab>
            <Switch>
              <Route path="/mypage" exact component={MyUpload} />
              <Route path="/mypage/purchase" component={PurchaseImage} />
              <Route path="/mypage/wishList" component={LikeImage} />
            </Switch>
          </MyPageTab>
        </Content>
      </Container>
    </>
  );
}

export default mypage;
