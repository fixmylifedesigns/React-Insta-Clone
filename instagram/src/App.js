import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: dummyData
    }
  }




  render() {
    return (
      <div className="App">
      <PostContainer post={this.state.post} />
      </div>
    );
  }
}

export default App;
