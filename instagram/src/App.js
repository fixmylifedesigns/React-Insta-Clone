import React, { Component } from "react";
// import WithAuthentication from './components/Authentication/WithAuthentication'
import PostsPage from "./components/PostsContainer/PostsPage";
// import Login from "./components/Login/Login";
import styled from "styled-components";

const AppDiv = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: #fafafa;
`;

// const ComponentWithAuthentication = WithAuthentication(Login)(PostsPage)

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  toggleComponent = () => this.setState({ loggedin: !this.state.loggedIn });

  render() {
    return (
      <AppDiv>
        {/* <Login /> */}
        <PostsPage />
        {/* <ComponentWithAuthentication loggedIn={this.state.loggedIn}/>
      <button onClick={this.toggleComponent}>Login</button> */}
      </AppDiv>
    );
  }
}

export default App;
