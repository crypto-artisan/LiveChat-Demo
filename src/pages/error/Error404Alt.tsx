import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

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

const Error404Alt = () => {
  return (
    <React.Fragment>
      <Row className="justify-content-center">
        <Col lg={6} xl={4} className="mb-4">
          <div className="error-text-box">
            <Error404Svg />
          </div>

          <div className="text-center">
            <h3 className="mt-0 mb-2">Whoops! Page not found </h3>
            <p className="text-muted mb-3">
              It's looking like you may have taken a wrong turn. Don't worry...
              it happens to the best of us. You might want to check your
              internet connection. Here's a little tip that might help you get
              back on track.
            </p>
            <Link to="/" className="btn btn-success waves-effect waves-light">
              Back to Dashboard
            </Link>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Error404Alt;
