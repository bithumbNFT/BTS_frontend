import React from 'react';
import Intro from 'components/Board/Intro';
import Header from 'components/Common/Header';
import List from 'components/Board/List';

function board() {
  return (
    <>
      <Header />
      <main>
        <Intro />

        <List />
      </main>
    </>
  );
}

export default board;
