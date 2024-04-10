import React from "react";
import { Link } from "react-router-dom";
import { Card, Dropdown } from "react-bootstrap";

import avatar from "../../../assets/images/users/user-1.jpg";

const UserProfile = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Dropdown className="float-end" align="end">
            <Dropdown.Toggle as="a" className="card-drop cursor-pointer">
              <i className="mdi mdi-dots-horizontal"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Edit Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="d-flex align-self-start">
            <img
              className="d-flex align-self-start rounded me-2"
              src={avatar}
              alt=""
              height="48"
            />

            <div className="w-100 ps-1">
              <h5 className="mt-1 mb-0">Geneva McKnight</h5>
              <p className="mb-1 mt-1 text-muted">California, USA</p>
            </div>
          </div>

          <div className="list-group list-group-flush mt-2 font-15">
            <Link
              to="#"
              className="list-group-item list-group-item-action text-primary fw-semibold border-0"
            >
              <i className="mdi mdi-image-filter-black-white font-16 me-1"></i>{" "}
              News Feed
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action border-0"
            >
              <i className="mdi mdi-forum font-16 me-1"></i> Messages
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action border-0"
            >
              <i className="mdi mdi-calendar-month-outline font-16 me-1"></i>{" "}
              Events
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action border-0"
            >
              <i className="mdi mdi-account-multiple-outline font-16 me-1"></i>{" "}
              Friends
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action border-0"
            >
              <i className="mdi mdi-video font-16 me-1"></i> Watch Videos
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action border-0"
            >
              <i className="mdi mdi-image-multiple font-16 me-1"></i> Photos
            </Link>
            <Link
              to="#"
              className="list-group-item list-group-item-action border-0"
            >
              <i className="mdi mdi-storefront font-16 me-1"></i> Marketplaces
            </Link>
          </div>

          <h6 className="font-13 text-muted ps-3 my-3 text-uppercase">
            Pages you Like
          </h6>

          <div className="px-2">
            <div className="d-flex align-items-start mb-2">
              <div className="avatar-xs bg-success rounded-circle">
                <span className="avatar-title font-14 fw-bold text-white">
                  F
                </span>
              </div>
              <div className="w-100 ps-2">
                <span className="badge bg-pink mt-1 float-end">142</span>
                <h5 className="mt-1 mb-0 font-family-primary fw-semibold">
                  <Link to="#" className="text-reset">
                    Football Team
                  </Link>
                </h5>
              </div>
            </div>

            <div className="d-flex align-items-start mb-2">
              <div className="avatar-xs bg-warning rounded-circle">
                <span className="avatar-title font-14 fw-bold text-white">
                  U
                </span>
              </div>
              <div className="w-100 ps-2">
                <h5 className="mt-1 mb-0 font-family-primary fw-semibold">
                  <Link to="#" className="text-reset">
                    UI/UX Community
                  </Link>
                </h5>
              </div>
            </div>

            <div className="d-flex align-items-start mb-2">
              <div className="avatar-xs bg-info rounded-circle">
                <span className="avatar-title font-14 fw-bold text-white">
                  W
                </span>
              </div>
              <div className="w-100 ps-2">
                <h5 className="mt-1 mb-0 font-family-primary fw-semibold">
                  <Link to="#" className="text-reset">
                    Web Designer
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserProfile;
