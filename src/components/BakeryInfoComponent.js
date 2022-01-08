import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderBakery({bakery}) {
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
            <RenderBakery bakery={props.bakery} />
            <RenderComments comments={props.comments} />
          </div>
        </div>
      );
    }
    return <div />;
  }

  export default BakeryInfo;