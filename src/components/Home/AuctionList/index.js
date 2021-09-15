import React from 'react';
import CardItem from 'components/MyPage/Card/CardItem';
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
    </CardWrap>
  );
}

export default CardList;
