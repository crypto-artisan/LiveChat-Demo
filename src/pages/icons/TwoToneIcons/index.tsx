import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import classNames from "classnames";

// components
import PageTitle from "../../../components/PageTitle";

// icon data
import { TWOTONEICONLIST, TWOTONEICONWITHVARIANT } from "./data";

const TwoToneIcons = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Icons", path: "/ui/icons/two-tone" },
          { label: "Two Tone Icons", path: "/ui/icons/two-tone", active: true },
        ]}
        title={"Two Tone Icons"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Examples</h4>
              <p className="mb-3">
                Use{" "}
                <code>
                  &lt;FeatherIcon icon="activity" className="icon-dual" /&gt;
                </code>
                .
              </p>

              <Row className="icons-list-demo">
                {(TWOTONEICONLIST || []).map((icon, index) => {
                  return (
                    <Col key={index} sm={6} md={4} lg={3}>
                      <div className="icon-item">
                        <FeatherIcon icon={icon.name} className="icon-dual" />
                        <span>{icon.name}</span>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Sizes</h4>
              <p className="mb-3">
                Use{" "}
                <code>
                  &lt;FeatherIcon icon="activity" className="icons-**" /&gt;
                </code>
                .
              </p>

              <Row className="icons-list-demo">
                <Col sm={6} md={4} lg={3}>
                  <div className="icon-item">
                    <FeatherIcon
                      icon="airplay"
                      className="icons-xs icon-dual"
                    />{" "}
                    <span>Extra Small</span>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="icon-item">
                    <FeatherIcon
                      icon="airplay"
                      className="icons-sm icon-dual"
                    />{" "}
                    <span>Extra Small</span>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="icon-item">
                    <FeatherIcon
                      icon="airplay"
                      className="icons-md icon-dual"
                    />{" "}
                    <span>Extra Small</span>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="icon-item">
                    <FeatherIcon
                      icon="airplay"
                      className="icons-lg icon-dual"
                    />{" "}
                    <span>Extra Small</span>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="icon-item">
                    <FeatherIcon
                      icon="airplay"
                      className="icons-xl icon-dual"
                    />{" "}
                    <span>Extra Small</span>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="icon-item">
                    <FeatherIcon
                      icon="airplay"
                      className="icons-xxl icon-dual"
                    />{" "}
                    <span>Extra Small</span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="mt-0 mb-1 header-title">Two Tones Color Icons</h4>
              <p className="mb-3">
                Use{" "}
                <code>
                  &lt;FeatherIcon icon="activity" className="icon-dual-**" /&gt;
                </code>
                .
              </p>

              <Row className="icons-list-demo">
                {(TWOTONEICONWITHVARIANT || []).map((icon, index) => {
                  return (
                    <Col key={index} sm={6} md={4} lg={3}>
                      <div className="icon-item">
                        <FeatherIcon
                          icon={icon.name}
                          className={classNames("icon-dual-" + icon.variant)}
                        />{" "}
                        <span>{icon.name}</span>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TwoToneIcons;
