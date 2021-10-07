import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ADD_COMMENT_REQUEST } from 'reducers/post';
import { CommentWriteBox, Button } from './styles';

function CommentWrite({ postId }) {
  const dispatch = useDispatch();
  const id = useSelector(state => state.userReducer.me?.id);
  const [comment, setComment] = useState('');
  // const { addCommentLoading } = useSelector(state => state.postReducer);
  const user = JSON.parse(localStorage.getItem('userInfo')).name;

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      setComment('');
      dispatch({
        type: ADD_COMMENT_REQUEST,
        data: { comment_writer: user, comment_content: comment, postId },
      });
    },
    [comment, id],
  );

  const onChangeContent = useCallback(e => {
    setComment(e.target.value);
  }, []);

  return (
    <form onSubmit={e => onSubmit(e)}>
      <CommentWriteBox>
        <input
          type="text"
          placeholder="댓글을 입력해 주세요"
          onChange={onChangeContent}
          value={comment}
        />

        <Button type="submit">
          입력
        </Button>
      </CommentWriteBox>
    </form>
  );
}

export default CommentWrite;
