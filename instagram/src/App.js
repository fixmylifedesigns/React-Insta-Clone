import React, { Component } from 'react';
import './App.css';
import WithAuthentication from './components/Authentication/WithAuthentication'
import PostsPage from './components/PostsContainer/PostsPage';
import Login from './components/Login/Login'


const ComponentWithAuthentication = WithAuthentication(Login)(PostsPage)

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }
  
  toggleComponent = () => this.setState({loggedin: !this.state.loggedIn })


  render() {
    return (
      <div className="App">
      <Login />

      <ComponentWithAuthentication loggedIn={this.state.loggedIn}/>
      <button onClick={this.toggleComponent}>Login</button>
      </div>
    );
  }
}

export default App;
