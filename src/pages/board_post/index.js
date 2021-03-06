/* eslint-disable operator-linebreak */
import Header from 'components/Common/Header';
import Intro from 'components/Board/Intro';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { REMOVE_POST_REQUEST, loadPost, clearPost } from 'reducers/post';

import CommentWrite from 'components/Board/CommentWrite';
import CommentView from 'components/Board/CommentView';
import React, { useEffect, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { PostWrap, Title, CommentWrap } from './styles';

function boardPost({ match }) {
  const dispatch = useDispatch();
  const id = JSON.parse(localStorage.getItem('userInfo')).name;
  const history = useHistory();
  const { removePostLoading, singlePost, loadPostLoading, commentList, loadPostDone } =
    useSelector(state => ({
      loadPostLoading: state.postReducer.loadPostLoading,
      removePostLoading: state.postReducer.removePostLoading,
      singlePost: state.postReducer.singlePost,
      commentList: state.postReducer.singlePost?.comment_list,
      loadPostDone: state.postReducer.loadPostDone,
    }));

  const getPostData = () => dispatch(loadPost(match.params.id));

  // match.param.id 가 변할 때 getPostData() 실행
  useEffect(() => {
    getPostData();
    // return () => {
    //   dispatch(clearPost());
    // };
  }, [match.params.id, dispatch]);

  const onRemovePost = useCallback(postId => {
    if (window.confirm('정말 삭제하시겠습니까 ?')) {
      dispatch({
        type: REMOVE_POST_REQUEST,
        data: postId,
      });
      history.push('/board');
      alert('삭제가 완료 되었습니다.');
    } else {
      return null;
    }
  }, []);
  // [TODO] post 로드 시 끊기는 느낌 존재
  // if (loadPostLoading) return <div>로딩중...</div>;

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <>
      <Header />
      {/* 인트로 view */}
      {!loadPostDone ? (
        <Spin indicator={antIcon} />
      ) : (
        <>
          <Intro />

          {/* 게시글 view */}
          <PostWrap>
            <div className="boardHeader">
              <Title>{singlePost.title}</Title>
              <div className="align">
                <div className="userTimeNum">
                  <span className="name">{singlePost.author}</span>
                  <span className="date">
                    {(singlePost.create_post_date || '')
                      .split('T')
                      .splice(0, 1)}
                  </span>
                  <span className="comment">
                    댓글수 {(singlePost.comment_list || '').length}
                  </span>
                </div>

                <div className="right">
                  {id && singlePost.author === id ? (
                    <>
                      <Link
                        to={`/board_update/${singlePost.p_id}`}
                        className="update"
                      >
                        수정
                      </Link>
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
        </>
      )}

      {/* 댓글 view */}
      <CommentWrap>
        <CommentWrite postId={match.params.id} />

        {commentList
          ?.slice(0)
          .reverse()
          .map(comment => (
            <CommentView
              key={comment.c_id}
              comment={comment}
              postId={match.params.id}
            />
          ))}
      </CommentWrap>
    </>
  );
}

export default boardPost;
