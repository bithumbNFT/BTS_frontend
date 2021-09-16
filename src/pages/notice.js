import React from 'react';
import Header from 'components/Common/Header';
import styled from '@emotion/styled';
import NoticeList from 'components/Notice/NoticeList';

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0 ;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 2rem;
`;

function notice() {
  return (
    <>
      <Header />
      <Container>
        <Title>알림</Title>
        <NoticeList />
      </Container>
    </>
  );
}

export default notice;
