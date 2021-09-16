import React from 'react';
import styled from '@emotion/styled';
import CardList from '../Card/CardList';
import Button from './Button';

const MyUploadHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

const MyUploadText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #ffd0ae 50%);
`;
function MyUpload() {
  return (
    <>
      <MyUploadHeader>
        <MyUploadText># 내가 등록한 작품</MyUploadText>
        <Button />
      </MyUploadHeader>
      <CardList />
    </>
  );
}

export default MyUpload;
