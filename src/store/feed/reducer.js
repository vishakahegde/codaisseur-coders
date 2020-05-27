const initialState = {
  loading: true,
  posts: [],
};

export default function FeedSliceReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
