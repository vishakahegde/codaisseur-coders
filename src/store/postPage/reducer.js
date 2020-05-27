const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export function PostPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "postpage/loading": {
      return {
        ...state,
        loading: true,
      };
    }
    // /return {
    //   type: "postPage/postFullyFetched",
    //   payload: data,
    // };
    case "postPage/postFullyFetched": {
      return {
        ...state,
        loading: false,
        post: action.payload.post,
        comments: action.payload.comments,
      };
    }

    default: {
      return state;
    }
  }
}
