import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Dropdown,
  ButtonGroup,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// components
import PageTitle from "../../../components/PageTitle";

import LeftBar from "./LeftBar";

// dummy data
import { emails } from "./data";

import avatarImg from "../../../assets/images/users/user-2.jpg";

interface EmailItems {
  avatar: string;
  subject: string;
  from_name: string;
  from_email: string;
  recieved_on: string;
  attachments: [
    { id: number; name: string; size: string; ext: string },
    { id: number; name: string; size: string; ext: string },
    { id: number; name: string; size: string; ext: string }
  ];
}

// EmailDetail
const EmailDetail = () => {
  const [totalUnreadEmails] = useState<number>(
    emails.filter((e: any) => e.is_read === false).length
  );
  const [email] = useState<EmailItems>({
    avatar: avatarImg,
    subject: "Your elite author Graphic Optimization reward is ready!",
    from_name: "Steven Smith",
    from_email: "jonathan@domain.com",
    recieved_on: "Jul 24, 2019, 5:17 AM",
    attachments: [
      { id: 1, name: "Hyper-admin-design.zip", size: "2.3MB", ext: ".zip" },
      { id: 2, name: "Dashboard-design.jpg", size: "0.3MB", ext: ".jpg" },
      { id: 3, name: "Admin-bug-report.mp4", size: "4.1MB", ext: ".mp4" },
    ],
  });

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Email", path: "/apps/email/details" },
          { label: "Email Read", path: "/apps/email/details", active: true },
        ]}
        title={"Email Read"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="inbox-leftbar">
                <Link
                  to="/apps/email/compose"
                  className="btn btn-danger w-100 waves-effect waves-light"
                >
                  Compose
                </Link>

                <LeftBar totalUnreadEmails={totalUnreadEmails} />
              </div>

              <div className="inbox-rightbar">
                <ButtonGroup className="me-1">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="archived">Archived</Tooltip>}
                  >
                    <Button variant="light" className="btn-sm waves-effect">
                      <i className="mdi mdi-archive font-18"></i>
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="spam">Spam</Tooltip>}
                  >
                    <Button variant="light" className="btn-sm waves-effect">
                      <i className="mdi mdi-alert-octagon font-18"></i>
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    key="bottm"
                    placement="bottom"
                    overlay={<Tooltip id="delete">Delete</Tooltip>}
                  >
                    <Button variant="light" className="btn-sm waves-effect">
                      <i className="mdi mdi-delete-variant font-18"></i>
                    </Button>
                  </OverlayTrigger>
                </ButtonGroup>

                <Dropdown className="btn-group me-1">
                  <Dropdown.Toggle className="btn btn-light btn-sm waves-effect">
                    <i className="mdi mdi-folder font-18"></i>{" "}
                    <i className="mdi mdi-chevron-down"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <span className="dropdown-header">Move to:</span>
                    <Dropdown.Item>Social</Dropdown.Item>
                    <Dropdown.Item>Promotions</Dropdown.Item>
                    <Dropdown.Item>Updates</Dropdown.Item>
                    <Dropdown.Item>Forums</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="btn-group me-1">
                  <Dropdown.Toggle className="btn btn-light btn-sm waves-effect">
                    <i className="mdi mdi-label font-18"></i>{" "}
                    <i className="mdi mdi-chevron-down"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <span className="dropdown-header">Label as:</span>
                    <Dropdown.Item>Social</Dropdown.Item>
                    <Dropdown.Item>Promotions</Dropdown.Item>
                    <Dropdown.Item>Updates</Dropdown.Item>
                    <Dropdown.Item>Forums</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="btn-group me-1">
                  <Dropdown.Toggle className="btn btn-light btn-sm waves-effect">
                    <i className="mdi mdi-dots-horizontal font-18"></i> More{" "}
                    <i className="mdi mdi-chevron-down"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <span className="dropdown-header">More Options :</span>
                    <Dropdown.Item>Mark as Unread</Dropdown.Item>
                    <Dropdown.Item>Add to Tasks</Dropdown.Item>
                    <Dropdown.Item>Add Star</Dropdown.Item>
                    <Dropdown.Item>Mute</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <div className="mt-4">
                  <h5 className="font-18">
                    Your elite author Graphic Optimization reward is ready!
                  </h5>

                  <hr />

                  <div className="d-flex align-items-start mb-3 mt-1">
                    <img
                      className="d-flex me-2 rounded-circle"
                      src={email.avatar}
                      alt={email.from_name}
                      height="32"
                    />
                    <div className="w-100">
                      <small className="float-end">{email.recieved_on}</small>
                      <h6 className="m-0 font-14">{email.from_name}</h6>
                      <small className="text-muted">
                        From: {email.from_email}
                      </small>
                    </div>
                  </div>

                  <p>Hi Coderthemes!</p>
                  <p>
                    Clicking ‘Order Service’ on the right-hand side of the above
                    page will present you with an order page. This service has
                    the following Briefing Guidelines that will need to be
                    filled before placing your order:
                  </p>

                  <ol>
                    <li>
                      Your design preferences (Color, style, shapes, Fonts,
                      others){" "}
                    </li>
                    <li>Tell me, why is your item different? </li>
                    <li>
                      Do you want to bring up a specific feature of your item?
                      If yes, please tell me{" "}
                    </li>
                    <li>
                      Do you have any preference or specific thing you would
                      like to change or improve on your item page?{" "}
                    </li>
                    <li>
                      Do you want to include your item's or your provider's logo
                      on the page? if yes, please send it to me in vector format
                      (Ai or EPS){" "}
                    </li>
                    <li>Please provide me with the copy or text to display</li>
                  </ol>

                  <p>
                    Filling in this form with the above information will ensure
                    that they will be able to start work quickly.
                  </p>
                  <p>
                    You can complete your order by putting your coupon code into
                    the Promotional code box and clicking ‘Apply Coupon’.
                  </p>
                  <p>
                    <b>Best,</b> <br /> Graphic Studio
                  </p>
                  <hr />

                  <h5 className="mb-3">Attachments</h5>
                  <Row>
                    {(email.attachments || []).map((f, idx) => {
                      return (
                        <Col xl={4} key={idx}>
                          <Card className="mb-1 shadow-none border">
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <div className="avatar-sm">
                                    <span className="avatar-title text-uppercase bg-soft-primary text-primary rounded">
                                      {f.ext}
                                    </span>
                                  </div>
                                </Col>
                                <Col className="col ps-0">
                                  <Link to="#" className="text-muted fw-bold">
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">{f.size}</p>
                                </Col>
                                <Col className="col-auto">
                                  <Link
                                    to="#"
                                    className="btn btn-link btn-lg text-muted"
                                  >
                                    <i className="dripicons-download"></i>
                                  </Link>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>

                  <div className="mt-5">
                    <Link to="#" className="btn btn-secondary me-2">
                      <i className="mdi mdi-reply me-1"></i> Reply
                    </Link>
                    <Link to="#" className="btn btn-light">
                      Forward <i className="mdi mdi-forward ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default EmailDetail;
