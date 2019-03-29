import React from 'react';
import Post from './Post';

import styled from "styled-components";

// import React, { Component } from 'react'




const PostsContainerWrapper = styled.div`
height: 500px;
width: 30%;
margin: 5px auto;
`

// const spinner = {
//   setTimeout(() => {
//     this.setState({
//       post: dummyData,
//     });
//   }, 2000);
// }

const PostsContainer = props => {
  return (
    <PostsContainerWrapper>
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </PostsContainerWrapper>
  );
};

export default PostsContainer;
