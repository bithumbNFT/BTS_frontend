import React from 'react';
import CardItem from './CardItem';
import { CardWrap, CardListWrapper } from './styles';

function CardList({ auctions }) {
  console.log('auctions------------+', auctions);
  return (
    <CardWrap>
      <CardListWrapper>
        {auctions.map(post => (
          <CardItem key={post.id} post={post} />
        ))}
      </CardListWrapper>
    </CardWrap>
  );
}

export default CardList;
