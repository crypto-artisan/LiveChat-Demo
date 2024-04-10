import React from "react";
import { Row, Col } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle";
import SalesChart from "../../../components/SalesChart";
import IncomeChart from "../../../components/IncomeChart";
import UsersChart from "../../../components/UsersChart";

import Statistics from "./Statistics";
import RevenueChart from "./RevenueChart";
import TopSellingProducts from "./TopSellingProducts";

// dummy data
import { products } from "./data";

const Dashboard2 = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Dashboards", path: "/dashboard-2" },
          { label: "Dashboard 2", path: "/dashboard-2", active: true },
        ]}
        title={"Dashboard 2"}
      />

      <Statistics />

      <Row>
        <Col md={12} xl={4}>
          <SalesChart />
        </Col>
        <Col md={6} xl={4}>
          <IncomeChart />
        </Col>
        <Col md={6} xl={4}>
          <UsersChart />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <RevenueChart />
        </Col>
        <Col xl={6}>
          <TopSellingProducts products={products} />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard2;
