import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ADD_COMMENT_REQUEST } from 'reducers/post';
import { CommentWriteBox, Button } from './styles';

function CommentWrite({ post }) {
  const dispatch = useDispatch();
  const id = useSelector(state => state.userReducer.me?.id);
  const [comment, setComment] = useState('');
  const { addCommentLoading } = useSelector(state => state.postReducer);

  const onSubmit = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { comment_writer: post.id, comment_content: comment, c_id: id },
    });
  }, [comment, id]);

  const onChangeContent = useCallback(e => {
    setComment(e.target.value);
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <CommentWriteBox>
        <textarea
          placeholder="댓글을 입력해 주세요"
          onChange={onChangeContent}
          defaultValue={comment}
        />

        <Button type="submit" loading={addCommentLoading}>
          댓글달기
        </Button>
      </CommentWriteBox>
    </form>
  );
}

export default CommentWrite;
