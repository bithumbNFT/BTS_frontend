import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_AUCTION_REQUEST } from 'reducers/auction';
import { Empty } from 'antd';
import CardList from '../Card/CardList';
import Button from './Button';

function MyUpload() {
  const dispatch = useDispatch();
  const { myAuctions } = useSelector(state => state.auctionReducer);

  useEffect(() => {
    dispatch({
      type: LOAD_MY_AUCTION_REQUEST,
    });
  }, [myAuctions]);
  return (
    <>
      <MyUploadHeader>
        <MyUploadText># 내가 등록한 작품</MyUploadText>
        <Button />
      </MyUploadHeader>

      {myAuctions.length > 0 ? (
        <CardList auctions={myAuctions} />
      ) : (
        <EmptyWrap>
          <Empty description={false} />
          <h3>작가님의 첫 작품을 등록해보세요.</h3>
        </EmptyWrap>
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
