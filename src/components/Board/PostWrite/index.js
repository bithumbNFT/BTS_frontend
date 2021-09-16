import React from 'react';
import { WriteBg, Form } from './styles';

function PostWrite(props) {
  const { open, onClose } = props;

  return (
    <>
      {open ? (
        <WriteBg>
          <Form>
            <input type="text" placeholder="제목을 입력해주세요." />
            <textarea placeholder="글 내용을 입력해주세요." />

            <div className="buttons">
              <button type="button" onClick={onClose}>
                취소
              </button>
              <button type="submit">확인</button>
            </div>
          </Form>
        </WriteBg>
      ) : null}
    </>
  );
}

export default PostWrite;
