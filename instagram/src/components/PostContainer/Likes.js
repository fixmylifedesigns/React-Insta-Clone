import React, { Component } from "react";
 
import LikeLogo from "../images/like.png";
import CommentLogo from "../images/comment.png";

export default class Likes extends Component {
  constructor(props) {
      super(props);
      this.state = {
          likes: this.props.likes,
          likelogo: false
      };
  }

  toggleLike = () => {
      let likes = this.state.likes +1
      if (this.state.likelogo === true ) {
        likes = this.state.likes -1
      }
      this.setState({
          likes,
          likelogo: !this.state.likelogo
      })

  }


    render() {
    return (
      <div>
        <div className="logo">
          <img src={` ${this.state.likelogo ? { LikeLogo } : { CommentLogo } }`} 
          alt="" className="like" 
          onClick={this.toggleLike}
          
          />
          <img src={CommentLogo} alt="" className="comment" />
        </div>
        <p>
          <strong>{this.state.likes} likes </strong>
        </p>
      </div>
    );
  }
}
