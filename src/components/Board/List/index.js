import React from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import Item from '../Item';
import { ListView, ListWrap } from './styles';

function List() {
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
