import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Amanda's Pastry Shop</h1>
                <h2>Treats that make you smile!</h2>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Navbar dark sticky={"top"}>
          <div className="container">
            <NavbarBrand href="/">Amanda's Pastry Shop</NavbarBrand>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
