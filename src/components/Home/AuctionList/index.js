import React from 'react';
import CardItem from 'components/MyPage/Card/CardItem';
import { Pagination } from 'antd';
import { CardListBox, CardWrap } from './style';

function CardList() {
  return (
    <CardWrap>
      <CardListBox>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </CardListBox>
      <Pagination defaultCurrent={1} total={50} />
    </CardWrap>
  );
}

export default CardList;
