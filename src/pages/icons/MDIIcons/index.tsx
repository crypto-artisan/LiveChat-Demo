import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../../components/PageTitle";

import NewIcons from "./NewIcons";
import AllIcons from "./AllIcons";

// icons data
import { MDIICONS_LIST, MdiIconType } from "./data";

const MDIIcons = () => {
  const newIcons: MdiIconType[] =
    MDIICONS_LIST && MDIICONS_LIST.filter((icon) => icon.version === "5.8.55");

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Icons", path: "/ui/icons/mdi" },
          {
            label: "Material Design Icons",
            path: "/ui/icons/mdi",
            active: true,
          },
        ]}
        title={"Material Design Icons"}
      />

      <Row className="icons-list-demo">
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">New Icons v5.8.55</h4>
              <NewIcons newIcons={newIcons} />
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">All Icons</h4>
              <AllIcons icons={MDIICONS_LIST} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Size</h4>

              <Row className="icons-list-demo">
                {[18, 24, 36, 48].map((size, index) => {
                  return (
                    <Col key={index} sm={6} md={4} lg={3}>
                      <i
                        className={classNames(
                          "mdi",
                          "mdi-" + size + "px",
                          "mdi-account"
                        )}
                      ></i>
                      <span>mdi-{size}px</span>
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
              <h4 className="header-title mb-4">Rotate</h4>

              <Row className="icons-list-demo">
                {[45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
                  return (
                    <Col key={index} sm={6} md={4} lg={3}>
                      <i
                        className={classNames(
                          "mdi",
                          "mdi-rotate-" + angle,
                          "mdi-account"
                        )}
                      ></i>
                      <span>mdi-rotate-{angle}</span>
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
              <h4 className="header-title mb-4">Spin</h4>

              <Row className="icons-list-demo">
                {["loading", "star"].map((icon, index) => {
                  return (
                    <Col key={index} sm={6} md={4} lg={3}>
                      <i
                        className={classNames("mdi", "mdi-" + icon, "mdi-spin")}
                      ></i>
                      <span>mdi-spin</span>
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

export default MDIIcons;
