// src/store/reducer.js
import { combineReducers } from "redux";
import FeedSliceReducer from "./feed/reducer";
import { PostPageSliceReducer } from "./postPage/reducer";

const reducer = combineReducers({
  feed: FeedSliceReducer,
  postPage: PostPageSliceReducer,
  // etc.
});

export default reducer;
