// import Post from 'components/Board/Post';
import Header from 'components/Common/Header';
import Intro from 'components/Board/Intro';
import { useDispatch, useSelector } from 'react-redux';
import {
  LOAD_POSTS_REQUEST,
  REMOVE_POST_REQUEST,
  loadPost,
} from 'reducers/post';
import CommentWrite from 'components/Board/CommentWrite';
import CommentView from 'components/Board/CommentView';
import React, { useEffect, useCallback } from 'react';
import moment from 'moment';
import { PostWrap, Title, CommentWrap } from './styles';
import 'moment/locale/ko';

const nowTime = moment().format('YYYY.MM.DD HH:mm');

function boardPost({ post, match }) {
  const dispatch = useDispatch();
  const id = useSelector(state => state.userReducer.me?.id);
  const { removePostLoading, mainPosts, singlePost } = useSelector(
    state => state.postReducer,
  );

  console.log('match', match.params.id);
  console.log('siglePost', singlePost);

  const getPostData = () => dispatch(loadPost(match.params.id));

  useEffect(() => {
    getPostData();
  }, [dispatch]);

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
    });
  }, []);

  return (
    <>
      <Header />
      {/* 인트로 view */}
      <Intro />

      {/* 게시글 view */}
      <PostWrap>
        <div className="boardHeader">
          <Title>{singlePost.title}</Title>
          <div className="align">
            <div className="userTimeNum">
              <span className="name">{singlePost.author}</span>
              <span className="date">{nowTime}</span>
              <span className="comment">
                {/* 댓글수 {post.comment_list.length} */}
              </span>
            </div>

            <div className="right">
              {id && post.User.id === id ? (
                <>
                  <button type="button">수정</button>
                  <button
                    type="button"
                    onClick={onRemovePost}
                    loading={removePostLoading}
                  >
                    삭제
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>

        <section className="boardBody">
          <p>{singlePost.content}</p>
        </section>
      </PostWrap>

      {/* 댓글 view */}
      <CommentWrap>
        <CommentWrite post={post} />

        {/* {mainPosts.map(item => (
          <CommentView key={post.item} post={post} />
        ))} */}
      </CommentWrap>
    </>
  );
}

export default boardPost;
