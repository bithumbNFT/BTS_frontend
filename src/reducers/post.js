import shortId from 'shortid';
import produce from 'immer';
import faker from 'faker';

export const initialState = {
  // 👉 더미데이터
  board: [
    {
      // 📝 게시글 부분
      author: faker.name.firstName(),
      content: faker.lorem.paragraph(),
      p_id: shortId.generate(),
      title: faker.lorem.paragraph(),
      view_cnt: 0,
    },
  ],

  // 📝 댓글 부분
  commentList: [
    {
      c_id: shortId.generate(),
      comment_content: faker.lorem.paragraph(),
      comment_writer: faker.lorem.paragraph(),
    },
  ],

  mainPosts: [],
  // 👉 초기상태 정의
  // 게시물 로드
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,

  // 게시물 작성
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  // 게시물 삭제
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,

  // 댓글 로드
  loadCommentLoading: false,
  loadCommentDone: false,
  loadCommentError: null,

  // 댓글 작성
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,

  // 댓글 삭제
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,
};

// 게시물 로드
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

// 게시글 작성
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

// 게시물 삭제
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

// 댓글 로드
export const LOAD_COMMENT_REQUEST = 'LOAD_COMMENT_REQUEST';
export const LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS';
export const LOAD_COMMENT_FAILURE = 'LOAD_COMMENT_FAILURE';

// 댓글 작성
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// 댓글 삭제
export const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
export const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';

export const addPost = data => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyBoard = data => ({
  author: data.author,
  content: data.content,
  p_id: data.p_id,
  title: data.title,
  view_cnt: data.view_cnt,
});

const dummyComment = data => ({
  c_id: shortId.generate(),
  comment_content: data.comment_content,
  comment_writer: data.comment_writer,
});

const postReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // 게시물 로드
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS: {
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.board = draft.board.concat(action.data);
        break;
      }

      case LOAD_POSTS_FAILURE: {
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      }

      //  게시물 추가
      case ADD_POST_REQUEST: {
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      }
      case ADD_POST_SUCCESS: {
        draft.board.unshift(dummyBoard(action.data));
        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;
      }
      case ADD_POST_FAILURE: {
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      }

      // ------------------------------------
      //  게시물 삭제
      case REMOVE_POST_REQUEST: {
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      }
      case REMOVE_POST_SUCCESS: {
        draft.board = draft.board.filter(v => v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      }

      case REMOVE_POST_FAILURE: {
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      }

      // ------------------------------------
      // 댓글 로드
      case LOAD_COMMENT_REQUEST:
        draft.loadCommentLoading = true;
        draft.loadCommentDone = false;
        draft.loadCommentError = null;
        break;

      case LOAD_COMMENT_SUCCESS: {
        draft.loadCommentLoading = false;
        draft.loadCommentDone = true;
        draft.board = draft.board.concat(action.data);
        break;
      }

      case LOAD_COMMENT_FAILURE: {
        draft.loadCommentLoading = false;
        draft.loadCommentError = action.error;
        break;
      }

      //  댓글 작성
      case ADD_COMMENT_REQUEST: {
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      }

      case ADD_COMMENT_SUCCESS: {
        const post = draft.commentList.find(v => v.id === action.data.c_id);
        post.commentList.unshift(dummyComment(action.data.commentList));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }

      case ADD_COMMENT_FAILURE: {
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      }

      // ------------------------------------
      //  댓글 삭제
      case REMOVE_COMMENT_REQUEST: {
        draft.removeCommentLoading = true;
        draft.removeCommentDone = false;
        draft.removeCommentError = null;
        break;
      }

      case REMOVE_COMMENT_SUCCESS: {
        draft.board = draft.board.filter(v => v.id !== action.data);
        draft.removeCommentLoading = false;
        draft.removeCommentDone = null;
        break;
      }

      case REMOVE_COMMENT_FAILURE: {
        draft.removeCommentLoading = false;
        draft.removeCommentError = action.error;
        break;
      }
      default:
        break;
    }
  });

export default postReducer;
