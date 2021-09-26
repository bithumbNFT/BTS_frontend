import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_AUCTION_REQUEST } from 'reducers/auction';
import CardItem from './CardItem';

function CardList({ post }) {
  const dispatch = useDispatch();
  const { auction } = useSelector(state => state.auctionReducer);

  useEffect(() => {
    dispatch({
      type: LOAD_AUCTION_REQUEST,
    });
  }, [auction]);

  return (
    <CardWrap>
      <CardListWrapper>
        <CardItem />
        <CardItem />
        <CardItem />
      </CardListWrapper>
    </CardWrap>
  );
}

export default CardList;

const CardWrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 5% 0;
`;

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
