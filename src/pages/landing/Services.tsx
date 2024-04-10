import React from "react";
import { Row, Col } from "react-bootstrap";

// types
import { ServiceTypes } from "./data";

interface ServicesProps {
  services: ServiceTypes[];
}

const Services = ({ services }: ServicesProps) => {
  return (
    <>
      <section className="section-sm" id="features">
        <div className="container-fluid">
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center mb-4 pb-1">
                <h3 className="mb-3">
                  The admin is fully responsive and easy to customize
                </h3>
                <p className="text-muted">
                  The clean and well commented code allows easy customization of
                  the theme.It's designed for describing your app, agency or
                  business.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {services.map((service, index) => {
              return (
                <Col lg={4} md={6} key={index}>
                  <div className="features-box">
                    <div className="features-img mb-4">
                      <img src={service.icon} alt="" />
                    </div>
                    <h4 className="mb-2">{service.title}</h4>
                    <p className="text-muted">{service.description}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Services;
