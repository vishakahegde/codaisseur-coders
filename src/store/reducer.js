// src/store/reducer.js
import { combineReducers } from "redux";
import FeedSliceReducer from "./feed/reducer";

const reducer = combineReducers({
  feed: FeedSliceReducer,
  // etc.
});

export default reducer;
