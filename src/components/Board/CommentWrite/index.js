import React from 'react';
import { CommentWriteBox, Button } from './styles';

function CommentWrite() {
  return (
    <>
      <CommentWriteBox>
        <textarea placeholder="댓글을 입력해 주세요" />

        <Button type="submit">댓글달기</Button>
      </CommentWriteBox>
    </>
  );
}

export default CommentWrite;
