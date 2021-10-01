import {
  all,
  fork,
  delay,
  put,
  takeLatest,
  call,
  throttle,
} from '@redux-saga/core/effects';
import axios from 'axios';
import shortId from 'shortid';

import {
  // 게시물 로드
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,

  // 게시물 작성
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,

  // 게시물 삭제
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,

  // 댓글 로드
  LOAD_COMMENT_REQUEST,
  LOAD_COMMENT_SUCCESS,
  LOAD_COMMENT_FAILURE,

  // 댓글 작성
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,

  // 댓글 삭제
  REMOVE_COMMENT_REQUEST,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_COMMENT_FAILURE,
} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function loadPostsAPI() {
  return axios.get('/board/board');
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action);
    console.log(result.data);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post('/board/post', data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    const id = shortId.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function removePostAPI(data) {
  return axios.delete('/board/post', data);
}

function* removePost(action) {
  try {
    const result = yield call(removePostAPI, action.data);
    yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function loadCommentAPI(lastId) {
  return axios.get(`/posts?lastId=${lastId || 0}`);
}

function* loadComment(action) {
  try {
    const result = yield call(loadCommentAPI, action.lastId);
    yield put({
      type: LOAD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function addCommentAPI(data) {
  return axios.post('/api/post/${data.postId}/comment', data);
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function removeCommentAPI(data) {
  return axios.delete('/board/post', data);
}

function* removeComment(action) {
  try {
    const result = yield call(removeCommentAPI, action.data);
    yield delay(1000);
    yield put({
      type: REMOVE_COMMENT_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_COMMENT_REQUEST,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadPosts() {
  yield throttle(2000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchLoadComment() {
  yield throttle(2000, LOAD_COMMENT_REQUEST, loadComment);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchRemoveComment() {
  yield takeLatest(REMOVE_COMMENT_REQUEST, removeComment);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchAddComment),
    fork(watchLoadPosts),
    fork(watchRemoveComment),
    fork(watchLoadComment),
  ]);
}
