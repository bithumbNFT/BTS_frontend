import React from 'react';
import Intro from 'components/Board/Intro';
import Header from 'components/Common/Header';
import List from 'components/Board/List';
import PostWrite from 'components/Board/PostWrite';

function board() {
  return (
    <>
      {/* 헤더 */}
      <Header />
      <main>
        {/* 인트로 view */}
        <Intro />
        {/* 게시글 리스트 */}
        <List />
      </main>

      <PostWrite />
    </>
  );
}

export default board;
