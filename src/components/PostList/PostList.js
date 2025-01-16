import React from "react";
import PostCard from "../PostCard/PostCard";
import "./PostList.css";

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map((post, index) => (
                <PostCard 
                    key={index}
                    title={post.title}
                    upvotes={post.upvotes}
                    image={post.image}
                    username={post.username}
                    time={post.time}
                    comments={post.comments}
                />
            ))}
        </div>
    );
};

export default PostList;