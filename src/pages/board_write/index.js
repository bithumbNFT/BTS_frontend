import React from 'react';
import Header from 'components/Common/Header';
import Intro from 'components/Board/Intro';
import { Form } from './styles';

function boardPost() {
  return (
    <>
      <Header />
      {/* 인트로 view */}
      <Intro />

      <Form>
        <h1>글작성</h1>
        <input type="text" placeholder="제목을 입력해주세요." />
        <textarea placeholder="글 내용을 입력해주세요." />

        <div className="buttons">
          <button type="submit">확인</button>
        </div>
      </Form>
    </>
  );
}

export default boardPost;
