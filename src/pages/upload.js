import React from 'react';
import styled from '@emotion/styled';
import Header from 'components/Common/Header';

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 2rem;
`;

function Upload() {
  return (
    <>
      <Header />
      <Container>
        <Title>작품 등록하기</Title>
      </Container>
    </>
  );
}

export default Upload;
