import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src = "./img/logo.png"
            alt = "Logo"
            width="200"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
