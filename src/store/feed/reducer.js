const initialState = {
  loading: false,
  posts: [],
};

export default function FeedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "feed/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "feed/postsFetched": {
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
