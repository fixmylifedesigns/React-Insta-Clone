import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
// import Loader from "../images/loading.gif";

import "./Posts.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes,
      id: false
    };
  }
  incrementLike = () => {
    let likes = this.state.likes + 1;
    if (this.state.id === true) {
      likes = this.state.likes - 1;
    
    }
    this.setState({ likes, id: !this.state.id });
  };

  render(props) {
    // if (this.props.posts.length === 0) {
    //   return <img src={Loader} className="loader" alt="loading" />;
    // }
    return (
      <div className="post-border">
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className="post-image-wrapper">
          <img
            alt="post thumbnail"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        </div>
        <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
          id={this.state.id}
        />
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;
