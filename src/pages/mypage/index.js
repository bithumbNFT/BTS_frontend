import React from 'react';
import Profile from 'components/MyPage/Profile';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import LikeImage from 'components/MyPage/LikeImage';
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
  const subTabs = [
    {
      id: 1,
      path: '/mypage',
      comp: MyUpload,
      tabName: 'π¨ λμ NFT μν',
    },
    {
      id: 3,
      path: '/mypage/wishlist',
      comp: LikeImage,
      tabName: 'β€οΈ μ’μμν μν',
    },
  ];
  return (
    <div>
      <Header />

      <Container>
        <Title>λ§μ΄νμ΄μ§</Title>

        <Content>
          {/* μΌμͺ½ (νλ‘ν) */}
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

          {/* μ€λ₯Έμͺ½ (κ²½λ§€ λ¦¬μ€νΈ) */}
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
