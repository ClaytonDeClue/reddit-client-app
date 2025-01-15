import React from "react";
import "./PostCard.css";

const PostCard = ({ title, upvotes, image, username, time, comments }) => {
  return (
    <div className="post-card">
      <div className="post-votes">
        <button className="upvote" aria-label="Upvote">
          ⬆
        </button>
        <p className="vote-count">{upvotes}</p>
        <button className="downvote" aria-label="Downvote">
          ⬇
        </button>
      </div>
      <div className="post-content">
        <h2 className="post-title">{title}</h2>
        {image && <img src={image} alt={title} className="post-image" />}
        <p className="post-details">
          Posted by <span className="username">{username}</span> <span>{time}</span>
        </p>
        <p className="post-comments">{comments} comments</p>
      </div>
    </div>
  );
};

export default PostCard;
