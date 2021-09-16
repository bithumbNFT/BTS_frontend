import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { VscHeart } from 'react-icons/vsc';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  width: 220px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h5`
  font-weight: bold;
`;

const CardImage = styled.img`
  width: 100%;
`;

const Status = styled.div`
  width: fit-content;
  height: auto;
  padding: 5px;
  border-radius: 10%;
  background-color: #f5e6ca;
  font-size: 12px;
  color: #343f56;
`;
const CardDetail = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 15px;
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
      <Link to="/auction">
        <CardImage src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
      </Link>

      <CardDetail>
        <CardLeft>
          <CardTitle>title1</CardTitle>
          <p>description</p>
          <p>author</p>
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
