import React, { useCallback, useEffect } from 'react';
import Header from 'components/Common/Header';
import { useSelector, useDispatch } from 'react-redux';
import Nfting from 'components/Nfting';
import { LOAD_ONE_AUCTION_REQUEST, clearAuction } from 'reducers/auction';

function auctionPost({ match }) {
  const dispatch = useDispatch();
  const { singleAuction } = useSelector(state => state.auctionReducer);

  useEffect(() => {
    dispatch({
      type: LOAD_ONE_AUCTION_REQUEST,
      data: match.params.id,
    });
    return () => {
      dispatch(clearAuction());
    };
  }, [match.params.id]);

  return (
    <>
      <Header />
      <Nfting props={singleAuction} />
    </>
  );
}

export default auctionPost;
