import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../store/postPage/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectPostAndComments } from "../store/postPage/selectors";

import ReactMarkdown from "react-markdown";

export default function PostPage() {
  const { id } = useParams();
  const postData = useSelector(selectPostAndComments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Post Page</h1>
      {!postData ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{postData.post.title}</h1>
          <p className="meta">TODO</p>

          <ReactMarkdown source={postData.post.content} />

          <h2>Comments</h2>
          <p>TODO</p>
        </>
      )}
    </div>
  );
}
