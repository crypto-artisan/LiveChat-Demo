import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// dummy data
import { TicketDetailsTypes } from "./data";

interface TicketDetailsProps {
  ticketDetails: TicketDetailsTypes;
}

const TicketDetails = ({ ticketDetails }: TicketDetailsProps) => {
  return (
    <>
      <Card className="d-block">
        <Card.Body>
          <div className="float-sm-end mb-2 mb-sm-0">
            <div className="row g-2">
              <div className="col-auto">
                <Link to="/apps/tickets/list" className="btn btn-sm btn-link">
                  <i className="mdi mdi-keyboard-backspace"></i> Back
                </Link>
              </div>
              <div className="col-auto">
                <select className="form-select form-select-sm form">
                  <option defaultValue="0">Watch</option>
                  <option value="1">Remind me</option>
                  <option value="2">Close</option>
                </select>
              </div>
            </div>
          </div>

          <h4 className="mb-3 mt-0 font-18">{ticketDetails.title}</h4>

          <div className="clerfix"></div>

          <Row>
            <Col md={4}>
              <label className="mt-2 mb-1">Ticket Type :</label>
              <p>
                <i className="mdi mdi-ticket font-18 text-success me-1 align-middle"></i>{" "}
                {ticketDetails.type}
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <label className="mt-2 mb-1">Reported By :</label>
              <div className="d-flex align-items-start">
                <img
                  src={ticketDetails.reported_by.image}
                  alt=""
                  className="rounded-circle me-2"
                  height="24"
                />
                <div className="w-100">
                  <p>{ticketDetails.reported_by.name}</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <label className="mt-2 mb-1">Assigned To :</label>
              <div className="d-flex align-items-start">
                <img
                  src={ticketDetails.assigned_to.image}
                  alt=""
                  className="rounded-circle me-2"
                  height="24"
                />
                <div className="w-100">
                  <p> {ticketDetails.assigned_to.name} </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <label className="mt-2 mb-1">Created On :</label>
              <p>
                {ticketDetails.created_on.date}{" "}
                <small className="text-muted">
                  {ticketDetails.created_on.time}
                </small>
              </p>
            </Col>
            <Col md={6}>
              <label className="mt-2 mb-1">Updated On :</label>
              <p>
                {ticketDetails.updated_on.date}{" "}
                <small className="text-muted">
                  {ticketDetails.updated_on.time}
                </small>
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <label className="mt-2 form-label">Status :</label>
              <div className="row">
                <div className="col-auto">
                  <select className="form-select form-select-sm">
                    <option>Open</option>
                    <option>Close</option>
                    <option>In Progress</option>
                  </select>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <label className="mt-2 mb-1">Priority :</label>
              <div className="row">
                <div className="col-auto">
                  <select className="form-select form-select-sm">
                    <option>Low</option>
                    <option defaultValue="medium">Medium</option>
                    <option>High</option>
                  </select>
                </div>
              </div>
            </Col>
          </Row>

          <label className="mt-4 mb-1">Overview :</label>
          <p className="text-muted mb-0">{ticketDetails.overview}</p>
        </Card.Body>
      </Card>
    </>
  );
};

export default TicketDetails;
