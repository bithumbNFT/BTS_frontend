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
function MyUpload() {
  return (
    <>
      <MyUploadHeader>
        <h2>내가 올린 작품</h2>
        <Button />
      </MyUploadHeader>
      <CardList />
    </>
  );
}

export default MyUpload;
