import React, { Component } from "react";
import WithAuthentication from "./components/Authentication/WithAuthentication";
import PostsPage from "./components/PostsContainer/PostsPage";
import Login from "./components/Login/Login";
import styled from "styled-components";

const AppDiv = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: #fafafa;
`

const ComponentWithAuthentication = WithAuthentication(Login);

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  toggleComponent = e => {
    // console.log("hi")
    e.preventDefault();
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  };
  render() {
    if (this.state.loggedIn) {
     return (
     <AppDiv>
        <PostsPage />
      </AppDiv>
      );
    } else {
      return (
        <AppDiv>
          <ComponentWithAuthentication
            loggedIn={this.state.loggedIn}
            toggleComponent={this.toggleComponent}
          />
        </AppDiv>
      );
    }
  }
}

export default App;
