import React, { useEffect } from 'react';
import Header from 'components/Common/Header';
import { FiSearch } from 'react-icons/fi';
import { Empty } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_NFT_REQUEST } from 'reducers/auction';
import styled from '@emotion/styled';
import CardItem from 'components/MyPage/Card/CardItem';

const Search = ({ match }) => {
  console.log(match);
  const { searchNft } = useSelector(state => state.auctionReducer);
  const dispatch = useDispatch();
  console.log('searchNft--------', searchNft);

  useEffect(() => {
    dispatch({
      type: SEARCH_NFT_REQUEST,
      data: match.params.id,
    });
  }, [match.params.id]);

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
              <CardItem key={post.id} post={post} />
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
`;
const NoContent = styled.section`
  margin-top: 350px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;
