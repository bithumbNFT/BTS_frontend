import React from 'react';
import styled from '@emotion/styled';
import CardList from '../Card/CardList';

const MyUploadText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #ffd0ae 50%);
  width: fit-content;
  margin: 8px 0;
`;

function PurchaseImage() {
  return (
    <>
      <MyUploadText># 내가 구매한 작품</MyUploadText>
      <CardList />
    </>
  );
}

export default PurchaseImage;
