import React from 'react';
import Card from 'components/Home/Card';
import { CardListBox, CardWrap } from './style';

function CardList() {
  return (
    <CardWrap>
      <CardListBox>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardListBox>
    </CardWrap>
  );
}

export default CardList;
