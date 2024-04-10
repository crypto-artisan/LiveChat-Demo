import React from "react";
import { Row, Col, Card } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle";

// icons data
import { DRIPICONS_LIST } from "./data";

const Dripicons = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Icons", path: "/ui/icons/dripicons" },
          {
            label: "Dripicons Icons",
            path: "/ui/icons/dripicons",
            active: true,
          },
        ]}
        title={"Dripicons Icons"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row className="icons-list-demo">
                {(DRIPICONS_LIST || []).map((icon, index) => {
                  return (
                    <Col key={index} sm={6} md={4} lg={3}>
                      <i className={icon.name}></i> {icon.name}
                    </Col>
                  );
                })}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Dripicons;
