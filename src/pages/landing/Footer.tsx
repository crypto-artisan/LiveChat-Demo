import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo-light.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-dark footer">
        <div className="container-fluid">
          <Row className="mb-5">
            <Col lg={4}>
              <div className="pe-lg-4">
                <div className="mb-4 footer-logo">
                  <img src={logo} alt="" className="logo-light" height="21" />
                </div>
                <p className="text-muted">
                  A Responsive Bootstrap 5 Web App Kit
                </p>
                <p className="text-muted mb-4 mb-lg-0">
                  Ubold is a fully featured premium admin template built on top
                  of awesome Bootstrap 5, modern web technology HTML5, CSS3 and
                  JavaScript library (React). It has many ready to use hand
                  crafted components.
                </p>
              </div>
            </Col>
            <Col lg={2} md={6}>
              <div className="footer-list">
                <p className="text-light mb-2 footer-list-title">About</p>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#">
                      <i className="mdi mdi-chevron-right me-2"></i>Home
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="mdi mdi-chevron-right me-2"></i>Features
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="mdi mdi-chevron-right me-2"></i>Faq
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="mdi mdi-chevron-right me-2"></i>Clients
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6}>
              <div className="footer-list">
                <p className="text-light mb-2 footer-list-title">Social</p>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#">
                      <i className="mdi mdi-chevron-right me-2"></i>Facebook{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="mdi mdi-chevron-right me-2"></i>Twitter
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="mdi mdi-chevron-right me-2"></i>Behance
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="mdi mdi-chevron-right me-2"></i>Dribble
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6}>
              <div className="footer-list">
                <p className="text-light mb-2 footer-list-title">Support</p>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#">
                      <i className="mdi mdi-chevron-right me-2"></i>Help &
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="mdi mdi-chevron-right me-2"></i>Privacy
                      Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="mdi mdi-chevron-right me-2"></i>Terms &
                      Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6}>
              <div className="footer-list">
                <p className="text-light mb-2 footer-list-title">More Info</p>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#">
                      <i className="mdi mdi-chevron-right me-2"></i>Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="mdi mdi-chevron-right me-2"></i>For
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="mdi mdi-chevron-right me-2"></i>For Agencies
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="mdi mdi-chevron-right me-2"></i>Our Apps
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="float-start pull-none">
                <p className="text-muted">
                  {currentYear} &copy;Ubold. Design by{" "}
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    to={{ pathname: "https://coderthemes.com/" }}
                    className="text-muted"
                  >
                    Coderthemes
                  </Link>
                </p>
              </div>
              <div className="float-end pull-none">
                <ul className="list-inline social-links">
                  <li className="list-inline-item text-muted">Social :</li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="mdi mdi-facebook"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="mdi mdi-twitter"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="mdi mdi-instagram"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="mdi mdi-google-plus"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
