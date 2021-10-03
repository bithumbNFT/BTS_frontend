import React, { useEffect, useCallback, useRef } from 'react';
import Header from 'components/Common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST } from 'reducers/post';
import Intro from 'components/Board/Intro';
import useInputs from 'hooks/useInput';
import { Form } from './styles';

function boardWrite({ history }) {
  const dispatch = useDispatch();
  const { addPostDone } = useSelector(state => state.postReducer);
  const [state, onChangeInput] = useInputs({ title: '', content: '' });
  const { title, content } = state;
  const inputTitle = useRef(null);
  const inputContent = useRef(null);

  useEffect(() => {
    if (addPostDone) {
      title('');
      content('');
      console.log(title, content);
    }
  }, [addPostDone]);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      alert(`자기소개: ${title}, 기술스택: ${content}`);

      if (!title) {
        alert('제목을 입력해주세요.');
        inputTitle.current.focus();
      } else if (!content) {
        alert('내용물을 입력해주세요.');
        inputContent.current.focus();
      } else {
        const formData = new FormData();
        formData.append('author', JSON.parse(localStorage.getItem('userInfo')).name);
        formData.append('title', title);
        formData.append('content', content);
        const author = JSON.parse(localStorage.getItem('userInfo')).name;
        dispatch({
          type: ADD_POST_REQUEST,
          data: {
            author,
            title,
            content,
          },
        });
        history.push('/board');
      }
    },
    [title, content],
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
          defaultValue={title}
          name="title"
          ref={inputTitle}
          placeholder="제목을 입력해주세요. (80자 이내)"
          maxLength={80}
          onChange={onChangeInput}
        />
        <textarea
          placeholder="글 내용을 입력해주세요."
          onChange={onChangeInput}
          defaultValue={content}
          ref={inputContent}
          name="content"
        />

        <div className="buttons">
          <button type="submit">확인</button>
        </div>
      </Form>
    </>
  );
}

export default boardWrite;
