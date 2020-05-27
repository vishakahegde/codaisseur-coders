const initialState = {
  me: null, // the logged-in user
  accessToken: null,
};

//dummy reducer
export function AuthSliceReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
