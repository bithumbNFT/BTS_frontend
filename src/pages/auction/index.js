import React, { useCallback, useEffect } from 'react';
import Header from 'components/Common/Header';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Nfting from 'components/Nfting';
import { LOAD_ONE_AUCTION_REQUEST, clearAuction } from 'reducers/auction';
import { checkBalanceAction } from 'reducers/user';

function auctionPost({ match }) {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  const { singleAuction, loadOneAuctionLoading, loadOneAuctionDone } = useSelector(state => state.auctionReducer);
  const { balanceData } = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch({
      type: LOAD_ONE_AUCTION_REQUEST,
      data: match.params.id,
    });
    if (userInfo.coin_wallet) {
      dispatch(checkBalanceAction(userInfo.coin_wallet));
    } else {
      return 0;
    }
    return () => {
      dispatch(clearAuction());
    };
  }, [match.params.id]);

  return (
    <>
      <Header />
      {loadOneAuctionLoading && !loadOneAuctionDone ? (
        <div>로딩중</div>
      ) : (
        <Nfting
          props={singleAuction}
          status={singleAuction.auction}
          balance={balanceData}
        />
      )}
    </>
  );
}

export default auctionPost;
