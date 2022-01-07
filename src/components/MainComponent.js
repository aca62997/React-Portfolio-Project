import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./DirectoryComponent";
import BakeryInfo from "./BakeryInfoComponents";
import { BAKERIES } from "../shared/bakeries";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bakeries: BAKERIES,
      selectedBakery: null,
    };
  }

  onBakerySelect(bakeryId) {
    this.setState({ selectedBakery: bakeryId });
  }

  render() {
    return (
      <div>
        <Navbar dark color="danger">
          <div className="container">
            <NavbarBrand href="/">Amanda's Pastry Shop</NavbarBrand>
          </div>
        </Navbar>
        <Directory
          bakeries={this.state.bakeries}
          onClick={(bakeryId) => this.onBakerySelect(bakeryId)}
        />
        <BakeryInfo
          bakery={
            this.state.bakery.filter(
              (bakery) => bakery.id === this.state.selectedBakery
            )[0]
          }
        />
      </div>
    );
    };
}

export default Main;
