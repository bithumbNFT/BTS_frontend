import React, { useEffect } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_POSTS_REQUEST } from 'reducers/post';
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
        <a href="/board_write">
          <button type="button" className="postButton">
            <i>
              <HiPencilAlt />
            </i>
            글쓰기
          </button>
        </a>
      </div>

      <ListView>
        {board.map(post => (
          <Item key={post.id} post={post} />
        ))}
      </ListView>
    </ListWrap>
  );
}

export default List;
