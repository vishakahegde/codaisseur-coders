import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../store/postPage/actions";
import { useDispatch } from "react-redux";

export default function PostPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);
  return (
    <div>
      <h1>Post Page</h1>
      <h2>{id}</h2>
    </div>
  );
}
