import React from 'react';
import Profile from 'components/MyPage/Profile';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import LikeImage from 'components/MyPage/LikeImage';
import PurchaseImage from 'components/MyPage/PurchaseImgae';
import MyUpload from 'components/MyPage/MyUpload';
import Header from 'components/Common/Header';
import {
  MypageTitle,
  MyPageContainer,
  MypageContent,
  MyPageLink,
  MyPageTab,
} from './styles';

function mypage({ match }) {
  console.log(match);
  console.log(`${match.url}/comments`);
  return (
    <>
      <Header />
      <MyPageContainer>
        <MypageTitle>마이페이지</MypageTitle>
        <BrowserRouter>
          <MypageContent>
            <section className="menutab">
              <Profile />
              <MyPageLink>
                <Link to={`${match.url}`}>🎨 내가 올린 작품</Link>
                <Link to={`${match.url}/purchase`}>💰 내가 구매한 작품</Link>
                <Link to={`${match.url}/wishList`}>❤️ 좋아요한 작품</Link>
              </MyPageLink>
            </section>
            <MyPageTab>
              <Route path={`${match.url}`} exact component={MyUpload} />
              <Route path={`${match.url}/purchase`} component={PurchaseImage} />
              <Route path={`${match.url}/wishList`} component={LikeImage} />
            </MyPageTab>
          </MypageContent>
        </BrowserRouter>
      </MyPageContainer>
    </>
  );
}

export default mypage;
