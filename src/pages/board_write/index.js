import React, { useEffect, useCallback } from 'react';
import Header from 'components/Common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST } from 'reducers/post';
import useInput from 'hooks/useInput';
import Intro from 'components/Board/Intro';
import { Form } from './styles';

function boardPost() {
  const dispatch = useDispatch();
  const [text, onChangeText, setText] = useInput('');
  const { addPostDone } = useSelector(state => state.postReducer);

  useEffect(() => {
    if (addPostDone) {
      setText('');
      console.log(setText);
    }
  }, [addPostDone]);

  const onSubmit = useCallback(
    async e => {
      e.preventDefault();
      dispatch({
        type: ADD_POST_REQUEST,
        text,
      });
    },
    [text],
  );

  return (
    <>
      <Header />
      {/* 인트로 view */}
      <Intro />

      <Form onSubmit={onSubmit}>
        <h1>글작성</h1>
        <input
          type="text"
          placeholder="제목을 입력해주세요. (80자 이내)"
          maxLength="80"
        />
        <textarea
          placeholder="글 내용을 입력해주세요."
          onChange={onChangeText}
        />

        <div className="buttons">
          <button type="submit">확인</button>
        </div>
      </Form>
    </>
  );
}

export default boardPost;
