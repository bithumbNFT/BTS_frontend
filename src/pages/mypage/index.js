import React from 'react';
import Profile from 'components/MyPage/Profile';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import LikeImage from 'components/MyPage/LikeImage';
import PurchaseImage from 'components/MyPage/PurchaseImgae';
import MyUpload from 'components/MyPage/MyUpload';
import Header from 'components/Common/Header';
import { Title, Container, Content, MyPageLink, MyPageTab } from './styles';

function mypage({ match }) {
  const subTabs = [
    {
      id: 1,
      path: `${match.url}`,
      comp: MyUpload,
      tabName: '🎨 내가 등록한 작품',
    },
    {
      id: 2,
      path: `${match.url}/purchase`,
      comp: PurchaseImage,
      tabName: '💰 내가 구매한 작품',
    },
    {
      id: 3,
      path: `${match.url}/wishlist`,
      comp: LikeImage,
      tabName: '❤️ 좋아요한 작품',
    },
  ];
  console.log(subTabs);
  return (
    <>
      <Header />
      <Container>
        <Title>마이페이지</Title>
        <BrowserRouter>
          <Content>
            <section className="menutab">
              <Profile />
              <MyPageLink>
                <ul>
                  {subTabs.map((subTab) => (
                    <li key={subTab.id}>
                      <Link to={subTab.path}>{subTab.tabName}</Link>
                    </li>
                  ))}
                </ul>
              </MyPageLink>
            </section>
            <MyPageTab>
              <Route path={`${match.url}`} exact component={MyUpload} />
              <Route path={`${match.url}/purchase`} component={PurchaseImage} />
              <Route path={`${match.url}/wishList`} component={LikeImage} />
            </MyPageTab>
          </Content>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default mypage;
