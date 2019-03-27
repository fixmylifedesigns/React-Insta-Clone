
import React, { Component } from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';

class Login extends Component {

    
  constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
      }

      

    render() {
        localStorage.setItem('user', this.state.username);
        return (
            <form className="login-form">
                <h3>Welcome to Fakespagram</h3>
                <p>Plase Login</p>
                <div>
                    <input 
                    type="text"
                    placeholder="User Name"
                    value={this.state.name}
                    />
                    <input 
                    type="password"
                    placeholder="password"
                    name="password"
                    value={this.state.password}
                    />
                    <button>
                        Log In
                    </button>
                    
                
                </div>
                </form>
        )
    }
}

export default Login