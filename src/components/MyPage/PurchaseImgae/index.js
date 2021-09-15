import React from 'react';
import styled from '@emotion/styled';
import CardList from '../Card/CardList';

const MypageTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
`;

function PurchaseImage() {
  return (
    <>
      <MypageTitle>내가 구매한 작품</MypageTitle>
      <CardList />
    </>
  );
}

export default PurchaseImage;
