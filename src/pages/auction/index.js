import React, { useCallback } from 'react';
import Header from 'components/Common/Header';
import { useSelector, useDispatch } from 'react-redux';
import Nfting from 'components/Nfting';
import { LOAD_AUCTION_REQUEST } from 'reducers/auction';

function auctionPost() {
  const dispatch = useDispatch();
  const { auction } = useSelector(state => state.auctionReducer);

  useCallback(() => {
    dispatch({
      type: LOAD_AUCTION_REQUEST,
    });
  }, [auction]);

  return (
    <>
      <Header />
      <Nfting props={auction} />
    </>
  );
}

export default auctionPost;
