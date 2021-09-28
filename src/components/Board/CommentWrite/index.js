import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import useInput from 'hooks/useInput';
import { ADD_COMMENT_REQUEST } from 'reducers/post';
import { CommentWriteBox, Button } from './styles';

function CommentWrite({ post }) {
  const dispatch = useDispatch();

  const id = useSelector(state => state.userReducer.me?.id);
  const { addCommentDone, addCommentLoading } = useSelector(
    state => state.postReducer,
  );
  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  useEffect(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);

  const onSubmitComment = useCallback(
    e => {
      e.preventDefault();
      dispatch({
        type: ADD_COMMENT_REQUEST,
        data: { comment_content: commentText },
      });
    },
    [commentText, id],
  );

  return (
    <form onSubmit={onSubmitComment}>
      <CommentWriteBox>
        <textarea
          placeholder="댓글을 입력해 주세요"
          onChange={onChangeCommentText}
          value={commentText}
        />

        <Button type="submit" loading={addCommentLoading}>
          댓글달기
        </Button>
      </CommentWriteBox>
    </form>
  );
}

export default CommentWrite;

CommentWrite.propTypes = {
  board: PropTypes.shape({
    comment_list: PropTypes.arrayOf({
      c_id: PropTypes.number,
      comment_content: PropTypes.string,
      comment_writer: PropTypes.string,
    }),
  }).isRequired,
};
