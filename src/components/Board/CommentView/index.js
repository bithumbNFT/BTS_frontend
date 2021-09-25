import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { REMOVE_COMMENT_REQUEST } from 'reducers/post';
import { CommentForm, BoardBody } from './styles';

moment.locale('ko');
console.log(moment);
function CommentView({ post }) {
  const dispatch = useDispatch();
  const id = useSelector(state => state.userReducer.me?.id);
  const { removeCommentLoading } = useSelector(state => state.postReducer);

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_COMMENT_REQUEST,
      data: post.id,
    });
  }, [id]);

  return (
    <>
      <CommentForm>
        <div className="userTimeNum">
          <div className="left">
            <span className="name">작성자{post.comment_writer}</span>
            <span className="date">
              {moment(post.createdAt, 'YYYYMMDD').fromNow()}
            </span>
          </div>

          <div className="right">
            <button
              type="button"
              loading={removeCommentLoading}
              onClick={onRemovePost}
            >
              삭제
            </button>
          </div>
        </div>

        <BoardBody>
          <p>{post.comment_content}</p>
        </BoardBody>
      </CommentForm>
    </>
  );
}

CommentView.propTypes = {
  board: PropTypes.shape({}).isRequired,
};

export default CommentView;
