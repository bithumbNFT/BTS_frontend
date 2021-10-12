import React, { useCallback, useEffect } from 'react';
import Header from 'components/Common/Header';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Nfting from 'components/Nfting';
import { LOAD_ONE_AUCTION_REQUEST, clearAuction } from 'reducers/auction';
import { checkBalanceAction } from 'reducers/user';
import { LoadingOutlined } from '@ant-design/icons';
import { Empty, Spin } from 'antd';

function auctionPost({ match }) {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  const { singleAuction, loadOneAuctionLoading, loadOneAuctionDone } = useSelector(state => state.auctionReducer);
  const { balanceData } = useSelector(state => state.userReducer);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
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
      {!loadOneAuctionDone ? (
        <Spin indicator={antIcon} />
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
