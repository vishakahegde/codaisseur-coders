import React from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Post Page</h1>
      <h2>{id}</h2>
    </div>
  );
}
