import React from 'react';
import Profile from 'components/MyPage/Profile/Profile';
// import Footer from 'components/Common/Footer';
import styled from '@emotion/styled';
import { Switch, Route, Link } from 'react-router-dom';

const MyPageContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
`;

const About = () => <div> Youre on the Profile Tab</div>;
const Comments = () => <div> Youre on the Comments Tab</div>;
const Contact = () => <div> Youre on the Contact Tab</div>;

function mypage({ match }) {
  // const About = () => <div> Youre on the Profile Tab</div>;
  // const Comments = () => <div> Youre on the Comments Tab</div>;
  // const Contact = () => <div> Youre on the Contact Tab</div>;

  console.log(match);
  return (
    <>
      <MyPageContainer>
        <h1>마이페이지</h1>
        <Profile />
        <div className="links">
          <Link to={`${match.url}`} className="link">내가 올린 작품</Link>
          <Link to={`${match.url}/comments`} className="link">내가 구매한 작품</Link>
          <Link to={`${match.url}/contact`} className="link">좋아요한 작품</Link>
        </div>
        <div className="tabs">
          <Switch>
            <Route path={`${match.url}`} exact component={About} />
            <Route path={`${match.url}/comments`} component={Comments} />
            <Route path={`${match.url}/contact`} component={Contact} />
          </Switch>
        </div>
      </MyPageContainer>
    </>
  );
}

export default mypage;
