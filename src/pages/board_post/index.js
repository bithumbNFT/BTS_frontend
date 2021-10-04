// import Post from 'components/Board/Post';
import Header from 'components/Common/Header';
import Intro from 'components/Board/Intro';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  LOAD_POSTS_REQUEST,
  REMOVE_POST_REQUEST,
  loadPost,
  clearPost,
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
  // const id = useSelector(state => state.userReducer.me?.id);
  const id = JSON.parse(localStorage.getItem('userInfo')).name;
  const { loadPostLoading, removePostLoading, singlePost, commentList } = useSelector(state => ({
      loadPostLoading: state.postReducer.loadPostLoading,
      removePostLoading: state.postReducer.removePostLoading,
      singlePost: state.postReducer.singlePost,
      commentList: state.postReducer.singlePost?.comment_list,
    }));

  const getPostData = () => dispatch(loadPost(match.params.id));

  // match.param.id 가 변할 때 getPostData() 실행
  useEffect(() => {
    getPostData();
    return () => {
      dispatch(clearPost());
    };
  }, [match.params.id, dispatch]);

  const onRemovePost = useCallback(postId => {
    if (window.confirm('정말 삭제하시겠습니까 ?')) {
      dispatch({
        type: REMOVE_POST_REQUEST,
        data: postId,
      });
    } else {
      return null;
    }
  }, []);
  // [TODO] post 로드 시 끊기는 느낌 존재
  // if (loadPostLoading) return <div>로딩중...</div>;
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
              {id && singlePost.author === id ? (
                <>
                  <button type="button">수정</button>
                  <button
                    type="button"
                    onClick={() => onRemovePost(singlePost.p_id)}
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
        <CommentWrite postId={match.params.id} />

        {commentList
          ?.slice(0)
          .reverse()
          .map(comment => (
            <CommentView key={comment.c_id} comment={comment} />
          ))}
      </CommentWrap>
    </>
  );
}

export default boardPost;
