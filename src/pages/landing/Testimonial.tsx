import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// types
import { TestimonialTypes } from "./data";

interface TestimonialProps {
  testimonial: TestimonialTypes[];
}

const Testimonial = ({ testimonial }: TestimonialProps) => {
  return (
    <section className="section bg-light" id="clients">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <div className="text-center mb-4">
              <h3>What our Users Says</h3>
              <p className="text-muted">
                The clean and well commented code allows easy customization of
                the theme.It's designed for describing your app, agency or
                business.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          {(testimonial || []).map((item, index) => {
            return (
              <Col lg={4} key={index}>
                <div className="testi-box mt-4">
                  <div className="testi-desc bg-white p-4">
                    <p className="text-muted mb-0">" {item.message} "</p>
                  </div>
                  <div className="p-4">
                    <div className="testi-img float-start me-2">
                      <img
                        src={item.avatar}
                        alt=""
                        className="rounded-circle"
                      />
                    </div>
                    <div>
                      <h5 className="mb-0">{item.clientName}</h5>
                      <p className="text-muted m-0">
                        <small>- {item.title}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
