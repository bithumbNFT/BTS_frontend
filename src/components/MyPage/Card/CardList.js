import React from 'react';
import CardItem from './CardItem';
import { CardWrap, CardListWrapper } from './styles';

function CardList({ auctions, likeAuctions }) {
  console.log('auctions------------+', auctions);
  console.log('like auctions------------+', likeAuctions);

  return (
    <CardWrap>
      <CardListWrapper>
        {auctions.map(post => (
          <CardItem
            key={post.id}
            post={post}
            isLike={likeAuctions.includes(post.id)}
          />
        ))}
      </CardListWrapper>
    </CardWrap>
  );
}

export default CardList;
