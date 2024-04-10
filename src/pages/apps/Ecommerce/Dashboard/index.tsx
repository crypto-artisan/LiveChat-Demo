import React from "react";
import { Row, Col } from "react-bootstrap";

// components
import PageTitle from "../../../../components/PageTitle";

import Statistics from "./Statistics";
import SalesChart from "./SalesChart";
import RevenueDetails from "./RevenueDetails";
import Transactions from "./Transactions";
import ProductsDetails from "./ProductsDetails";

// dummy data
import { transactions, products } from "./data";

const Dashboard = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Ecommerce", path: "/apps/ecommerce/dashboard" },
          {
            label: "Dashboard",
            path: "/apps/ecommerce/dashboard",
            active: true,
          },
        ]}
        title={"Dashboard"}
      />

      <Row>
        <Col md={6} xl={3}>
          <Statistics
            variant="primary"
            icon="dripicons-wallet"
            stats="58947"
            description="Total RevenueDetails"
            counterOptions={{
              prefix: "$",
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <Statistics
            variant="success"
            icon="dripicons-basket"
            stats="1845"
            description="Orders"
          />
        </Col>
        <Col md={6} xl={3}>
          <Statistics
            variant="info"
            icon="dripicons-store"
            stats="825"
            description="Stores"
          />
        </Col>
        <Col md={6} xl={3}>
          <Statistics
            variant="warning"
            icon="dripicons-user-group"
            stats="2430"
            description="Sellers"
          />
        </Col>
      </Row>

      <Row>
        <Col xl={8}>
          <SalesChart />
        </Col>
        <Col xl={4}>
          <RevenueDetails />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Transactions transactions={transactions} />
        </Col>
        <Col xl={6}>
          <ProductsDetails products={products} />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
