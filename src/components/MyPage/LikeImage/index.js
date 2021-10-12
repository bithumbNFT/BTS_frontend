import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_LIKE_AUCTION_REQUEST } from 'reducers/auction';
import { Empty, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import CardList from '../Card/CardList';

function LikeImage() {
  const dispatch = useDispatch();
  const { likeAuctions, loadLikeAuctionLoading, loadLikeAuctionDone } = useSelector(
    state => state.auctionReducer,
  );
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  useEffect(() => {
    dispatch({
      type: LOAD_LIKE_AUCTION_REQUEST,
      data: user.id,
    });
  }, [dispatch]);
  return (
    <>
      {!loadLikeAuctionDone ? (
        <Spin indicator={antIcon} />
      ) : (
        <>
          <MyUploadText># 좋아요한 작품</MyUploadText>

          {likeAuctions.length > 0 ? (
            <CardList
              auctions={likeAuctions}
              likeAuctions={likeAuctions.map(item => item.id)}
            />
          ) : (
            <EmptyWrap>
              <Empty description={false} />
              <h3>좋아요한 작품이 없습니다.</h3>
            </EmptyWrap>
          )}
        </>
      )}
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
  @media (max-width: 414px) {
    font-size: 1rem;
  }
`;

export const EmptyWrap = styled.section`
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
