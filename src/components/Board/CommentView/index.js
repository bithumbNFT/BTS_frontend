import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ko';
import { REMOVE_COMMENT_REQUEST, LOAD_COMMENT_REQUEST } from 'reducers/post';
import { CommentForm, BoardBody } from './styles';

function CommentView({ post }) {
  const nowTime = moment().format('YYYY.MM.DD HH:mm');
  console.log(nowTime);

  const dispatch = useDispatch();
  const id = useSelector(state => state.userReducer.me?.id);
  const { removeCommentLoading, commentList } = useSelector(
    state => state.postReducer,
  );

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_COMMENT_REQUEST,
      data: post.id,
    });
  }, [id]);

  useEffect(() => {
    dispatch({
      type: LOAD_COMMENT_REQUEST,
    });
  }, [commentList]);

  return (
    <>
      <CommentForm>
        <div className="userTimeNum">
          <div className="left">
            <span className="name">{post.c_id}</span>
            <span className="date">{nowTime}</span>
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
