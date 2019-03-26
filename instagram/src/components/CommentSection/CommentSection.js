import React, { Component } from 'react'


export default class CommentSection extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <input className="comment-bar" placeholder="Add a comment..."/>
      </div>
    )
  }
}
