// src/components/PostsFeed.js
import React, { useEffect } from "react";
import moment from "moment";

import "./PostsFeed.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selector";
import { fetchNext5Posts } from "../store/feed/action";

export default function PostsFeed() {
  //create dispatch menthod
  const dispatch = useDispatch();

  //get the data from selectors
  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      {/* TODO: render the list of posts */}
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p className="meta">
              {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
              {/* {post.post_likes.length} likes &bull;{" "} */}
              <span className="tags">
                {post.tags.map((tag) => {
                  return (
                    <React.Fragment key={tag.id}>
                      <span className="Tag">{tag.tag}</span>{" "}
                    </React.Fragment>
                  );
                })}
              </span>
            </p>
          </div>
        );
      })}

      {/* TODO: show a loading indicator when the posts are loading,
        or else a button to load more posts if not */}
      <p>
        {loading ? (
          <em>Loading...</em>
        ) : (
          <button onClick={() => dispatch(fetchNext5Posts)}>Load more</button>
        )}
      </p>
    </div>
  );
}
