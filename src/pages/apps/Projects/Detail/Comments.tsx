import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import avatar1 from "../../../../assets/images/users/user-1.jpg";
import avatar2 from "../../../../assets/images/users/user-2.jpg";
import avatar3 from "../../../../assets/images/users/user-3.jpg";
import avatar4 from "../../../../assets/images/users/user-4.jpg";

const Comments = () => {
  return (
    <Card>
      <Card.Body>
        <Dropdown className="float-end" align="end">
          <Dropdown.Toggle
            as="a"
            className="card-drop cursor-pointer p-0 shadow-none"
          >
            <i className="dripicons-dots-3"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Latest</Dropdown.Item>
            <Dropdown.Item>Popular</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h4 className="mt-0 mb-3">Comments (258)</h4>
        <textarea
          className="form-control form-control-light mb-2"
          placeholder="Write message"
          id="example-textarea"
          rows={3}
        ></textarea>
        <div className="text-end">
          <div className="btn-group mb-2">
            <button
              type="button"
              className="btn btn-link btn-sm text-muted font-18"
            >
              <i className="dripicons-paperclip"></i>
            </button>
          </div>

          <div className="btn-group mb-2 ms-2">
            <button type="button" className="btn btn-primary btn-sm">
              Submit
            </button>
          </div>
        </div>

        <div className="mt-2">
          <div className="d-flex align-items-start">
            <img
              className="me-2 avatar-sm rounded-circle"
              src={avatar3}
              alt=""
            />
            <div className="w-100">
              <h5 className="mt-0">
                <Link to="/apps/contacts/profile" className="text-reset">
                  Jeremy Tomlinson
                </Link>{" "}
                <small className="text-muted">3 hours ago</small>
              </h5>
              Nice work, makes me think of The Money Pit.
              <br />
              <Link to="#" className="text-muted font-13 d-inline-block mt-2">
                <i className="mdi mdi-reply"></i> Reply
              </Link>
              <div className="d-flex align-items-start mt-3">
                <Link to="#" className="pe-2">
                  <img
                    src={avatar4}
                    className="avatar-sm rounded-circle"
                    alt=""
                  />
                </Link>
                <div className="w-100">
                  <h5 className="mt-0">
                    <Link to="/apps/contacts/profile" className="text-reset">
                      Kathleen Thomas
                    </Link>{" "}
                    <small className="text-muted">1 hours ago</small>
                  </h5>
                  i'm in the middle of a timelapse animation myself! (Very
                  different though.) Awesome stuff.
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-start mt-3">
            <img
              className="me-2 avatar-sm rounded-circle"
              src={avatar2}
              alt=""
            />
            <div className="w-100">
              <h5 className="mt-0">
                <Link to="/apps/contacts/profile" className="text-reset">
                  Jonathan Tiner
                </Link>{" "}
                <small className="text-muted">1 day ago</small>
              </h5>
              The parallax is a little odd but O.o that house build is awesome!!
              <br />
              <Link to="#" className="text-muted font-13 d-inline-block mt-2">
                <i className="mdi mdi-reply"></i> Reply
              </Link>
            </div>
          </div>

          <div className="d-flex align-items-start mt-3">
            <Link to="#" className="pe-2">
              <img
                src={avatar1}
                className="rounded-circle"
                alt="ge"
                height="31"
              />
            </Link>
            <div className="w-100">
              <input
                type="text"
                id="simpleinput"
                className="form-control form-control-sm form-control-light"
                placeholder="Add comment"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-2">
          <Link to="#" className="text-danger">
            <i className="mdi mdi-spin mdi-loading me-1 font-16"></i>
            Load more{" "}
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Comments;
