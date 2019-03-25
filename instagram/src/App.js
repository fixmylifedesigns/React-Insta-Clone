import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <div className="top">
          <SearchBar />
        </div>
        <div className="postcontainer">
          <PostContainer post={this.state.post} />
        </div>
      </div>
    );
  }
}

export default App;
