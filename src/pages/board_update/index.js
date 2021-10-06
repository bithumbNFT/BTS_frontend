/* eslint-disable no-constant-condition */
import React, { useEffect, useCallback, useRef } from 'react';
import Header from 'components/Common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_POST_REQUEST, loadPost } from 'reducers/post';
import Intro from 'components/Board/Intro';
import useInputs from 'hooks/useInput';
import { Form } from './styles';

function boardWrite({ history, match }) {
  const dispatch = useDispatch();
  const { singlePost } = useSelector(state => state.postReducer);
  const getPostData = () => dispatch(loadPost(match.params.id));
  const [state, onChangeInput] = useInputs({
    title: '' ? getPostData.title : '',
    content: '' ? getPostData.content : '',
  });
  const { title, content } = state;
  const inputTitle = useRef(null);
  const inputContent = useRef(null);

  useEffect(() => {
    getPostData();
  }, [match.params.id]);

  // 확인 버튼 클릭 시
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!title) {
        alert('제목을 입력해주세요.');
        inputTitle.current.focus();
      } else if (!content) {
        alert('내용물을 입력해주세요.');
        inputContent.current.focus();
      } else {
        getPostData.title = title;
        getPostData.content = content;
        dispatch({
          type: UPDATE_POST_REQUEST,
          data: {
            title,
            content,
          },
        });
        // history.push(`/board_post/${singlePost.p_id}`);
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
          value={title}
          name="title"
          ref={inputTitle}
          placeholder="제목을 입력해주세요. (80자 이내)"
          maxLength={80}
          onChange={onChangeInput}
        />
        <textarea
          placeholder="글 내용을 입력해주세요."
          onChange={onChangeInput}
          value={content}
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
