import React, { Component } from "react";
import PropTypes from "prop-types";
// import CommentSection from "../CommentSection/CommentSection";
import Loader from "../images/loading.gif";
import Likes from "./Likes";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: ""
    };
  }

  sumbit = event => {
    event.preventDefault();
    const updatedComments = this.state.comments.slice();
    const newComment = {
      id: Date.now(),
      username: "duranfixed",
      text: this.state.newComment
    };
    updatedComments.push(newComment);
    this.setState({ comments: updatedComments });
  };

  handleChanges = event => {
    event.preventDefault();
    this.setState({ newComment: event.target.value });
  };

  // console.log(props);
  render() {
    if (this.props.post.length === 0) {
      return <img src={Loader} className="loader" alt="loading" />;
    }

    return (
      <>
        {this.props.post.map(post => (
          <div key={post.id} className="post">
            <div className="postie">
              <img src={post.thumbnailUrl} alt=" " className="thumbNail" />
              <h3 className="username bold">
                <strong>{post.username}</strong>
              </h3>
            </div>

            <img src={post.imageUrl} alt=" " className="photo" />

            <div className="bottom-info">
              {/* like and comment logo */}
              <Likes likes={post.likes}/>
              {/* comments */}
              {post.comments &&
                post.comments.map(event => (
                  <div key={event.id} className="comment-section">
                    <p className="comments">
                      <strong className="username">{event.username}</strong>
                      {event.text}
                    </p>
                  </div>
                ))}
              {/* new comments */}
              {this.state.comments &&
                this.state.comments.map(event => (
                  <div key={event.id} className="comment-section">
                    <p className="comments">
                      <strong className="username">{event.username}</strong>
                      {event.text}
                    </p>
                  </div>
                ))}
              {/* timestamp */}
              <p className="timestamp">{post.timestamp}</p>
            </div>
            {/* comment bar */}
            <div>
              <form onSubmit={this.sumbit}>
                <input
                  className="comment-bar"
                  placeholder="Add a comment..."
                  name="newComment"
                  type="text"
                  value={this.state.newComment}
                  onChange={this.handleChanges}
                />
              </form>
            </div>
          </div>
        ))}
      </>
    );
  }
}
PostContainer.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
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
