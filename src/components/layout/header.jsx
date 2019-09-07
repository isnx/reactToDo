import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      |
      <Link to="/about" style={linkStyle}>
        About
      </Link>
    </header>
  );
};

const headerStyle = {
  background: "#333",
  color: "#FFF",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "#FFF",
  textDecoration: "none"
};

export default Header;
