import React, { useEffect, useState } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_POSTS_REQUEST, loadPosts } from 'reducers/post';
import { Link } from 'react-router-dom';
import { Pagination, Empty } from 'antd';
import Item from 'components/Board/Item';
import Intro from 'components/Board/Intro';
import Header from 'components/Common/Header';
import { ListView, ListWrap, EmptyWrap } from './styles';

function board() {
  const dispatch = useDispatch();
  const getPostsData = () => dispatch(loadPosts());
  const { mainPosts } = useSelector(state => state.postReducer);

  useEffect(() => {
    getPostsData();
  }, [dispatch]);

  return (
    <>
      {/* 헤더 */}
      <Header />
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
                {mainPosts.map(post => (
                  <Item key={post.id} post={post} />
                ))}

                <Pagination defaultCurrent={1} total={10} />
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
    </>
  );
}

export default board;
