import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ko';
import { REMOVE_COMMENT_REQUEST } from 'reducers/post';
import { CommentForm, BoardBody } from './styles';

function CommentView({ post }) {
  const dispatch = useDispatch();
  const id = useSelector(state => state.userReducer.me?.id);
  const { removeCommentLoading } = useSelector(state => state.postReducer);

  const onRemoveComment = useCallback(() => {
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
            <span className="name">{post.c_id}</span>
            <span className="date">
              {moment(post.createdAt).format('YYYY.MM.DD.')}
            </span>
          </div>

          <div className="right">
            {id && post.User.id === id ? (
              <>
                <button
                  type="button"
                  loading={removeCommentLoading}
                  onClick={onRemoveComment}
                >
                  삭제
                </button>
              </>
            ) : null}
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
  post: PropTypes.object.isRequired,
};

export default CommentView;
