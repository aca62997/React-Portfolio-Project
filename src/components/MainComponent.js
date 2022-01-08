import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import BakeryInfo from "./BakeryInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { BAKERIES } from "../shared/bakeries";
import Menu from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bakeries: BAKERIES,

    };
  }

  render() {

    const HomePage = () => {
      return (
        <Menu />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            render={() => <Directory bakeries={this.state.bakeries} />}
          />
          <Redirect to="/home" />
          <Directory bakeries={this.state.bakeries} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
