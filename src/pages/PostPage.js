import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../store/postPage/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectPostAndComments } from "../store/postPage/selectors";

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
      <h2>{id}</h2>
      {!postData ? <h3>Loading...</h3> : <h3>Done!</h3>}
    </div>
  );
}
