import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";

function About(props) {
  const partners = props.partners.map((partner) => {
    return (
      <Media tag="li" key={partner.id}>
        <RenderPartner partner={partner} />
      </Media>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <h2>Menu</h2>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-sm-6">
          <h3>About Us!</h3>
          <p>
            We here at Amanda's Pastry Shop aim to provide delicious baked goods
            to the community. We offer breakfast and lunch alongside our
            delicious pastries. We also offer catering for events. Please
            contact us to inquire about booking for catering.
          </p>
        </div>
        <div className="col-sm-6">
          <Card>
            <CardHeader className="bg-danger text-white">
              <h3>Pastries</h3>
              <h4>Served all day!</h4>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Chocolate Chip Cookies</dt>
                <dd className="col-6">2.49</dd>
                <dt className="col-6">Sugar Cookies</dt>
                <dd className="col-6">2.49</dd>
                <dt className="col-6">Brownies</dt>
                <dd className="col-6">2.99</dd>
                <dt className="col-6">Macarons</dt>
                <dd className="col-6">2.99</dd>
                <dt className="col-6">Apple Pie</dt>
                <dd className="col-6">5.99</dd>
                <dt className="col-6">Chocolate Cake</dt>
                <dd className="col-6">8.99</dd>
                <dt className="col-6">Cheesecake</dt>
                <dd className="col-6">8.99</dd>
              </dl>
            </CardBody>
          </Card>
         
        </div>
      </div>
    </div>
  );
}

function RenderPartner({ partner }) {
  if (partner) {
    return (
      <React.Fragment>
        <Media object src={partner.image} alt={partner.name} width="150" />
        <Media className="ml-5 mb-4" body>
          <Media heading>{partner.name}</Media>
          {partner.description}
        </Media>
      </React.Fragment>
    );
  } else {
    return <div />;
  }
}

export default About;
