// src/store/reducer.js
import { combineReducers } from "redux";
import FeedSliceReducer from "./feed/reducer";
import { PostPageSliceReducer } from "./postPage/reducer";
import { AuthSliceReducer } from "./auth/reducer";

//add auth slice
const reducer = combineReducers({
  feed: FeedSliceReducer,
  postPage: PostPageSliceReducer,
  auth: AuthSliceReducer,
  // etc.
});

export default reducer;
