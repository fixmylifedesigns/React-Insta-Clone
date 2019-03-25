import React, { Component } from "react";
import InstagramLogo from "../images/logo.png";
import InstagramWord from "../images/instagram.png";
import Nav from "../images/nav.png";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <img src={InstagramLogo} alt=" " className="instagram-logo" />
          <img src={InstagramWord} alt=" " className="instagram-text" />
        </div>

        <div>
          <input className="bar" placeholder="Type Here..."/>
        </div>

        <nav className="nav">
          <img src={Nav} alt=" " className="nav" />
        </nav>
      </div>
    );
  }
}
