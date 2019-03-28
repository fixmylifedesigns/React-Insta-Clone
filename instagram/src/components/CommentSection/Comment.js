import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const CommentText = styled.div`
width:90%;
text-align: left;
padding: 2px;
margin-left: 4px;

`

const User = styled.span`
font-weight: 500;
font-size: 12px;
font-weight:bold;
`

const Comments = styled.span`
font-weight: 300;
font-size: 14px;
`



const Comment = props => {
  return (
    <CommentText>
      <User>{props.comment.username}  </User>
      <Comments> {props.comment.text}</Comments>
  
    </CommentText>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
