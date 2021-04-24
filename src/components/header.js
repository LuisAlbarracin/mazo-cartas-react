import React from "react";
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src = "./img/logo.png"
            alt = "Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          POKER
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
