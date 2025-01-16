import React from "react";
import PostCard from "../PostCard/PostCard";
import "./PostList.css";

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map((post, index) => (
                <PostCard 
                    post={post}
                />
            ))}
        </div>
    );
};

export default PostList;