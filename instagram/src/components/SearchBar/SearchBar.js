import React, { Component } from "react";
import InstagramLogo from "../images/logo.png";
import InstagramWord from "../images/instagram.png";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <div className="header-logo">
            <img src={InstagramLogo} alt=" " className="instagram-logo" />
            <img src={InstagramWord} alt=" " className="instagram-text" />
          </div>
        </div>
        <nav>{}</nav>
      </div>
    );
  }
}
