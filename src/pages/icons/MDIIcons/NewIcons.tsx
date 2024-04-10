import React from "react";
import { Row, Col } from "react-bootstrap";
import classNames from "classnames";

// dummy data
import { MdiIconType } from "./data";

interface NewIconsProps {
  newIcons: MdiIconType[];
}

const NewIcons = ({ newIcons }: NewIconsProps) => {
  return (
    <>
      <Row className="icon-list-demo">
        {(newIcons || []).map((icon, index) => {
          return (
            <Col key={index} sm={6} md={4} lg={3}>
              <i className={classNames("mdi", "mdi-" + icon.name)}></i>
              <span>mdi-{icon.name}</span>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default NewIcons;
