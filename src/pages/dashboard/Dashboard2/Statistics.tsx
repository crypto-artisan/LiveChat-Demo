import React from "react";
import { Row, Col } from "react-bootstrap";

// componets
import StatisticsWidget2 from "../../../components/StatisticsWidget2";

const Statistics = () => {
  return (
    <>
      <Row>
        <Col md={6} xl={3}>
          <StatisticsWidget2
            variant="blue"
            description="Income status"
            stats="12145"
            icon="fe-aperture"
            progress={60}
            counterOptions={{
              prefix: "$",
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget2
            variant="success"
            description="January's Sales"
            stats="1576"
            icon="fe-shopping-cart"
            progress={49}
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget2
            variant="warning"
            description="Payouts"
            stats="8947"
            icon="fe-bar-chart-2"
            progress={18}
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget2
            variant="info"
            description="Available Stores"
            stats="178"
            icon="fe-cpu"
            progress={74}
          />
        </Col>
      </Row>
    </>
  );
};

export default Statistics;
