import React from "react";
import PostCard from "../PostCard/PostCard";
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
        <PostCard
          key={post.id}
          post={post}
          onToggleComments={onToggleComments(index)}
        />
      ))}
    </>
  );
};

export default PostList;
