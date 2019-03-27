import React from 'react';
import './Posts.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <strong>{props.username}</strong>
    </div>
  );
};

export default PostHeader;
