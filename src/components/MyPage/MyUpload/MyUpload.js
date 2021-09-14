import React from 'react';
import styled from '@emotion/styled';
import CardList from '../Card/CardList';
import Button from './Button';

const MyUploadHeader = styled.div`
  display :flex;
  justify-content: space-between;
`;
function MyUpload() {
  return (
    <>
      <MyUploadHeader>
        <div>내가 올린 작품</div>
        <Button />
      </MyUploadHeader>
      <CardList />
    </>
  );
}

export default MyUpload;
