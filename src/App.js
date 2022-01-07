import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./components/DirectoryComponents";
import "./App.css";
import { BAKERIES } from "./shared/bakeries";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bakeries: BAKERIES,
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="danger">
          <div className="container">
            <NavbarBrand href="/">Amanda's Pastry Shop</NavbarBrand>
          </div>
        </Navbar>
        <Directory bakeries={this.state.bakeries} />
      </div>
    );
  }
}

export default App;
