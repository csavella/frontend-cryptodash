import { slide as Menu } from "react-burger-menu";
import React from "react";
import { Link } from "react-router-dom";

export default class SlideMenu extends React.Component {
  render() {
    return (
      <Menu isOpen={false} right disableCloseOnEsc disableAutoFocus>
        <Link to="/" id="home" className="menu-item">
          Home
        </Link>
        <Link to="/search" id="search" className="menu-item">
          Search
        </Link>
        <Link to="/exchanges" id="exchanges" className="menu-item">
          Exchanges
        </Link>
        <Link to="/glossary" id="glossary" className="menu-item">
          Glossary
        </Link>
        <Link to="/about" id="about" className="menu-item">
          About
        </Link>
        <Link to="/resources" id="resources" className="menu-item">
          Resources
        </Link>
        <Link to="/contact" id="contact" className="menu-item">
          Contact Us
        </Link>
      </Menu>
    );
  }
}
