import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_POST_REQUEST, REMOVE_COMMENT_REQUEST } from 'reducers/post';
import moment from 'moment';
import 'moment/locale/ko';
import { PostWrap, Title, CommentWrap, CommentForm, BoardBody } from './styles';
import CommentWrite from '../CommentWrite';
import CommentView from '../CommentView';

const nowTime = moment().format('YYYY.MM.DD HH:mm');
console.log(nowTime);

function Post({ post }) {
  const dispatch = useDispatch();
  // const id = useSelector(state => state.userReducer.me?.id);
  const id = JSON.parse(localStorage.getItem('userItem').name);
  const { removePostLoading, mainPosts } = useSelector(
    state => state.postReducer,
  );

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
              <span className="date">{nowTime}</span>
              <span className="comment">댓글수 {post.comment_list.length}</span>
            </div>

            <div className="right">
              {id && post.User.id === id ? (
                <>
                  <button type="button">수정</button>
                  <button
                    type="button"
                    onClick={onRemovePost}
                    loading={removePostLoading}
                  >
                    삭제
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>

        <section className="boardBody">
          <p>{post.content}</p>
        </section>
      </PostWrap>

      {/* 댓글 view */}
      <CommentWrap>
        <CommentWrite post={post} />

        {mainPosts.map(item => (
          <CommentView key={post.id} post={post} />
        ))}
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
