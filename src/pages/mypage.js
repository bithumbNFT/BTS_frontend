import React from 'react';
import Profile from 'components/MyPage/Profile/Profile';
// import Footer from 'components/Common/Footer';
import styled from '@emotion/styled';
import { Route, Link } from 'react-router-dom';
import LikeImage from 'components/MyPage/LikeImage/LikeImage';
import PurchaseImage from 'components/MyPage/PurchaseImgae/PurchaseImage';
import MyUpload from 'components/MyPage/MyUpload/MyUpload';
import Header from 'components/Common/Header';

const MypageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;
const MyPageContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 4rem 0 0 5rem;
`;

const MypageContent = styled.div`
  display: flex;
  justify-content: space-around;
  section {
    margin-right: 1rem;
  }
`;

const MyPageLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    margin-top: 1.5rem;
  }
`;

const MyPageTab = styled.div`
  padding: 20px;
  border: 1px solid #f5f5f5;
  margin-left: 2rem;
`;

function mypage({ match }) {
  console.log(match);
  console.log(`${match.url}/comments`);
  return (
    <>
      <Header />
      <MyPageContainer>
        <MypageTitle>마이페이지</MypageTitle>
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
      </MyPageContainer>
    </>
  );
}

export default mypage;
