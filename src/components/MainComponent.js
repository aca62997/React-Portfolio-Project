import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import BakeryInfo from "./BakeryInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { BAKERIES } from "../shared/bakeries";
import Menu from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./ContactComponent";

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

    const BakeryWithId = ({ match }) => {
      return (
        <BakeryInfo
          bakery={
            this.state.bakeries.filter(
              (bakery) => bakery.id === +match.params.bakeryId
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.campsiteId === +match.params.campsiteId
          )}
        />
      );
    }; 

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
          <Route exact path="/contactus" component={Contact} />
          <Route path="/directory/:bakeryId" component={BakeryWithId} />
          <Redirect to="/home" />
          <Directory bakeries={this.state.bakeries} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
