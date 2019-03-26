import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";

import LikeLogo from "../images/like.png";
import CommentLogo from "../images/comment.png";

function PostContainer(props) {
  console.log(props);
  return (
    <>
      {props.post.map(post => (
        <div key={post.id} className="post">
          <div className="postie">
            <img src={post.thumbnailUrl} alt=" " className="thumbNail" />
            <h3 className="username bold">
              <strong>{post.username}</strong>
            </h3>
          </div>

          <img src={post.imageUrl} alt=" " className="photo" />

          <div className="bottom-info">
            <div className="logo">
              <img src={LikeLogo} alt="" className="like" />
              <img src={CommentLogo} alt="" className="comment" />
            </div>
            <p>
              {" "}
              <strong>{post.likes} likes </strong>
            </p>

            {post.comments &&
              post.comments.map(event => (
                <div key={event.id} className="comment-section">
                  <p className="comments">
                    <strong className="username">{event.username}</strong> 
                    {event.text}
                  </p>
                </div>
              ))}

            <p className="timestamp">{post.timestamp}</p>
          </div>

          <CommentSection />
        </div>
      ))}
    </>
  );
}

PostContainer.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  )
};

export default PostContainer;
