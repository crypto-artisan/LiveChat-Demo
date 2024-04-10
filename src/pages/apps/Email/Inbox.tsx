import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import classNames from "classnames";

// components
import PageTitle from "../../../components/PageTitle";

import LeftBar from "./LeftBar";

// dafault data
import { emails as mails } from "./data";

// emails list
const EmailsList = (props: { emails: EmailItems[] }) => {
  const emails = props.emails || [];

  return (
    <>
      <ul className="message-list">
        {(emails || []).map((email, idx) => {
          return (
            <li className={classNames({ unread: !email.is_read })} key={idx}>
              <div className="col-mail col-mail-1">
                <div className="checkbox-wrapper-mail">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={"mail" + email.id}
                    />
                    <label
                      className="toggle"
                      htmlFor={"mail" + email.id}
                    ></label>
                  </div>
                </div>
                <span
                  className={classNames("star-toggle", "far", "fa-star", {
                    "text-warning": email.is_important,
                  })}
                ></span>
                <Link to="/apps/email/details" className="title">
                  {email.from_name}
                  {email.number_of_reply > 1 && (
                    <span> ({email.number_of_reply})</span>
                  )}
                </Link>
              </div>
              <div className="col-mail col-mail-2">
                <Link to="/apps/email/details" className="subject">
                  {email.subject} &nbsp;&ndash;&nbsp;
                  <span className="teaser">{email.teaser}</span>
                </Link>
                <div className="date">{email.time}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

interface EmailItems {
  id: number;
  from_name: string;
  from_email: string;
  subject: string;
  teaser: string;
  number_of_reply: number;
  is_important: boolean;
  is_read: boolean;
  time: string;
  date: string;
}

// Inbox
const Inbox = () => {
  const [emails, setEmails] = useState<Array<EmailItems>>(mails.slice(0, 20));
  const [totalEmails] = useState<number>(mails.length);
  const [pageSize] = useState<number>(20);
  const [page, setPage] = useState<number>(1);
  const [startIndex, setStartIndex] = useState<number>(1);
  const [endIndex, setEndIndex] = useState<number>(20);
  const [totalPages] = useState<number>(mails.length / 20);
  const [totalUnreadEmails] = useState<number>(
    mails.filter((e: any) => e.is_read === false).length
  );

  /**
   * Gets the next page
   */
  const getNextPage = () => {
    var nextPage = page + 1;
    if (nextPage > totalEmails / pageSize) {
      nextPage = totalEmails / pageSize;
    }
    var startIdx = nextPage * pageSize - pageSize + 1;
    var endIdx = nextPage * pageSize;
    setPage(nextPage);
    setStartIndex(startIdx);
    setEndIndex(endIdx);
    setEmails(mails.slice(startIdx, endIdx));
  };

  /**
   * Gets the prev page
   */
  const getPrevPage = () => {
    var prevPage = page - 1;
    if (prevPage === 0) prevPage = 1;
    var startIdx = prevPage * pageSize - pageSize + 1;
    var endIdx = prevPage * pageSize;
    setPage(prevPage);
    setStartIndex(startIdx);
    setEndIndex(endIndex);
    setEmails(mails.slice(startIdx, endIdx));
  };

  /**
   * Shows the starred emails only
   */
  const showAllEmails = () => {
    setEmails(mails.slice(0, 20));
  };

  /**
   * Shows the starred emails only
   */
  const showStarredEmails = () => {
    setEmails(mails.filter((e: any) => e.is_important).slice(0, 20));
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Email", path: "/apps/email/inbox" },
          { label: "Inbox", path: "/apps/email/inbox", active: true },
        ]}
        title={"Inbox"}
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

                <LeftBar
                  totalUnreadEmails={totalUnreadEmails}
                  showAllEmails={showAllEmails}
                  showStarredEmails={showStarredEmails}
                />
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

                <div className="mt-3">
                  <EmailsList emails={emails} />
                </div>

                <Row>
                  <Col sm={7} className="mt-1">
                    Showing {startIndex} - {endIndex} of {totalEmails}
                  </Col>
                  <Col sm={5}>
                    <ButtonGroup className="float-end">
                      {page === 1 ? (
                        <Button variant="light" className="btn-sm" disabled>
                          <i className="mdi mdi-chevron-left"></i>
                        </Button>
                      ) : (
                        <Button
                          variant="info"
                          className="btn-sm"
                          onClick={getPrevPage}
                        >
                          <i className="mdi mdi-chevron-left"></i>
                        </Button>
                      )}

                      {page < totalPages ? (
                        <Button
                          variant="info"
                          className="btn-sm"
                          onClick={getNextPage}
                        >
                          <i className="mdi mdi-chevron-right"></i>
                        </Button>
                      ) : (
                        <Button variant="light" className="btn-sm" disabled>
                          <i className="mdi mdi-chevron-right"></i>
                        </Button>
                      )}
                    </ButtonGroup>
                  </Col>
                </Row>
              </div>

              <div className="clearfix"></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Inbox;
