import React, { useEffect, useRef, useCallback, useState } from 'react';
import Header from 'components/Common/Header';
import CardItem from 'components/MyPage/Card/CardItem';
import Footer from 'components/Common/Footer';
import SmallFooter from 'components/Common/SmallFooter';
import { Pagination } from 'antd';
import HomeIntro from 'components/Home/Intro';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_AUCTION_REQUEST } from 'reducers/auction';
import styled from '@emotion/styled';

function home() {
  const dispatch = useDispatch();
  const focusScreen = useRef([]);
  const { auction } = useSelector(stateRedux => stateRedux.auctionReducer);
  // [TODO] 주석 풀어야함
  useEffect(() => {
    dispatch({
      type: LOAD_AUCTION_REQUEST,
    });
  }, []);

  // 버튼 클릭시 경매 섹션으로 이동
  const scrollToAuction = useCallback(() => {
    const element = document.getElementById('position');
    const headerOffset = 40;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <Header />
      <HomeIntro onClick={scrollToAuction} />

      <BottomMailn ref={focusScreen} id="position">
        <Title>
          🎨 <strong>멋진 작가</strong>들의 <strong>다양한 작품</strong>들을{' '}
          <strong>경매</strong>해보세요 🥰
        </Title>

        <CardWrap>
          {/* [TODO] 주석풀어야함 */}
          <CardListBox>
            {auction.map(post => (
              <CardItem key={post.id} post={post} />
            ))}
          </CardListBox>

          <Pagination total={auction.length} current={1} />
        </CardWrap>
      </BottomMailn>

      <Footer />
      <SmallFooter />
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
`;

const CardListBox = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  margin: 0 auto;
`;

const BottomMailn = styled.section`
  height: 100%;
  position: relative;

  .ant-pagination {
    text-align: right;
    margin-right: 3%;
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
