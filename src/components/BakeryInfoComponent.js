import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderBakery({bakery}) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={bakery.image} alt={bakery.name} />
          <CardBody>
            <CardText>{bakery.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  function RenderComments({comments}) {
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

  function BakeryInfo(props) {
    if (props.bakery) {
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/directory">Menu</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{props.bakery.name}</BreadcrumbItem>
              </Breadcrumb>
              <h2>{props.bakery.name}</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <RenderBakery bakery={props.bakery} />
            <RenderComments comments={props.comments} />
          </div>
        </div>
      );
    }
    return <div />;
  }

  export default BakeryInfo;