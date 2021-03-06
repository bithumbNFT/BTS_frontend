import React, { useCallback, useEffect, useState } from 'react';
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
import {
  CardContainer,
  CardImage,
  CardDetail,
  CardLeft,
  CardTitle,
  CardRight,
  Status,
} from './styles';

function Card({ post, isLike }) {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [deleteShow, setDeleteShow] = useState(true);
  const userInfo = localStorage.getItem('userInfo');

  // 라이크 버튼 클릭 시 찜하기 목록으로 추가
  const onClickLike = useCallback(
    id => {
      if (userInfo) {
        if (window.confirm('해당 경매 작품을 찜목록에 추가하시겠습니까 ?')) {
          alert('찜 목록에 추가되었습니다.');
          setLiked(true);
          dispatch({
            type: LIKE_AUCTION_REQUEST,
            data: {
              nftid: post.id,
              user: String(JSON.parse(localStorage.getItem('userInfo')).id),
            },
          });
        }
      } else {
        alert('로그인 후 이용하실 수 있습니다.');
      }
    },
    [setLiked],
  );

  // 라이크 버튼 클릭 시 찜하기 목록으로 제거
  const onClickUnLike = useCallback(id => {
    if (window.confirm('해당 경매 작품을 찜목록에 제거하시겠습니까 ?')) {
      setLiked(false);
      dispatch({
        type: UNLIKE_AUCTION_REQUEST,
        data: {
          nftid: post.id,
          user: String(JSON.parse(localStorage.getItem('userInfo')).id),
        },
      });
    }
  }, []);

  // 카드 아이템 마우스 호버시 삭제버튼 show 여부
  const deleteButton = () => {
    if (window.location.pathname === '/mypage') {
      setDeleteShow(true);
    } else {
      setDeleteShow(false);
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
      data: {
        id: post.id,
        from: String(JSON.parse(localStorage.getItem('userInfo')).id),
      },
    });
  }, []);

  // 마이페이지 좋아요한 작품에는 하트 fill 처리
  useEffect(() => {
    setLiked(false);
    if (window.location.pathname === '/mypage/wishlist') {
      setLiked(true);
    }
    if (isLike) {
      setLiked(true);
    }
  });

  return (
    <CardContainer
      onMouseOver={deleteButton}
      data-aos="zoom-in-down"
      data-aos-duration="2000"
    >
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
          <Status
            className={
              post.auction === 'READY'
                ? 'pre'
                : post.auction === 'START'
                ? 'ing'
                : 'completion'
            }
          >
            {post.auction === 'READY'
              ? '경매전'
              : post.auction === 'START'
              ? '경매중'
              : '경매완료'}
          </Status>
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
