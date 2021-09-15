import React from 'react';
import styled from '@emotion/styled';
import CardList from '../Card/CardList';

const MypageTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
`;

function LikeImage() {
  return (
    <>
      <MypageTitle>좋아요한 작품</MypageTitle>
      <CardList />
    </>
  );
}

export default LikeImage;
