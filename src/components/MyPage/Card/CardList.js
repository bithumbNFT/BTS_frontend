import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import CardItem from './CardItem';

function CardList({ auctions }) {
  console.log(auctions);
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

const CardWrap = styled.div`
  padding: 5% 0;
`;

const CardListWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 50px 0 0;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

CardList.propTypes = {
  auction: PropTypes.shape({
    image: PropTypes.string,
    owner: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    no: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
