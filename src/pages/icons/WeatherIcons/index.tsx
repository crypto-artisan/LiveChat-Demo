import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../../components/PageTitle";

// icon data
import { WEATHERICONS } from "./data";

const WeatherIcons = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Icons", path: "/ui/icons/weather" },
          { label: "Weather Icons", path: "/ui/icons/weather", active: true },
        ]}
        title={"Weather Icons"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">26 New 2.0 Icons</h4>
              <Row className="icons-list-demo">
                {(WEATHERICONS || []).map((icon, index) => {
                  return (
                    icon.category === "new-icons" && (
                      <Col key={index} sm={6} md={4} lg={3}>
                        <i className={classNames("wi", "wi-" + icon.name)}></i>{" "}
                        <span> wi wi-{icon.name}</span>
                      </Col>
                    )
                  );
                })}
              </Row>

              <h4 className="header-title my-3">Daytime Icons</h4>
              <Row className="icons-list-demo">
                {(WEATHERICONS || []).map((icon, index) => {
                  return (
                    icon.category === "day-time" && (
                      <Col key={index} sm={6} md={4} lg={3}>
                        <i className={classNames("wi", "wi-" + icon.name)}></i>{" "}
                        <span> wi wi-{icon.name}</span>
                      </Col>
                    )
                  );
                })}
              </Row>

              <h4 className="header-title my-3">Nighttime Icons</h4>
              <Row className="icons-list-demo">
                {(WEATHERICONS || []).map((icon, index) => {
                  return (
                    icon.category === "night-time" && (
                      <Col key={index} sm={6} md={4} lg={3}>
                        <i className={classNames("wi", "wi-" + icon.name)}></i>{" "}
                        <span> wi wi-{icon.name}</span>
                      </Col>
                    )
                  );
                })}
              </Row>

              <h4 className="header-title my-3">Neutral Icons</h4>
              <Row className="icons-list-demo">
                {(WEATHERICONS || []).map((icon, index) => {
                  return (
                    icon.category === "neutral" && (
                      <Col key={index} sm={6} md={4} lg={3}>
                        <i className={classNames("wi", "wi-" + icon.name)}></i>{" "}
                        <span> wi wi-{icon.name}</span>
                      </Col>
                    )
                  );
                })}
              </Row>

              <h4 className="header-title my-3">Miscellaneous Icons</h4>
              <Row className="icons-list-demo">
                {(WEATHERICONS || []).map((icon, index) => {
                  return (
                    icon.category === "miscellaneous" && (
                      <Col key={index} sm={6} md={4} lg={3}>
                        <i className={classNames("wi", "wi-" + icon.name)}></i>{" "}
                        <span> wi wi-{icon.name}</span>
                      </Col>
                    )
                  );
                })}
              </Row>

              <h4 className="header-title my-3">Moon Phases Icons</h4>
              <div className="alert alert-success">
                The moons are split into 28 icons, to correspond neatly with the
                28 day moon cycle. There is a primary set and alternate set. The
                primary set is meant to be interpreted as: where there are
                pixels, that is the illuminated part of the moon. The alternate
                set is meant to be interpreted as: where there are pixels, that
                is the shadowed part of the moon.
              </div>
              <Row className="icons-list-demo">
                {(WEATHERICONS || []).map((icon, index) => {
                  return (
                    icon.category === "moon-phase" && (
                      <Col key={index} sm={6} md={4} lg={3}>
                        <i className={classNames("wi", "wi-" + icon.name)}></i>{" "}
                        <span> wi wi-{icon.name}</span>
                      </Col>
                    )
                  );
                })}
              </Row>

              <h4 className="header-title my-3">Time Icons</h4>
              <Row className="icons-list-demo">
                {(WEATHERICONS || []).map((icon, index) => {
                  return (
                    icon.category === "time" && (
                      <Col key={index} sm={6} md={4} lg={3}>
                        <i className={classNames("wi", "wi-" + icon.name)}></i>{" "}
                        <span> wi wi-{icon.name}</span>
                      </Col>
                    )
                  );
                })}
              </Row>

              <h4 className="header-title my-3">Directional Arrows</h4>
              <Row className="icons-list-demo">
                {(WEATHERICONS || []).map((icon, index) => {
                  return (
                    icon.category === "direction-arrows" && (
                      <Col key={index} sm={6} md={4} lg={3}>
                        <i className={classNames("wi", "wi-" + icon.name)}></i>{" "}
                        <span> wi wi-{icon.name}</span>
                      </Col>
                    )
                  );
                })}
              </Row>

              <h4 className="header-title my-3">Utility Classes</h4>
              <div className="alert alert-success">
                Use these special, built-in utility classes to flip, rotate, or
                assign a fixed width to any icon.
              </div>

              <Row>
                <Col sm={4}>
                  <h5>Flip</h5>
                  <p>
                    <code>wi-flip-horizontal</code>
                  </p>
                  <p>
                    <code>wi-flip-vertical</code>
                  </p>
                </Col>

                <Col sm={4}>
                  <h5>Rotate</h5>
                  <p>
                    <code>wi-rotate-90</code>
                  </p>
                  <p>
                    <code>wi-rotate-180</code>
                  </p>
                  <p>
                    <code>wi-rotate-270</code>
                  </p>
                </Col>

                <Col sm={4}>
                  <h5>Fixed Width</h5>
                  <p>
                    <code>wi-fw</code>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default WeatherIcons;
