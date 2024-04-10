import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import avatar3 from "../../../assets/images/users/user-3.jpg";
import avatar4 from "../../../assets/images/users/user-4.jpg";
import avatar5 from "../../../assets/images/users/user-2.jpg";
import avatar9 from "../../../assets/images/users/user-9.jpg";
import avatar10 from "../../../assets/images/users/user-5.jpg";

const Followers = () => {
  const peopleToFollow = [
    {
      id: 1,
      name: "Robb Stark",
      status: "The first king in the North",
      avatar: avatar5,
    },
    {
      id: 2,
      name: "Sansa Stark",
      status: "Lady of winterfall",
      avatar: avatar9,
    },
    {
      id: 3,
      name: "Cersei Lannister",
      status: "Queen of the Seven Kingdoms",
      avatar: avatar10,
    },
    {
      id: 4,
      name: "Daenerys Targaryen",
      status: "The dragon queen",
      avatar: avatar3,
    },
    {
      id: 5,
      name: "Adhamd Annaway",
      status: "I am available!",
      avatar: avatar4,
    },
  ];

  return (
    <>
      <Card>
        <Card.Body className="pb-0">
          <Dropdown className="float-end" align="end">
            <Dropdown.Toggle
              as="a"
              className="card-drop cursor-pointer p-0 shadow-none"
            >
              <i className="mdi mdi-dots-horizontal"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Today</Dropdown.Item>
              <Dropdown.Item>Yesterday</Dropdown.Item>
              <Dropdown.Item>Last Week</Dropdown.Item>
              <Dropdown.Item>Last Month</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h4 className="header-title mb-3">People you may know</h4>

          <div className="inbox-widget">
            {(peopleToFollow || []).map((people, index) => {
              return (
                <div key={index} className="inbox-item">
                  <div className="inbox-item-img">
                    <img
                      src={people.avatar}
                      className="rounded-circle"
                      alt=""
                    />
                  </div>
                  <p className="inbox-item-author">{people.name}</p>
                  <p className="inbox-item-text">{people.status}</p>
                  <p className="inbox-item-date">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary px-1 py-0"
                    >
                      {" "}
                      <i className="mdi mdi-plus font-16"></i>{" "}
                    </button>
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-2 mb-3 text-center">
            <Link to="#">
              View More<i className="mdi mdi-arrow-right ms-1"></i>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Followers;
