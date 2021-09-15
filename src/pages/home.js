import React from 'react';
import Header from 'components/Common/Header';
import HomeIntro from 'components/Home/Intro';
import AuctionList from 'components/Home/AuctionList';

function home() {
  return (
    <>
      <Header />
      <HomeIntro />
      <AuctionList />
    </>
  );
}

export default home;
