import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import BakeryInfo from "./BakeryInfoComponents";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBakery: null,
    };
  }

  onBakerySelect(bakery) {
    this.setState({ selectedBakery: bakery });
  }

  renderSelectedBakery(bakery) {
    if (bakery) {
      return (
        <Card>
          <CardImg top src={bakery.image} alt={bakery.name} />
          <CardBody>
            <CardTitle>{bakery.name}</CardTitle>
            <CardText>{bakery.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    return <div />;
  }

  render() {
    const directory = this.props.bakeries.map((bakery) => {
      return (
        <div key={bakery.id} className="col-md-5 m-1">
          <Card onClick={() => this.onBakerySelect(bakery)}>
            <CardImg width="100%" src={bakery.image} alt={bakery.name} />
            <CardImgOverlay>
              <CardTitle>{bakery.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
        <BakeryInfo bakery={this.state.selectedBakery} />
      </div>
    );
  }
}

export default Directory;