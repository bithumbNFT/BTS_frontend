import React from 'react';
import Header from 'components/Common/Header';
import NoticeList from 'components/Notice/NoticeList';
import { Container, Title } from './styles';

function Upload() {
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

export default Upload;
