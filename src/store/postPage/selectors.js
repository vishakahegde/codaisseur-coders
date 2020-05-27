export function selectPostAndComments(reduxState) {
  return reduxState.postPage.loading
    ? null
    : {
        posts: reduxState.postPage.post,
        comments: reduxState.postPage.comments,
      };
}
