import axios from "axios";
import { API_URL } from "../../config";

export function startLoading() {
  return {
    type: "feed/startLoading",
  };
}

export function postsFetched(morePosts) {
  return {
    type: "feed/postsFetched",
    payload: morePosts,
  };
}

export async function fetchNext5Posts(dispatch, getState) {
  //Trigger action for start loading
  dispatch(startLoading());

  const offset = getState().feed.posts.length;

  const response = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`);

  const morePosts = response.data.rows;

  // trigger postsFetched action to save data
  dispatch(postsFetched(morePosts));
}
