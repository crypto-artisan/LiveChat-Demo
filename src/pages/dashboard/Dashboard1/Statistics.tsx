import React from "react";
import { Row, Col } from "react-bootstrap";

// componets
import StatisticsWidget from "../../../components/StatisticsWidget";

const Statistics = () => {
  return (
    <>
      <Row>
        <Col md={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            counterOptions={{
              prefix: "$",
            }}
            description="Total Revenue"
            stats="58947"
            icon="fe-heart"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget
            variant="success"
            description="Today's Sales"
            stats="127"
            icon="fe-shopping-cart"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget
            variant="info"
            description="Conversion"
            stats="0.58"
            counterOptions={{
              suffix: "%",
              decimals: 2,
            }}
            icon="fe-bar-chart-line-"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget
            variant="warning"
            description="Today's Visits"
            stats="78412"
            icon="fe-eye"
          />
        </Col>
      </Row>
    </>
  );
};

export default Statistics;
