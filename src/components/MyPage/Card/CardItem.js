import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';
import {
  REMOVE_AUCTION_REQUEST,
  LIKE_AUCTION_REQUEST,
  UNLIKE_AUCTION_REQUEST,
} from 'reducers/auction';
import { RiHeartLine, RiHeartFill } from 'react-icons/ri';

function Card({ post }) {
  // console.log('auction post', post);
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [deleteShow, setDeleteShow] = useState(true);

  // 라이크 버튼 클릭 시 찜하기 목록으로 추가
  const onClickLike = useCallback(
    id => {
      if (window.confirm('해당 경매 작품을 찜목록에 추가하시겠습니까 ?')) {
        setLiked(true);
        alert('찜 목록에 추가되었습니다.');
        dispatch({
          type: LIKE_AUCTION_REQUEST,
          data: id,
        });
      }
    },
    [setLiked],
  );

  // 라이크 버튼 클릭 시 찜하기 목록으로 제거
  const onClickUnLike = useCallback(id => {
    if (window.confirm('해당 경매 작품을 찜목록에 제거하시겠습니까 ?')) {
      setLiked(false);
      alert('찜 목록에 제거되었습니다.');
      dispatch({
        type: UNLIKE_AUCTION_REQUEST,
        data: id,
      });
    }
  }, []);

  // 카드 아이템 마우스 호버시 삭제버튼 show 여부
  const deleteButton = () => {
    if (window.location.pathname === '/') {
      setDeleteShow(false);
    } else if (window.location.pathname === '/mypage/purchase') {
      setDeleteShow(false);
    } else if (window.location.pathname === '/mypage/wishlist') {
      setDeleteShow(false);
    } else {
      setDeleteShow(true);
    }
  };

  // 본인이 등록한 경매 게시글 삭제
  const onRemoveAuction = useCallback(() => {
    if (window.confirm('정말 삭제하시겠습니까 ?')) {
      alert('삭제되었습니다.');
    } else {
      return;
    }
    dispatch({
      type: REMOVE_AUCTION_REQUEST,
    });
  }, []);

  return (
    <CardContainer onMouseOver={deleteButton}>
      <button
        type="button"
        className={deleteShow ? 'delete' : 'none'}
        onClick={onRemoveAuction}
      >
        <FaRegTrashAlt />
      </button>

      <Link to={`/auction/${post.id}`}>
        <CardImage src={post.imagepath} />
      </Link>

      <CardDetail>
        <CardLeft>
          <CardTitle>{post.name}</CardTitle>
          <p>by {post.username}</p>
        </CardLeft>

        <CardRight>
          {liked ? (
            <RiHeartFill onClick={onClickUnLike} style={{ color: '#fe5000' }} />
          ) : (
            <RiHeartLine onClick={onClickLike} />
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
    id: PropTypes.string,
    no: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Card;

const CardContainer = styled.div`
  border: 1px solid #ddd;
  position: relative;
  width: 300px;
  border-radius: 5px;
  margin-bottom: 32px;
  transition: all 0.3s;
  opacity: 0.7;
  height: 380px;
  display: grid;
  overflow: hidden;
  grid-auto-rows: 2fr 1fr;
  .delete {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.5rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    width: 3rem;
    height: 3rem;
    transition: all 0.4s;
    display: none;
    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  }
  .none {
    display: none;
  }
  &:hover {
    box-shadow: 1px 1px 20px #ddd;
    opacity: 1;
    .delete {
      display: block;
    }
    .none {
      display: none;
    }
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
