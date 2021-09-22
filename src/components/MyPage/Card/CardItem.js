import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { RiHeartLine, RiHeartFill } from 'react-icons/ri';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  width: 220px;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: all 0.3s;
  opacity: 0.7;
  &:hover {
    box-shadow: 1px 1px 20px #ddd;
    opacity: 1;
  }
`;

const CardTitle = styled.h5`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
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
  margin-top: 3em;
`;

const CardDetail = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const CardLeft = styled.div`
  p {
    font-size: 14px;
    line-height: 1.2;
    margin-top: 0.3em;
  }
`;
const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

function Card() {
  const [liked, setLiked] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  return (
    <CardContainer>
      <Link to="/auction">
        <CardImage src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
      </Link>

      <CardDetail>
        <CardLeft>
          <CardTitle>머리카락 휘날리며</CardTitle>
          <p>by 피카소</p>
        </CardLeft>

        <CardRight>
          {liked ? (
            <RiHeartFill onClick={onToggleLike} />
          ) : (
            <RiHeartLine onClick={onToggleLike} />
          )}

          <Status>판매중</Status>
        </CardRight>
      </CardDetail>
    </CardContainer>
  );
}

export default Card;
