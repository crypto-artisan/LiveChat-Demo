import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";

const ServerError = () => {
  return (
    <React.Fragment>
      <div className="account-pages mt-5 mb-5">
        <div className="container">
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="bg-pattern">
                <Card.Body className="p-4">
                  {/* logo */}
                  <div className="auth-logo">
                    <Link to="/" className="logo logo-dark text-center">
                      <span className="logo-lg">
                        <img src={logoDark} alt="" height="22" />
                      </span>
                    </Link>

                    <Link to="/" className="logo logo-light text-center">
                      <span className="logo-lg">
                        <img src={logoLight} alt="" height="22" />
                      </span>
                    </Link>
                  </div>
                  <div className="text-center mt-4">
                    <h1 className="text-error">500</h1>
                    <h3 className="mt-3 mb-2">Internal Server Error</h3>
                    <p className="text-muted mb-3">
                      Why not try refreshing your page? or you can contact{" "}
                      <Link to="#" className="text-dark">
                        <b>Support</b>
                      </Link>
                    </p>

                    <Link
                      to="/"
                      className="btn btn-success waves-effect waves-light"
                    >
                      Back to Home
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <footer className="footer footer-alt">
        2015 - {new Date().getFullYear()} &copy; UBold theme by{" "}
        <Link to="#" className="text-white-50">
          Coderthemes
        </Link>
      </footer>
    </React.Fragment>
  );
};

export default ServerError;
