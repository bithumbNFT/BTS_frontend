import produce from 'immer';

// 👉 초기상태 정의
export const initialState = {
  mainPosts: [],
  singlePost: {},

  // 게시물 로드 (여러개)
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,

  // 게시물 로드 (단일)
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,

  // 게시물 작성
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  // 게시물 수정
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,

  // 게시물 삭제
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,

  // 댓글 작성
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,

  // 댓글 삭제
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,
};

// 게시물 로드 (여러개)
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

// 게시물 로드 (단일 포스트)
export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

// 게시글 작성
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

// 게시글 수정
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

// 게시물 삭제
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

// 댓글 작성
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// 댓글 삭제
export const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
export const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';

// 게시글 내용 비우기
export const CLEAR_POST = 'CLEAR_POST';

export const addPost = data => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

export const loadPosts = () => ({
  type: LOAD_POSTS_REQUEST,
});

export const loadPost = data => ({
  type: LOAD_POST_REQUEST,
  data,
});

export const removeComment = (postId, comment) => ({
  type: REMOVE_COMMENT_REQUEST,
  data: {
    postId,
    comment,
  },
});

export const clearPost = () => ({
  type: CLEAR_POST,
});

const postReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // 커뮤니티 전체 게시물 목록 로드
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_POSTS_SUCCESS:
        console.log('action on load posts', action);
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data;
        break;
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;
      case UPDATE_POST_SUCCESS: {
        draft.updatePostLoading = true;
        draft.updatePostDone = true;
        draft.singlePost.find(v => v.id === action.data.PostId).content = action.data.content;
        break;
      }
      case UPDATE_POST_FAILURE:
        draft.updatePostLoading = false;
        draft.updatePostError = true;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(
          v => v.id !== action.data.PostId,
        );
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS: {
        // draft.singlePost.comment_list.unshift(action.data);
        draft.singlePost.comment_list = [
          ...draft.singlePost.comment_list,
          action.data,
        ];
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      case REMOVE_COMMENT_REQUEST:
        draft.removeCommentLoading = true;
        draft.removeCommentDone = false;
        draft.removeCommentError = null;
        break;
      case REMOVE_COMMENT_SUCCESS:
        draft.singlePost.comment_list = draft.singlePost.comment_list.filter(
          v => v.id !== action.data.PostId,
        );
        draft.removeCommentLoading = false;
        draft.removeCommentDone = true;
        break;
      case REMOVE_COMMENT_FAILURE:
        draft.removeCommentLoading = false;
        draft.removeCommentError = action.error;
        break;
      case CLEAR_POST:
        draft.singlePost = {};
        break;
      default:
        break;
    }
  });

export default postReducer;
