import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  LOAD_MY_AUCTION_REQUEST,
  LOAD_LIKE_AUCTION_REQUEST,
} from 'reducers/auction';
import { Empty, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import CardList from '../Card/CardList';
import Button from './Button';

function MyUpload() {
  const dispatch = useDispatch();
  const { myAuctions, likeAuctions, loadMyAuctionLoading, loadMyAuctionDone } = useSelector(
    state => state.auctionReducer,
  );
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    dispatch({
      type: LOAD_MY_AUCTION_REQUEST,
      data: userInfo.id,
    });
    dispatch({
      type: LOAD_LIKE_AUCTION_REQUEST,
      data: JSON.parse(localStorage.getItem('userInfo')).id,
    });
  }, []);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <>
      {!loadMyAuctionDone ? (
        <Spin indicator={antIcon} />
      ) : (
        <>
          <MyUploadHeader>
            <MyUploadText># 나의 NFT 작품</MyUploadText>
            <Button />
          </MyUploadHeader>

          {myAuctions.length > 0 ? (
            <CardList
              auctions={myAuctions}
              likeAuctions={likeAuctions.map(item => item.id)}
            />
          ) : (
            <EmptyWrap>
              <Empty description={false} />
              <h3>작가님의 첫 작품을 등록해보세요.</h3>
            </EmptyWrap>
          )}
        </>
      )}
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
  @media (max-width: 414px) {
    font-size: 1rem;
  }
`;

const EmptyWrap = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    font-size: 1rem;
    color: #616568;
    margin-top: 1rem;
    font-weight: 400;
  }
`;
