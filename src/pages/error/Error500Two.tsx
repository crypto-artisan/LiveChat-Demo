import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";

const Error500Two = () => {
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
    <>
      {" "}
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

              <div className="text-center">
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
    </>
  );
};

export default Error500Two;
