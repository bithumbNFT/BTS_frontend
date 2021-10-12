import React, { useEffect, useState } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_POSTS_REQUEST } from 'reducers/post';
import { Link } from 'react-router-dom';
import { Empty, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Pagination from 'components/Common/Pagination';
import Item from 'components/Board/Item';
import Intro from 'components/Board/Intro';
import Header from 'components/Common/Header';

import { ListView, ListWrap, EmptyWrap } from './styles';

function board() {
  const dispatch = useDispatch();
  const { loadPostsLoading, loadPostsDone, mainPosts } = useSelector(
    state => state.postReducer,
  );
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  // PagingNation
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 전체 페이지 (게시물 개수)
  const [postsPerPage, setPostsPerPage] = useState(5);

  // 해당 페이지에서 마지막 post의 index 번호를 가르킵니다.
  const indexOfLastPost = currentPage * postsPerPage;
  //  해당 페이지에서 첫번째 post의 index 번호를 가르킵니다.
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // 각 페이지에서 보여질 포스트 배열입니다.
  const currentPosts = mainPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* 헤더 */}
      <Header />
      {!loadPostsDone ? (
        <Spin indicator={antIcon} />
      ) : (
        <main>
          {/* 인트로 view */}
          <Intro />

          {/* 게시글 리스트 */}
          <ListWrap>
            <div className="write">
              <Link to="/board_write">
                <button type="button" className="postButton">
                  <i>
                    <HiPencilAlt />
                  </i>
                  글쓰기
                </button>
              </Link>
            </div>

            <ListView>
              {/* {isBoard &&} */}
              {mainPosts.length > 0 ? (
                <>
                  {currentPosts.map(post => (
                    <Item key={post.id} post={post} mainPosts={currentPosts} />
                  ))}

                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={mainPosts.length}
                    paginate={paginate}
                  />
                </>
              ) : (
                <EmptyWrap>
                  <Empty description={false} />
                  <h3>아직 등록된 게시물이 없습니다.</h3>
                </EmptyWrap>
              )}
            </ListView>
          </ListWrap>
        </main>
      )}
    </>
  );
}

export default board;
