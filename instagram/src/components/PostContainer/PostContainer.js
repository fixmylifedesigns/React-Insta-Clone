import React from "react";
import PropTypes from "prop-types";

function PostContainer(props) {
  console.log(props);
  return (
    <>
      {props.post.map(post => (
        <div key={post.id} className="post">
          <div className="">
            <img src={post.thumbnailUrl} alt=" " />
            <h3>{post.username}</h3>
          </div>
          <img src={post.imageUrl} alt=" " />
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
