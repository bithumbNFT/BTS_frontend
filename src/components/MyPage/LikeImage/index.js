import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_LIKE_AUCTION_REQUEST } from 'reducers/auction';
import CardList from '../Card/CardList';

function LikeImage() {
  const dispatch = useDispatch();
  const { auction } = useSelector(state => state.auctionReducer);

  useEffect(() => {
    dispatch({
      type: LOAD_LIKE_AUCTION_REQUEST,
    });
  }, [auction]);
  return (
    <>
      <MyUploadText># 좋아요한 작품</MyUploadText>
      <CardList auctions={auction} />
    </>
  );
}

export default LikeImage;

const MyUploadText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #ffd0ae 50%);
  width: fit-content;
  margin: 8px 0;
`;
