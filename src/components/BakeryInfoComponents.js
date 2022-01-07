import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class BakeryInfo extends Component {
  constructor(props) {
    super(props);
  }

  renderBakery(bakery) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={bakery.image} alt={bakery.name} />
          <CardBody>
            <CardTitle>{bakery.name}</CardTitle>
            <CardText>{bakery.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    if (comments) {
      return (
        <div class="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => (
            <div key={comment.id}>
              {comment.text}
              <br />
              --{comment.author}, &nbsp;
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
              <br />
              <br />
            </div>
          ))}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    if (this.props.bakery) {
      console.log("This is working");
      return (
        <div class="row">
          {this.renderBakery(this.props.bakery)}
          {this.renderBakery(this.props.bakery.comments)}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default BakeryInfo;
