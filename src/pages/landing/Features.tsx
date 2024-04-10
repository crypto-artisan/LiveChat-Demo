import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

// types
import { FeatureTypes } from "./data";

interface FeaturesProps {
  features: FeatureTypes[];
}

const Features = ({ features }: FeaturesProps) => {
  return (
    <>
      <section className="section">
        <div className="container-fluid">
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center mb-4 pb-1">
                <h3>Ultra Features</h3>
                <p className="text-muted">
                  The clean and well commented code allows easy customization of
                  the theme.It's designed for describing your app, agency or
                  business.
                </p>
              </div>
            </Col>
          </Row>

          {features.map((feature, index) => {
            return feature.id % 2 !== 0 ? (
              <Row key={index} className="align-items-center">
                <Col lg={6}>
                  <img
                    src={feature.image}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />
                </Col>
                <Col lg={6}>
                  <div className="p-5 features-content">
                    <div className="features-icon mb-4">
                      <i
                        className={classNames(
                          feature.icon,
                          "h4",
                          "text-white",
                          "text-center"
                        )}
                      ></i>
                    </div>
                    <h3 className="mb-3">{feature.title}</h3>
                    <p className="text-muted mb-4">{feature.description}</p>

                    <Link to="#" className="btn btn-primary btn-sm">
                      Learn More <i className="mdi mdi-arrow-right"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            ) : (
              <Row key={index} className="mt-5 align-items-center">
                <Col lg={6}>
                  <div className="p-5 features-content">
                    <div className="features-icon mb-4">
                      <i
                        className={classNames(
                          feature.icon,
                          "h4",
                          "text-white",
                          "text-center"
                        )}
                      ></i>
                    </div>
                    <h3 className="mb-3">{feature.title}</h3>
                    <p className="text-muted mb-4">{feature.description}</p>

                    <Link to="#" className="btn btn-primary btn-sm">
                      Learn More <i className="mdi mdi-arrow-right"></i>
                    </Link>
                  </div>
                </Col>
                <Col lg={6}>
                  <img
                    src={feature.image}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />
                </Col>
              </Row>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Features;
