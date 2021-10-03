import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_AUCTION_REQUEST } from 'reducers/auction';
import CardList from '../Card/CardList';
import Button from './Button';

function MyUpload() {
  const dispatch = useDispatch();
  const { auction } = useSelector(state => state.auctionReducer);

  useEffect(() => {
    dispatch({
      type: LOAD_MY_AUCTION_REQUEST,
    });
  }, [auction]);
  return (
    <>
      <MyUploadHeader>
        <MyUploadText># 내가 등록한 작품</MyUploadText>
        <Button />
      </MyUploadHeader>
      <CardList auctions={auction} />
    </>
  );
}

export default MyUpload;

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
