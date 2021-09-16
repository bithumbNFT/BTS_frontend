import React, { useState } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import Item from '../Item';
import PostWrite from '../PostWrite';
import { ListView, ListWrap } from './styles';

function List() {
  const [isShowing, setIsShowing] = useState(false);

  const openModal = () => {
    setIsShowing(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsShowing(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <ListWrap>
      <div className="write">
        <button type="button" className="postButton" onClick={openModal}>
          <i>
            <HiPencilAlt />
          </i>
          글쓰기
        </button>
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

      <PostWrite onClose={closeModal} open={isShowing} />
    </ListWrap>
  );
}

export default List;
