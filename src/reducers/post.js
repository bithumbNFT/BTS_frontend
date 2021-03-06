/* eslint-disable operator-linebreak */
import produce from 'immer';

// π μ΄κΈ°μν μ μ
export const initialState = {
  mainPosts: [],
  singlePost: {},
  updatePost: {},

  // κ²μλ¬Ό λ‘λ (μ¬λ¬κ°)
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,

  // κ²μλ¬Ό λ‘λ (λ¨μΌ)
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,

  // κ²μλ¬Ό μμ±
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  // κ²μλ¬Ό μμ 
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,

  // κ²μλ¬Ό μ­μ 
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,

  // λκΈ μμ±
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,

  // λκΈ μ­μ 
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,
};

// κ²μλ¬Ό λ‘λ (μ¬λ¬κ°)
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

// κ²μλ¬Ό λ‘λ (λ¨μΌ ν¬μ€νΈ)
export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

// κ²μκΈ μμ±
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

// κ²μκΈ μμ 
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

// κ²μλ¬Ό μ­μ 
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

// λκΈ μμ±
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// λκΈ μ­μ 
export const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
export const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';

// κ²μκΈ λ΄μ© λΉμ°κΈ°
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

export const updatePost = (postId, title, content) => ({
  type: UPDATE_POST_REQUEST,
  data: {
    postId,
    title,
    content,
  },
});

export const clearPost = () => ({
  type: CLEAR_POST,
});

const postReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // μ»€λ?€λν° μ μ²΄ κ²μλ¬Ό λͺ©λ‘ λ‘λ
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_POSTS_SUCCESS:
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
        draft.singlePost = action.data;
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
        draft.singlePost.comment_list = draft.singlePost.comment_list?.filter(
          v => v.c_id !== action.data.comment.c_id,
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
