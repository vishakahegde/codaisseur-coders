const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export function PostPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
