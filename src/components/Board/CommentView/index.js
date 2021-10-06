import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeComment, singPosts } from 'reducers/post';
import { CommentForm, BoardBody } from './styles';

function CommentView({ comment, postId }) {
  const dispatch = useDispatch();
  // [TODO] 작성자 어떤걸로 구별할건지 api 확인 후 수정
  const id = JSON.parse(localStorage.getItem('userInfo')).name;

  const handleRemoveComment = useCallback(() => {
    console.log(`p_id ----> ${postId}`);
    dispatch(removeComment(postId, comment));
    alert('댓글을 삭제하셨습니다.');
  });

  return (
    <>
      <CommentForm>
        <div className="userTimeNum">
          <div className="left">
            <span className="name">{comment.comment_writer}</span>
            {/* 날짜 */}
            <span className="date">
              {(comment.create_post_date || '').split('T').splice(0, 1)}
            </span>
          </div>
          {/* [TODO] comment user 변경 */}
          <div className="right">
            {id && comment.comment_writer === id ? (
              <>
                <button
                  type="button"
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
