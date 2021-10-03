import React, { useEffect } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_POSTS_REQUEST } from 'reducers/post';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import Item from 'components/Board/Item';
import Intro from 'components/Board/Intro';
import Header from 'components/Common/Header';
import { ListView, ListWrap } from './styles';

function board() {
  const dispatch = useDispatch();
  const { mainPosts } = useSelector(state => state.postReducer);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

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
            {mainPosts.map(post => (
              <Item key={post.id} post={post} />
            ))}

            <Pagination defaultCurrent={1} total={10} />
          </ListView>
        </ListWrap>
      </main>
    </>
  );
}

export default board;
