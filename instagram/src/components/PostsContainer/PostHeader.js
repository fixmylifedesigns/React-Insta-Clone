import React from 'react';
import styled from "styled-components";
import './Posts.css';

const PostHeaderDiv = styled.div`
display: flex;
align-items: center;
`
const PostThumb = styled.img`
height: 100%;
border-radius: 50%;
`
const PostThumbWrapper = styled.div`
padding:10px;
  height: 40px;
  width: 40px;
`

const PostHeader = props => {
  return (
    <PostHeaderDiv>
      <PostThumbWrapper>
        <PostThumb
          alt="post header"
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <strong>{props.username}</strong>
    </PostHeaderDiv>
  );
};

export default PostHeader;
