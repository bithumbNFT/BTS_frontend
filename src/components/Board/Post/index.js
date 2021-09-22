import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import CommentView from 'components/Board/CommentView';
import { useDispatch } from 'react-redux';
import { REMOVE_POST_REQUEST } from 'reducers/post';
import { PostWrap, Title, CommentWrap } from './styles';
import CommentWrite from '../CommentWrite';

function Post({ title, content, user, time, num }) {
  const dispatch = useDispatch();
  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
    });
  });
  return (
    <>
      {/* 게시글 view */}
      <PostWrap>
        <div className="boardHeader">
          <Title>{title}</Title>

          <div className="align">
            <div className="userTimeNum">
              <span className="name">{user}</span>
              <span className="date">{time}</span>
              <span className="comment">답변수 {num}</span>
            </div>

            <div className="right">
              <button type="button">수정</button>
              <button type="button" onClick={onRemovePost}>
                삭제
              </button>
            </div>
          </div>
        </div>

        <section className="boardBody">
          <p>{content}</p>
        </section>
      </PostWrap>

      {/* 댓글 view */}
      <CommentWrap>
        <CommentView />
        <CommentView />
        <CommentView />
        <CommentView />

        {/* 댓글 달기 form */}
        <CommentWrite />
      </CommentWrap>
    </>
  );
}

Post.defaultProps = {
  title: '비트코인 앞으로의 전망',
  content: '비트코인 물렸습니다ㅏ....... 언제 쯤 오를까요 ??',
  user: '이현주',
  time: '30분 전',
  num: 5,
};

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  user: PropTypes.string,
  time: PropTypes.string,
  num: PropTypes.number,
};

export default Post;
