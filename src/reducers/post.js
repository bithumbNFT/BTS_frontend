import shortId from 'shortid';

export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '이현주',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Comments: [
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: 'nero',
          },
          content: '우와우~',
        },
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: 'mero',
          },
          content: '뭬렁',
        },
      ],
    },
  ],

  // 게시물 작성
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

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

// 게시글 작성
export const ADD_POST_REQUEST = 'post/ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'post/ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'post/ADD_POST_FAILURE';

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

export const addPost = data => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

// 가짜 객체 생성
const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: '이현주',
  },
  Comments: [],
});

const dummyCommnet = data => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '이현주',
  },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //  게시물 추가
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };

    // ------------------------------------
    //  게시물 삭제
    case REMOVE_POST_REQUEST:
      return {
        ...state,
        removePostLoading: true,
        removePostDone: false,
        removePostError: null,
      };
    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        mainPosts: state.mainPosts.filter(v => v.id !== action.data),
        removePostLoading: false,
        removePostDone: true,
      };
    case REMOVE_POST_FAILURE:
      return {
        ...state,
        removePostLoading: false,
        removePostError: action.error,
      };

    // ------------------------------------
    //  댓글 작성
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };

    case ADD_COMMENT_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(
        v => v.id === action.data.postId,
      );
      const post = { ...state.mainPosts[postIndex] };
      post.Comments = [dummyCommnet(action.data.content), ...post.Comments];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = post;

      return {
        ...state,
        mainPosts,
        addPostLoading: false,
        addPostDone: true,
      };
    }

    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };

    case REMOVE_COMMENT_REQUEST:
      return {
        ...state,
        removeCommentLoading: true,
        removeCommentDone: false,
        removeCommentError: null,
      };

    case REMOVE_COMMENT_SUCCESS:
      // 📍 작성 마저하기 filter 처리
      return {
        ...state,
        removeCommentLoading: false,
        removeCommentDone: false,
      };

    case REMOVE_COMMENT_FAILURE:
      return {
        ...state,
        removeCommentLoading: false,
        removeCommentError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
