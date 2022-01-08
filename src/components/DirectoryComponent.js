import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderDirectoryItem({ bakery }) {
  return (
    <Card>
      <CardImg width="100%" src={bakery.image} alt={bakery.name} />
      <CardImgOverlay>
        <CardTitle>{bakery.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

function Directory(props) {
  const directory = props.bakeries.map((bakery) => {
    return (
      <div key={bakery.id} className="col-md-5 m-1">
        <RenderDirectoryItem bakery={bakery} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{directory}</div>
    </div>
  );
}

export default Directory;