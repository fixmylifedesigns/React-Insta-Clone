import React from 'react';
import styled from "styled-components";

const Input = styled.input`
border:none;
width:90%;
padding: 10px 0;
border-top: 1px solid rgb(221, 221, 221);
`

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <Input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;
