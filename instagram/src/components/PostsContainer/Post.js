import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
// import Loader from "../images/loading.gif";

import styled from "styled-components";

const PostBorder = styled.div`
border: 1px solid #d3d3d3;
margin: 15px 0;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
border-radius: 1%;
`
const PostImageWrapper = styled.div`
height: 100%;
width: 100%;
`
const PostImage = styled.img`
width: 100%;
`

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
    console.log('postProps', this.props.post)
    // if (this.props.post.length === 0) {
    //   return <img src={Loader} className="loader" alt="loading" />;
    // }
    return (
      <PostBorder>
        {/* <img src={Loader} className="loader" alt="loading" /> */}
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <PostImageWrapper>
          <PostImage
            alt="post thumbnail"
            src={this.props.post.imageUrl}
          />
        </PostImageWrapper>
        <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
          id={this.state.id}
        />
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
      </PostBorder>
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
