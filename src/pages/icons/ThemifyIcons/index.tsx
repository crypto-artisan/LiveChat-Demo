import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../../components/PageTitle";

// icon data
import { THEMIFYICONS_LIST } from "./data";

const ThemifyIcons = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Icons", path: "/ui/icons/themify" },
          { label: "Themify Icons", path: "/ui/icons/themify", active: true },
        ]}
        title={"Themify Icons"}
      />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Arrows & Direction Icons</h4>
              <p className="text-muted font-13">
                Use <code>&lt;i className="ti-arrow-up"&gt;&lt;/i&gt;</code>.
              </p>

              <Row className="icons-list-demo">
                {(THEMIFYICONS_LIST || []).map((icon, index) => {
                  return (
                    icon.category === "arrows-direction" && (
                      <Col key={index} sm={6} md={4} lg={3}>
                        <i className={classNames(icon.name)}></i>{" "}
                        <span>{icon.name}</span>
                      </Col>
                    )
                  );
                })}
              </Row>

              <h4 className="header-title my-3">Web App Icons</h4>
              <Row className="icons-list-demo">
                {(THEMIFYICONS_LIST || []).map((icon, index) => {
                  return (
                    icon.category === "web-app" && (
                      <Col key={index} sm={6} md={4} lg={3}>
                        <i className={classNames(icon.name)}></i>{" "}
                        <span>{icon.name}</span>
                      </Col>
                    )
                  );
                })}
              </Row>

              <h4 className="header-title my-3">Control Icons</h4>
              <Row className="icons-list-demo">
                {(THEMIFYICONS_LIST || []).map((icon, index) => {
                  return (
                    icon.category === "control" && (
                      <Col key={index} sm={6} md={4} lg={3}>
                        <i className={classNames(icon.name)}></i>{" "}
                        <span>{icon.name}</span>
                      </Col>
                    )
                  );
                })}
              </Row>

              <h4 className="header-title my-3">Text Editor</h4>
              <Row className="icons-list-demo">
                {(THEMIFYICONS_LIST || []).map((icon, index) => {
                  return (
                    icon.category === "text-editor" && (
                      <Col key={index} sm={6} md={4} lg={3}>
                        <i className={classNames(icon.name)}></i>{" "}
                        <span>{icon.name}</span>
                      </Col>
                    )
                  );
                })}
              </Row>

              <h4 className="header-title my-3">Layout Icons</h4>
              <Row className="icons-list-demo">
                {(THEMIFYICONS_LIST || []).map((icon, index) => {
                  return (
                    icon.category === "layout" && (
                      <Col key={index} sm={6} md={4} lg={3}>
                        <i className={classNames(icon.name)}></i>{" "}
                        <span>{icon.name}</span>
                      </Col>
                    )
                  );
                })}
              </Row>

              <h4 className="header-title my-3">Brand Icons</h4>
              <Row className="icons-list-demo">
                {(THEMIFYICONS_LIST || []).map((icon, index) => {
                  return (
                    icon.category === "brand" && (
                      <Col key={index} sm={6} md={4} lg={3}>
                        <i className={classNames(icon.name)}></i>{" "}
                        <span>{icon.name}</span>
                      </Col>
                    )
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

export default ThemifyIcons;
