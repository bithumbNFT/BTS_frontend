import React, { useEffect, useRef, useCallback, useState } from 'react';
import Header from 'components/Common/Header';
import CardItem from 'components/MyPage/Card/CardItem';
import Footer from 'components/Common/Footer';
import SmallFooter from 'components/Common/SmallFooter';
import { Empty, Spin } from 'antd';
import HomeIntro from 'components/Home/Intro';
import Pagination from 'components/Common/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import 'aos/dist/aos.css';
import AOS from 'aos';
import {
  LOAD_AUCTION_REQUEST,
  LOAD_LIKE_AUCTION_REQUEST,
} from 'reducers/auction';
import { Title, CardWrap, CardListBox, BottomMailn, EmptyWrap } from './styles';

function home() {
  const dispatch = useDispatch();
  const focusScreen = useRef([]);
  const { mainAuctions, likeAuctions, loadAuctionLoading, loadAuctionDone } = useSelector(
    stateRedux => stateRedux.auctionReducer,
  );
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  useEffect(() => {
    dispatch({
      type: LOAD_AUCTION_REQUEST,
    });
    if (localStorage.getItem('token')) {
      dispatch({
        type: LOAD_LIKE_AUCTION_REQUEST,
        data: userInfo.id,
      });
    }
  }, [localStorage]);

  // const likeAuctionsId = likeAuctions ?.map(like => like.id) || [];
  const likeAuctionsId = likeAuctions ? likeAuctions.map(like => like.id) : [];

  // PagingNation
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 전체 페이지 (게시물 개수)
  const [postsPerPage, setPostsPerPage] = useState(9);
  // 해당 페이지에서 마지막 post의 index 번호를 가르킵니다.
  const indexOfLastPost = currentPage * postsPerPage;
  //  해당 페이지에서 첫번째 post의 index 번호를 가르킵니다.
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // 각 페이지에서 보여질 포스트 배열입니다.
  const currentAuctions = mainAuctions.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

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
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <>
      <Header />
      <HomeIntro onClick={scrollToAuction} />

      {!loadAuctionDone ? (
        <Spin indicator={antIcon} />
      ) : (
        <>
          <BottomMailn ref={focusScreen} id="position">
            <Title>
              🎨 <strong>멋진 작가</strong>들의 <strong>다양한 작품</strong>들을{' '}
              <strong>경매</strong>해보세요 🥰
            </Title>

            {mainAuctions.length > 0 ? (
              <CardWrap>
                <CardListBox>
                  {currentAuctions.map(post => (
                    <CardItem
                      key={post.id}
                      post={post}
                      isLike={likeAuctionsId.includes(post.id)}
                    />
                  ))}
                </CardListBox>

                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={mainAuctions.length}
                  paginate={paginate}
                />
              </CardWrap>
            ) : (
              <EmptyWrap>
                <Empty description={false} />
                <h3>아직 등록된 경매 게시물이 없습니다.</h3>
              </EmptyWrap>
            )}
          </BottomMailn>
        </>
      )}

      <Footer />
      <SmallFooter />
    </>
  );
}

export default home;
