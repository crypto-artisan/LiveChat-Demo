import React from "react";
import { Row, Col } from "react-bootstrap";

// componets
import StatisticsWidget4 from "../../../components/StatisticsWidget4";

import avatar1 from "../../../assets/images/users/user-3.jpg";
import avatar2 from "../../../assets/images/users/user-4.jpg";
import avatar3 from "../../../assets/images/users/user-5.jpg";
import avatar4 from "../../../assets/images/users/user-6.jpg";

const Statistics = () => {
  return (
    <>
      <Row>
        <Col md={6} xl={3}>
          <StatisticsWidget4
            avatar={avatar1}
            name="Thelma Fridley"
            position="Admin User"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget4
            avatar={avatar2}
            name="Chandler Hervieux"
            position="Manager"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget4
            avatar={avatar3}
            name="Percy Demers"
            position="Director"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget4
            avatar={avatar4}
            name="Antoine Masson"
            position="Premium User"
          />
        </Col>
      </Row>
    </>
  );
};

export default Statistics;
