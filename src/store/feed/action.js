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
