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
  const { mainAuctions } = useSelector(stateRedux => stateRedux.auctionReducer);

  // 페이징네이션 작업
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // [TODO] 주석 풀어야함
  useEffect(() => {
    const response = async () => {
      const res = await dispatch({
        type: LOAD_AUCTION_REQUEST,
      });
      setPosts(res.data);
      response();
    };
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };
  console.log('currentPosts: ', currentPosts);

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

        {mainAuctions.length > 0 ? (
          <CardWrap>
            <CardListBox>
              {mainAuctions.map(post => (
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
