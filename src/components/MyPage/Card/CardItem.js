import React from 'react';
import styled from '@emotion/styled';
import { VscHeart } from 'react-icons/vsc';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  width: 220px;
  border-radius: 5px;
  margin-bottom: 15px;
  padding-bottom: 1rem;
`;

const CardTitle = styled.h5`
  padding-left: 15px;
  font-weight: bold;
`;
const CardDescription = styled.p`
  padding-left: 15px;
`;
const CardImage = styled.img`
  width: 100%;
`;
const Author = styled.div`
  padding-left: 15px;
`;
const Status = styled.div`
  width: fit-content;
  height: auto;
  padding: 3px;
  border-radius: 10%;
  background-color: #f5e6ca;
  font-size: 12px;
  color: #343f56;
`;
const CardDetail = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
const CardLeft = styled.div``;
const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

function Card() {
  return (
    <CardContainer>
      <a href="#this">
        <CardImage src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
      </a>

      <CardDetail>
        <CardLeft>
          <CardTitle>title1</CardTitle>
          <CardDescription>description</CardDescription>
          <Author>author</Author>
        </CardLeft>

        <CardRight>
          <VscHeart />
          <Status>판매중</Status>
        </CardRight>
      </CardDetail>
    </CardContainer>
  );
}

export default Card;
