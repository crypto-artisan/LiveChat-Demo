import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../../components/PageTitle";

// icons data
import { SIMPLELINEICONS } from "./data";

const SimpleLineIcons = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Icons", path: "/ui/icons/simple-line" },
          {
            label: "Simple Line Icons",
            path: "/ui/icons/simple-line",
            active: true,
          },
        ]}
        title={"Simple Line Icons"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Examples</h4>
              <p className="sub-header">
                Use{" "}
                <code>&lt;i className="icon-user-female"&gt;&lt;/i&gt;</code>.
              </p>

              <Row className="icons-list-demo">
                {(SIMPLELINEICONS || []).map((icon, index) => {
                  return (
                    <Col key={index} sm={6} md={4} lg={3}>
                      <div className="preview">
                        <i className={classNames(icon.name)}></i> {icon.name}
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

export default SimpleLineIcons;
