import {
  all,
  fork,
  put,
  takeLatest,
  call,
  throttle,
  delay,
} from '@redux-saga/core/effects';
import { instance } from 'utils/axiosUtils';

import {
  // 게시물 로드 (여러개)
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,

  // 게시물 로드 (단일 게시물)
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,

  // 게시물 작성
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,

  // 게시물 수정
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,

  // 게시물 삭제
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,

  // 댓글 작성
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,

  // 댓글 삭제
  REMOVE_COMMENT_REQUEST,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_COMMENT_FAILURE,
} from '../reducers/post';

// 단일 게시물
function loadPostAPI(lastId) {
  // return axios.get('/board/board');
  return instance.get(`board/post/${lastId}`);
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.data);
    // yield delay(300);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

// 여러 게시물
function loadPostsAPI() {
  return instance.get('/board/board');
}

function* loadPosts() {
  try {
    const result = yield call(loadPostsAPI);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

// 게시물 작성
function addPostAPI(data) {
  const response = instance({
    url: '/board/write',
    method: 'post',
    data: {
      author: data.author,
      title: data.title,
      content: data.content,
    },
  });
  return response;
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

// 게시물 수정
function updatePostAPI(data) {
  const response = instance({
    url: `/board/post/${data.postId}`,
    method: 'put',
    data: {
      title: data.title,
      content: data.content,
    },
  });
  return response;
}

function* updatePost(action) {
  try {
    const result = yield call(updatePostAPI, action.data);
    yield put({
      type: UPDATE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPDATE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

// 게시물 삭제
function removePostAPI(id) {
  return instance.delete(`/board/post/${id}`);
}

function* removePost(action) {
  try {
    const result = yield call(removePostAPI, action.data);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function addCommentAPI(data) {
  return instance({
    url: `/board/post/${data.postId}`,
    method: 'post',
    data: {
      comment_writer: data.comment_writer,
      comment_content: data.comment_content,
    },
  });
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data.comment_list[result.data.comment_list.length - 1],
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function removeCommentAPI(data) {
  return instance({
    url: `/board/post/${data.postId}/delete_comment`,
    method: 'put',
    data: {
      c_id: data.comment.c_id,
      comment_writer: data.comment.comment_writer,
      comment_content: data.comment.comment_content,
      create_post_date: data.comment.create_post_date,
      modified_post_date: data.comment.modified_post_date,
    },
  });
}

function* removeComment(action) {
  try {
    yield call(removeCommentAPI, action.data);
    yield put({
      type: REMOVE_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchRemoveComment() {
  yield takeLatest(REMOVE_COMMENT_REQUEST, removeComment);
}

function* watchUpdatePost() {
  yield throttle(1000, UPDATE_POST_REQUEST, updatePost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchAddComment),
    fork(watchLoadPosts),
    fork(watchRemoveComment),
    fork(watchLoadPost),
    fork(watchUpdatePost),
  ]);
}
