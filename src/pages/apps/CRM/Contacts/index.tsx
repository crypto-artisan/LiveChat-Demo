import React from "react";
import { Row, Col } from "react-bootstrap";

// components
import PageTitle from "../../../../components/PageTitle";

import ContactsDetails from "./ContactsDetails";
import Profile from "./Profile";

import profilePic from "../../../../assets/images/users/user-8.jpg";

// dummy data
import { contacts } from "./data";

interface PersonalDetails {
  profile: string;
  name: string;
  position: string;
  company: string;
  about: string;
  dob: string;
  age: number;
  added: string;
  updated: string;
}

const Contacts = () => {
  const personalDetails: PersonalDetails = {
    profile: profilePic,
    name: "Jade M. Walker",
    position: "Branch manager",
    company: "Vine Corporation",
    about:
      "Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    dob: "March 23, 1984",
    age: 34,
    added: "April 22, 2016",
    updated: "Dec 13, 2017",
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "CRM", path: "/apps/crm/contacts" },
          { label: "Contacts", path: "/apps/crm/contacts", active: true },
        ]}
        title={"Contacts"}
      />

      <Row>
        <Col lg={8}>
          <ContactsDetails contactDetails={contacts} />
        </Col>
        <Col lg={4}>
          <Profile personalDetails={personalDetails} />
        </Col>
      </Row>
    </>
  );
};

export default Contacts;
