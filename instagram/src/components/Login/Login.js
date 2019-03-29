import React, { Component } from "react";
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from "styled-components";
import Logo from "../images/instagram.png"
import Side from "../images/side.png"

const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:800px;
/* height:100%; */
background:white;
margin:auto;
padding-top:10%;
/* background: grey */
`

const Form = styled.form`
margin:0px 20px 0 20px;
width:300px;
background:white;
border:1px solid #d3d3d3;
border-radius:5px;
padding:20px 0;
`
const Button = styled.button`
width:90%;
background:rgb(0, 153, 255);
color:white;
font-weight:bold;
font-size:20px;
border:none;
border-radius:5px;
height:30px;
`
const Input = styled.input`
margin: 20px auto;
width:90%;
height:30px;
text-align:center;
border-radius:5px;
`

const LoginBox = styled.div`
display:flex;
flex-direction:column

`

const InstaLogo = styled.img`
width: 100%
`
const SideImg = styled.img`
width:30%
`

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }


  render() {
    localStorage.setItem("user", this.state.username);
    return (
      <Container>
      <SideImg src={Side} />
        <Form
          onSubmit={e => this.props.toggleComponent(e)}
        >
        <InstaLogo src={Logo} />
          <h3>Welcome to Fakespagram</h3>
          <p>by Irving Duran</p>
          <LoginBox>
            <Input
              type="text"
              placeholder="User Name"
              name={this.state.username}
              value={this.state.name}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
            />
          </LoginBox>      
            <Button
        type="submit"
        // onSubmit={(e) => this.props.toggleComponent(e)}
        >
          Log In
        </Button>
        </Form>

      </Container>
    );
  }
}

export default Login;
