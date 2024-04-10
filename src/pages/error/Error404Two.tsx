import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";

const Error404Svg = () => {
  return (
    <svg viewBox="0 0 600 200">
      <symbol id="s-text">
        <text textAnchor="middle" x="50%" y="50%" dy=".35em">
          404!
        </text>
      </symbol>
      <use className="text" href="#s-text"></use>
      <use className="text" href="#s-text"></use>
      <use className="text" href="#s-text"></use>
      <use className="text" href="#s-text"></use>
      <use className="text" href="#s-text"></use>
    </svg>
  );
};

const Error404Two = () => {
  useEffect(() => {
    if (document.body)
      document.body.classList.remove(
        "authentication-bg",
        "authentication-bg-pattern"
      );
    if (document.body) document.body.classList.add("auth-fluid-pages", "pb-0");

    return () => {
      if (document.body)
        document.body.classList.remove("auth-fluid-pages", "pb-0");
    };
  }, []);

  return (
    <React.Fragment>
      <div className="auth-fluid">
        {/* Auth fluid left content */}
        <div className="auth-fluid-form-box">
          <div className="align-items-center d-flex h-100">
            <Card.Body>
              {/* logo */}
              <div className="auth-brand text-center text-lg-start">
                <div className="auth-logo">
                  <Link
                    to="/"
                    className="logo logo-dark text-center outline-none"
                  >
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
              </div>

              <Row className="justify-content-center">
                <Col>
                  <div className="error-text-box">
                    <Error404Svg />
                  </div>

                  <div className="text-center">
                    <h3 className="mt-0 mb-2">Whoops! Page not found </h3>
                    <p className="text-muted mb-3">
                      It's looking like you may have taken a wrong turn. Don't
                      worry... it happens to the best of us. You might want to
                      check your internet connection. Here's a little tip that
                      might help you get back on track.
                    </p>
                    <Link
                      to="/"
                      className="btn btn-success waves-effect waves-light"
                    >
                      Back to Dashboard
                    </Link>
                  </div>
                </Col>
              </Row>

              <footer className="footer footer-alt">
                <p className="text-muted">
                  2015 - {new Date().getFullYear()} &copy; UBold theme by{" "}
                  <Link to="#" className="text-muted">
                    Coderthemes
                  </Link>
                </p>
              </footer>
            </Card.Body>
          </div>
        </div>
        <div className="auth-fluid-right text-center"></div>
      </div>
    </React.Fragment>
  );
};

export default Error404Two;
