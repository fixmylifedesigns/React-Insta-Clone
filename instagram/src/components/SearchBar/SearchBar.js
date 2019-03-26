import React, { Component } from "react";
import InstagramLogo from "../images/logo.png";
import InstagramWord from "../images/instagram.png";
import Nav from "../images/nav.png";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="header-back">
        <div className="header">
          <a href="http://instagram.com/"  className="header-left">
            <img src={InstagramLogo} alt=" " className="instagram-logo" />
            <img src={InstagramWord} alt=" " className="instagram-text" />
          </a>

          <div>
            <input className="bar" placeholder="Search" />
          </div>

          <nav className="nav">
            <img src={Nav} alt=" " className="nav" />
          </nav>
        </div>
      </div>
    );
  }
}
