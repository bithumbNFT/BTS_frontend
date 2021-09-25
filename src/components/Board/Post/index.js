import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import CommentView from 'components/Board/CommentView';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_POST_REQUEST } from 'reducers/post';
import moment from 'moment';
import { PostWrap, Title, CommentWrap } from './styles';
import CommentWrite from '../CommentWrite';

moment.locale('ko');
console.log(moment);

function Post({ post }) {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector(state => state.postReducer);

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
    });
  }, []);

  return (
    <>
      {/* 게시글 view */}
      <PostWrap>
        <div className="boardHeader">
          <Title>{post.title}</Title>

          <div className="align">
            <div className="userTimeNum">
              <span className="name">{post.author}</span>
              <span className="date">
                {moment(post.createdAt, 'YYYYMMDD').fromNow()}
              </span>
              <span className="comment">답변수 {post.view_cnt}</span>
            </div>

            <div className="right">
              <button type="button">수정</button>
              <button
                type="button"
                onClick={onRemovePost}
                loading={removePostLoading}
              >
                삭제
              </button>
            </div>
          </div>
        </div>

        <section className="boardBody">
          <p>{post.content}</p>
        </section>
      </PostWrap>

      {/* 댓글 view */}
      <CommentWrap>
        <CommentView key={post.id} post={post} />
        <CommentView key={post.id} post={post} />
        <CommentView key={post.id} post={post} />
        <CommentView key={post.id} post={post} />

        {/* 댓글 달기 form */}
        <CommentWrite post={post} />
      </CommentWrap>
    </>
  );
}

Post.propTypes = {
  board: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    createPostDate: PropTypes.string,
    p_id: PropTypes.number,
    title: PropTypes.string,
    view_cnt: PropTypes.number,
    // 코멘트
    comment_list: PropTypes.arrayOf({
      c_id: PropTypes.number,
      comment_content: PropTypes.string,
      comment_writer: PropTypes.string,
    }),
  }).isRequired,
};

export default Post;
