import React, { useEffect, useRef, useCallback } from 'react';
import Header from 'components/Common/Header';
import CardItem from 'components/MyPage/Card/CardItem';
import { Pagination } from 'antd';
import HomeIntro from 'components/Home/Intro';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_AUCTION_REQUEST } from 'reducers/auction';
import styled from '@emotion/styled';

function home() {
  const dispatch = useDispatch();
  const focusScreen = useRef([]);
  const { auction } = useSelector(state => state.auctionReducer);

  useEffect(() => {
    dispatch({
      type: LOAD_AUCTION_REQUEST,
    });
  }, [auction]);

  // 버튼 클릭시 경매템 섹션으로 이동
  const scrollToAuction = useCallback(() => {
    focusScreen.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  return (
    <>
      <Header />
      <HomeIntro onClick={scrollToAuction} />

      <BottomMailn ref={focusScreen}>
        <Title>
          🎨 <strong>멋진 작가</strong>들의 <strong>다양한 작품</strong>들을{' '}
          <strong>경매</strong>해보세요 🥰
        </Title>

        <CardWrap>
          <CardListBox>
            {auction.map(post => (
              <CardItem key={post.id} post={post} />
            ))}
          </CardListBox>
          <Pagination defaultCurrent={1} total={10} />
        </CardWrap>
      </BottomMailn>
    </>
  );
}

export default home;

const Title = styled.h2`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.2;
  text-align: center;
  letter-spacing: -1.5px;
  padding: 5%;
  strong {
    font-weight: 600;
  }
`;

const CardWrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
`;

const CardListBox = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  margin: 0 auto;
`;

const BottomMailn = styled.section`
  height: 100vh;
  position: relative;

  .ant-pagination {
    text-align: right;
    margin-right: 3%;
    margin-top: 10%;
  }
  .ant-pagination-item-active a {
    color: #fe5000;
  }
  .ant-pagination-item-active {
    font-weight: 500;
    background: #fff;
    border-color: #fe5000;
  }
`;
