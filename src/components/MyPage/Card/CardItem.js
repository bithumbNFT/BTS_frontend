import React from 'react';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  width: 200px;
  border: 1px solid #ddd;
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
  width: 60px;
  height: 30px;
  border-radius: 10%;
  background-color: #3d3d3d;
`;
function Card() {
  return (
    <CardContainer>
      <CardImage src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
      <CardTitle>title1</CardTitle>
      <CardDescription>description</CardDescription>
      <Author>author</Author>
      <Status>판매중</Status>
    </CardContainer>
  );
}

export default Card;
