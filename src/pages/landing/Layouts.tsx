import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// types
import { LayoutTypes } from "./data";

interface LayoutsProps {
  layouts: LayoutTypes[];
}

const Layouts = ({ layouts }: LayoutsProps) => {
  return (
    <section className="section bg-light" id="demo">
      <div className="container-fluid">
        <Row>
          <Col lg={12}>
            <div className="title text-center mb-3">
              <h3>Available Demos</h3>
              <p className="text-muted">
                At solmen va esser necessi far uniform grammatica.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {layouts.map((layout, index) => {
            return (
              <Col lg={4} md={6} key={index}>
                <div className="demo-box bg-white mt-4 p-2">
                  <Link
                    target="_blank"
                    // rel="noreferrer"
                    to={ layout.link}
                    className="text-dark"
                  >
                    <img
                      src={layout.image}
                      alt=""
                      className="img-fluid mx-auto d-block"
                    />
                    <div className="p-3 text-center">
                      <h5 className="mb-0">{layout.name}</h5>
                    </div>
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>

        <Row>
          <div className="col-12">
            <div className="text-center mt-4">
              <button className="btn btn-info navbar-btn">
                More Demos {" "}
                <i className="mdi mdi-arrow-right"></i>
              </button>
            </div>
          </div>
        </Row>

      </div>
    </section>
  );
};

export default Layouts;
