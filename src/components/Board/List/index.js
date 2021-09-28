import React, { useEffect } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { LOAD_POSTS_REQUEST } from 'reducers/post';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import Item from '../Item';
import { ListView, ListWrap } from './styles';

function List() {
  const dispatch = useDispatch();
  const { board } = useSelector(state => state.postReducer);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, [board]);

  return (
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
        {board.map(post => (
          <Item key={post.id} post={post} />
        ))}

        <Pagination defaultCurrent={1} total={10} />
      </ListView>
    </ListWrap>
  );
}

Item.propTypes = {
  board: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    createPostDate: PropTypes.string,
    p_id: PropTypes.number,
    title: PropTypes.string,
    view_cnt: PropTypes.number,
  }).isRequired,
};

export default List;
