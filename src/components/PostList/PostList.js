import React from "react";
import Post from "../Post/Post";
import "./PostList.css";

const PostList = ({ posts }) => {
  const onToggleComments = (index) => {
    // const getComments = (permalink) => {
    //   dispatch(fetchComments(index, permalink));
    // };

    // return getComments;
  };


  return (
    <>
      {posts.map((post, index) => (
        <Post
          key={post.id}
          post={post}
          onToggleComments={onToggleComments(index)}
        />
      ))}
    </>
  );
};

export default PostList;
