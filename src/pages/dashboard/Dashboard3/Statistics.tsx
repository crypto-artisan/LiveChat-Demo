import React from "react";
import { Row, Col } from "react-bootstrap";

// componets
import StatisticsWidget3 from "../../../components/StatisticsWidget3";

const Statistics = () => {
  return (
    <>
      <Row>
        <Col md={6} xl={3}>
          <StatisticsWidget3
            title="Income status"
            stats="31570"
            trend={{
              label: "Total income",
              value: "$22506",
              icon: "fa-caret-up",
              variant: "success",
              trendStats: "10.25%",
            }}
            counterOptions={{
              prefix: "$",
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget3
            title="Sales Status"
            stats="683"
            trend={{
              label: "Total sales",
              value: "2398",
              icon: "fa-caret-down",
              variant: "danger",
              trendStats: "7.85%",
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget3
            title="Recent Users"
            stats="3.2"
            trend={{
              label: "Total users",
              value: "121 M",
              icon: "fa-caret-up",
              variant: "success",
              trendStats: "3.64%",
            }}
            counterOptions={{
              suffix: "M",
              decimals: 1,
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget3
            title="Total Revenue"
            stats="68541"
            trend={{
              label: "Total revenue",
              value: "$1.2 M",
              icon: "fa-caret-up",
              variant: "success",
              trendStats: "17.48%",
            }}
            counterOptions={{
              prefix: "$",
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Statistics;
