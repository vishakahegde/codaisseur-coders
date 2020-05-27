import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function startLoading() {
  return {
    type: "startLoading",
  };
}

export function postsFetched(morePosts) {
  return {
    type: "postsFetched",
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
