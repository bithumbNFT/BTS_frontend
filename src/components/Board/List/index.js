import React from 'react';
import { Link } from 'react-router-dom';
import { HiPencilAlt } from 'react-icons/hi';
import Item from '../Item';
import { ListView, ListWrap } from './styles';

function List() {
  return (
    <ListWrap>
      <div className="write">
        <Link to="/post" className="postButton">
          <i>
            <HiPencilAlt />
          </i>
          글쓰기
        </Link>
      </div>

      <ListView>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ListView>
    </ListWrap>
  );
}

export default List;
