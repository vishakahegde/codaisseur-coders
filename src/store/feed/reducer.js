const initialState = {
  loading: false,
  posts: [],
};

export default function FeedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "startLoading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "postsFetched": {
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
