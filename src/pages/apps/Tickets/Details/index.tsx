import React from "react";
import { Row, Col } from "react-bootstrap";

// components
import PageTitle from "../../../../components/PageTitle";

import TicketDetails from "./TicketDetails";
import Discussion from "./Discussion";
import Attachments from "./Attachments";

// dummy data
import { ticketDetails } from "./data";

const Details = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Tickets", path: "/apps/tickets/details" },
          {
            label: "Ticket Detail",
            path: "/apps/tickets/details",
            active: true,
          },
        ]}
        title={"Ticket Detail"}
      />
      <Row>
        <Col lg={7} xl={8}>
          <TicketDetails ticketDetails={ticketDetails} />

          <Discussion />
        </Col>
        <Col lg={5} xl={4}>
          <Attachments />
        </Col>
      </Row>
    </>
  );
};

export default Details;
