import React, { useEffect, useState } from 'react';
import Header from 'components/Common/Header';
import { FiSearch } from 'react-icons/fi';
import { Empty } from 'antd';
import styled from '@emotion/styled';

const Search = ({ match }) => {
  const { username } = match.params;

  // const [keyWords, setKeyWords] = useState([]);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const result = localStorage.getItem('keywords') || [];
  //     setKeyWords(JSON.parse(result));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('ketwords', JSON.stringify(keyWords));
  // }, [keyWords]);

  // 검색어 추가
  // const handleAddKeyword = text => {
  //   const newKeyword = {
  //     id: Date.now(),
  //     text,
  //   };
  //   setKeyWords([newKeyword, ...keyWords]);
  // };

  return (
    <>
      <Header />

      <SearchWrap>
        <h2>
          <FiSearch />
          이것을 찾으셨나요 ? &nbsp;{' '}
          <strong>&quot;{match.params.id}&quot;</strong>
        </h2>

        <NoContent>
          <Empty description={false} />
          <h3>해당 검색 결과가 없습니다.</h3>
        </NoContent>
      </SearchWrap>
    </>
  );
};

export default Search;

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
