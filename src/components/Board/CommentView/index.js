import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ko';
import { REMOVE_COMMENT_REQUEST, removeComment } from 'reducers/post';
import { CommentForm, BoardBody } from './styles';

function CommentView({ comment }) {
  const dispatch = useDispatch();
  // [TODO] 작성자 어떤걸로 구별할건지 api 확인 후 수정
  const id = JSON.parse(localStorage.getItem('userInfo')).name;
  const { removeCommentLoading } = useSelector(state => state.postReducer);

  const handleRemoveComment = useCallback(() => {
    dispatch(removeComment(comment.c_id));
  });
  // const onRemoveComment = useCallback(() => {
  //   dispatch({
  //     type: REMOVE_COMMENT_REQUEST,
  //     data: comment.c_id,
  //   });
  // }, [id]);

  return (
    <>
      <CommentForm>
        <div className="userTimeNum">
          <div className="left">
            <span className="name">{comment.comment_writer}</span>
            <span className="date">
              {moment(comment.createdAt).format('YYYY.MM.DD.')}
            </span>
          </div>
          {/* [TODO] comment user 변경 */}
          <div className="right">
            {id && comment.comment_writer === id ? (
              <>
                <button
                  type="button"
                  loading={removeCommentLoading}
                  onClick={() => handleRemoveComment(comment.c_id)}
                >
                  삭제
                </button>
              </>
            ) : null}
          </div>
        </div>

        <BoardBody>
          <p>{comment.comment_content}</p>
        </BoardBody>
      </CommentForm>
    </>
  );
}
CommentView.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentView;
