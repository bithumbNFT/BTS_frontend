import React, { useEffect, useRef, useCallback, useState } from 'react';
import Header from 'components/Common/Header';
import CardItem from 'components/MyPage/Card/CardItem';
import Footer from 'components/Common/Footer';
import SmallFooter from 'components/Common/SmallFooter';
import { Pagination, Empty } from 'antd';
import HomeIntro from 'components/Home/Intro';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_AUCTION_REQUEST } from 'reducers/auction';
import { Title, CardWrap, CardListBox, BottomMailn, EmptyWrap } from './styles';

function home() {
  const dispatch = useDispatch();
  const focusScreen = useRef([]);
  const { auction } = useSelector(stateRedux => stateRedux.auctionReducer);

  useEffect(() => {
    dispatch({
      type: LOAD_AUCTION_REQUEST,
    });
  }, [auction]);

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

        {auction.length > 0 ? (
          <CardWrap>
            <CardListBox>
              {auction.map(post => (
                <CardItem key={post.id} post={post} />
              ))}
            </CardListBox>

            <Pagination />
          </CardWrap>
        ) : (
          <EmptyWrap>
            <Empty description={false} />
            <h3>아직 등록된 경매 게시물이 없습니다.</h3>
          </EmptyWrap>
        )}
      </BottomMailn>

      <Footer />
      <SmallFooter />
    </>
  );
}

export default home;
