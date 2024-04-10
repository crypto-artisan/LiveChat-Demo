import React from "react";
import { Row, Col } from "react-bootstrap";

// components
import PageTitle from "../../../../components/PageTitle";

import CompanyDetails from "./CompanyDetails";
import StaticsChart from "./StaticsChart";

// dummy data
import { companyInfo } from "./data";

const Leads = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "CRM", path: "/apps/crm/leads" },
          { label: "Leads", path: "/apps/crm/leads", active: true },
        ]}
        title={"Leads"}
      />

      <Row>
        <Col lg={{ span: 8, order: 1 }} xs={{ span: 12, order: 2 }}>
          <CompanyDetails companyInfo={companyInfo} />
        </Col>
        <Col lg={{ span: 4, order: 2 }} xs={{ span: 12, order: 1 }}>
          <StaticsChart />
        </Col>
      </Row>
    </>
  );
};

export default Leads;
