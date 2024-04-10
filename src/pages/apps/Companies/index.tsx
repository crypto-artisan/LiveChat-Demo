import React from "react";

// components
import PageTitle from "../../../components/PageTitle";

import CompanyDetails from "./CompanyDetails";

// dummy data
import { companyInfo } from "./data";

const Companies = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Apps", path: "/apps/companies" },
          { label: "Companies", path: "/apps/companies", active: true },
        ]}
        title={"Companies"}
      />
      <CompanyDetails companyInfo={companyInfo} />
    </>
  );
};

export default Companies;
