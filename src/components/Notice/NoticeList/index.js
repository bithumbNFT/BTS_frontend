import React from 'react';
import styled from '@emotion/styled';
import NoticeItem from '../NoticeItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 4.5em 0;
  max-width: 1000px;
  overflow: hidden;
  box-sizing: border-box;
`;

function NoticeList() {
  return (
    <Container>
      <NoticeItem />
      <NoticeItem />
      <NoticeItem />
    </Container>
  );
}

export default NoticeList;
