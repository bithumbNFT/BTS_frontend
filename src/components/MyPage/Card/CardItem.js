import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RiHeartLine, RiHeartFill } from 'react-icons/ri';

function Card({ post }) {
  const [liked, setLiked] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked(prev => !prev);
  }, []);

  return (
    <CardContainer>
      <Link to={`/auction/${post.id}`}>
        <CardImage src={post.image} />
      </Link>

      <CardDetail>
        <CardLeft>
          <CardTitle>{post.name}</CardTitle>
          <p>by {post.owner}</p>
        </CardLeft>

        <CardRight>
          {liked ? (
            <RiHeartFill onClick={onToggleLike} style={{ color: '#fe5000' }} />
          ) : (
            <RiHeartLine onClick={onToggleLike} />
          )}

          <Status>판매중</Status>
        </CardRight>
      </CardDetail>
    </CardContainer>
  );
}
Card.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string,
    owner: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    no: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default Card;

const CardContainer = styled.div`
  border: 1px solid #ddd;
  width: 300px;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: all 0.3s;
  opacity: 0.7;
  height: 380px;
  display: grid;
  overflow: hidden;
  grid-auto-rows: 2fr 1fr;
  &:hover {
    box-shadow: 1px 1px 20px #ddd;
    opacity: 1;
  }
  a {
    height: 100%;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
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
  svg {
    cursor: pointer;
    font-size: 20px;
  }
`;
