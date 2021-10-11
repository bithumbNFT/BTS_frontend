import React, { useEffect } from 'react';
import Header from 'components/Common/Header';
import { FiSearch } from 'react-icons/fi';
import { Empty } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  SEARCH_NFT_REQUEST,
  LOAD_LIKE_AUCTION_REQUEST,
} from 'reducers/auction';
import styled from '@emotion/styled';
import CardItem from 'components/MyPage/Card/CardItem';

const Search = ({ match }) => {
  const { searchNft, likeAuctions } = useSelector(
    state => state.auctionReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: SEARCH_NFT_REQUEST,
      data: match.params.id,
    });
    if (localStorage.getItem('userInfo')) {
      dispatch({
        type: LOAD_LIKE_AUCTION_REQUEST,
        data: JSON.parse(localStorage.getItem('userInfo')).id,
      });
    }
  }, [match.params.id]);

  const likeAuctionsId = likeAuctions.map(like => like.id);

  return (
    <>
      <Header />

      <SearchWrap>
        <h2>
          <FiSearch />
          이것을 찾으셨나요 ? &nbsp;
          <strong>&quot;{match.params.id}&quot;</strong>
        </h2>

        {searchNft.length > 0 ? (
          <CardListBox>
            {searchNft.map(post => (
              <CardItem
                key={post.id}
                post={post}
                isLike={likeAuctionsId.includes(post.id)}
              />
            ))}
          </CardListBox>
        ) : (
          <NoContent>
            <Empty description={false} />
            <h3>해당 검색 결과가 없습니다.</h3>
          </NoContent>
        )}
      </SearchWrap>
    </>
  );
};

export default Search;

const CardListBox = styled.section`
  margin-top: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  @media (max-width: 414px) {
    margin-top: 50px;
    grid-template-columns: 1fr;
    margin-top: 3.5rem;
  }
`;

const SearchWrap = styled.main`
  width: 1200px;
  margin: 0 auto;
  height: 100vh;
  h2 {
    font-size: 32px;
    margin-top: 6rem;
    display: flex;
    align-content: center;

    svg {
      margin-right: 1rem;
    }
    strong {
      font-weight: 700;
      color: #fe5000;
    }
  }
  h3 {
    font-size: 1rem;
    color: #616568;
    margin-top: 1rem;
    font-weight: 400;
    text-align: center;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 4rem;
  }
  @media (max-width: 414px) {
    padding: 0 1rem;
    h2 {
      font-size: 1.5rem;
    }
  }
`;
const NoContent = styled.section`
  margin-top: 350px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;
