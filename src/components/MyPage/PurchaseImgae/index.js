import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_AUCTION_REQUEST } from 'reducers/auction';
import styled from '@emotion/styled';
import CardList from '../Card/CardList';

function PurchaseImage() {
  const dispatch = useDispatch();
  const { auction } = useSelector(state => state.auctionReducer);

  useEffect(() => {
    dispatch({
      type: LOAD_AUCTION_REQUEST,
    });
  }, [auction]);
  return (
    <>
      <MyUploadText># 내가 구매한 작품</MyUploadText>
      <CardList auctions={auction} />
    </>
  );
}

export default PurchaseImage;

const MyUploadText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #ffd0ae 50%);
  width: fit-content;
  margin: 8px 0;
`;
