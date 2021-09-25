import Post from 'components/Board/Post';
import Header from 'components/Common/Header';
import Intro from 'components/Board/Intro';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_POSTS_REQUEST } from 'reducers/post';
import React, { useEffect } from 'react';

function boardPost() {
  const dispatch = useDispatch();
  const { board } = useSelector(state => state.postReducer);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, [board]);

  return (
    <>
      <Header />
      {/* 인트로 view */}
      <Intro />

      {board.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default boardPost;
