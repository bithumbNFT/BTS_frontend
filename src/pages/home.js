import React from 'react';
import Header from 'components/Common/Header';
import HomeIntro from 'components/Home/Intro';
import CardList from 'components/Home/CardList';

function home() {
  return (
    <>
      <Header />
      <HomeIntro />
      <CardList />
    </>
  );
}

export default home;
