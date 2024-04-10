import React from "react";
import { Row, Col } from "react-bootstrap";

// components
import PageTitle from "../../../../components/PageTitle";

import Statistics from "./Statistics";
import DealsChart from "./DealsChart";
import SalesChart from "./SalesChart";
import PerformanceDetails from "./PerformanceDetails";
import RecentLeads from "./RecentLeads";
import CampaignChart from "./CampaignChart";

import { performanceDetails, recentLeads } from "./data";

const Dashboard = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "CRM", path: "/apps/crm/dashboard" },
          { label: "Dashboard", path: "/apps/crm/dashboard", active: true },
        ]}
        title={"Dashboard"}
      />

      <Row>
        <Col lg={6} xl={3}>
          <Statistics
            icon="fe-layers"
            variant="blue"
            stats="12008"
            description="Campaign Sent"
          />
        </Col>
        <Col lg={6} xl={3}>
          <Statistics
            icon="fe-award"
            variant="success"
            stats="7410"
            description="New Leads"
          />
        </Col>
        <Col lg={6} xl={3}>
          <Statistics
            icon="fe-delete"
            variant="danger"
            stats="2125"
            description="Deals"
          />
        </Col>
        <Col lg={6} xl={3}>
          <Statistics
            icon="fe-dollar-sign"
            variant="warning"
            stats="256"
            counterOptions={{
              prefix: "$",
              suffix: "k",
            }}
            description="Booked Revenue"
          />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <DealsChart />
        </Col>
        <Col xl={6}>
          <SalesChart />
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <PerformanceDetails performanceDetails={performanceDetails} />
        </Col>
        <Col lg={6} xl={4}>
          <RecentLeads recentLeads={recentLeads} />
        </Col>
        <Col lg={6} xl={4}>
          <CampaignChart />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
