// src/store/reducer.js
import { combineReducers } from "redux";
import FeedSliceReducer from "./feed/reducer";
import { PostPageSliceReducer } from "./postPage/reducer";
import { AuthSliceReducer } from "./auth/reducer";

const reducer = combineReducers({
  feed: FeedSliceReducer,
  postPage: PostPageSliceReducer,
  auth: AuthSliceReducer,
  // etc.
});

export default reducer;
