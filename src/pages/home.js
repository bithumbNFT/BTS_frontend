import React from 'react';
import Header from 'components/Common/Header';
import { useSelector } from 'react-redux';
import HomeIntro from 'components/Home/Intro';
import AuctionList from 'components/Home/AuctionList';
import styled from '@emotion/styled';

const Title = styled.h2`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.2;
  text-align: center;
  letter-spacing: -1.5px;
  padding: 5%;
  strong {
    font-weight: 600;
  }
`;

function home() {
  const { logInLoading, logInDone, logInError } = useSelector(state => ({
    logInLoading: state.userReducer.logInLoading,
    logInDone: state.userReducer.logInDone,
    logInError: state.userReducer.logInError,
  }));
  console.log('state in home', logInLoading, logInDone, logInError);
  return (
    <>
      <Header />
      <HomeIntro />

      <Title>
        🎨 <strong>멋진 작가</strong>들의 <strong>다양한 작품</strong>들을
        만나보세요 🥰
      </Title>
      <AuctionList />
    </>
  );
}

export default home;
