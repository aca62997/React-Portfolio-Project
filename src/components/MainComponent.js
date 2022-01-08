import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import BakeryInfo from "./BakeryInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { BAKERIES } from "../shared/bakeries";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bakeries: BAKERIES,
      selectedBakery: null
    };
  }

  onBakerySelect(bakeryId) {
        this.setState({selectedBakery: bakeryId});
    }

  render() {
    return (
      <div>
        <Header />
        <Directory
          bakeries={this.state.bakeries}
          onClick={(bakeryId) => this.onBakerySelect(bakeryId)}
        />
        <BakeryInfo
          bakery={
            this.state.bakeries.filter(
              (bakery) => bakery.id === this.state.selectedBakery
            )[0]
          }
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
