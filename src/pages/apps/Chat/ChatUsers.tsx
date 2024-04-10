import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import classnames from "classnames";
import SimpleBar from "simplebar-react";

// dummy data
import { users, ChatUser } from "./data";

import profilePic from "../../../assets/images/users/user-1.jpg";

interface ChatUsersProps {
  onUserSelect: (value: ChatUser) => void;
}

// ChatUsers
const ChatUsers = ({ onUserSelect }: ChatUsersProps) => {
  const [user, setUser] = useState<ChatUser[]>([...users]);
  const [selectedUser, setSelectedUser] = useState<ChatUser>(users[1]);

  /**
   * Search the user
   * @param {*} text
   */
  const search = (text: string) => {
    setUser(
      text
        ? [...users].filter(
            (u) => u.name!.toLowerCase().indexOf(text.toLowerCase()) >= 0
          )
        : [...users]
    );
  };

  /**
   * Activates the user
   * @param {*} user
   */
  const activateUser = (user: ChatUser) => {
    setSelectedUser(user);
    if (onUserSelect) {
      onUserSelect(user);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <div className="d-flex align-items-start mb-3">
            <img
              src={profilePic}
              className="me-2 rounded-circle"
              height="42"
              alt=""
            />
            <div className="w-100">
              <h5 className="mt-0 mb-0 font-15">
                <Link to="#" className="text-reset">
                  Geneva McKnight
                </Link>
              </h5>
              <p className="mt-1 mb-0 text-muted font-14">
                <small className="mdi mdi-circle text-success"></small> Online
              </p>
            </div>
            <Link to="#" className="text-reset font-20">
              <i className="mdi mdi-cog-outline"></i>
            </Link>
          </div>

          <form className="search-bar mb-3">
            <div className="position-relative">
              <input
                type="text"
                className="form-control form-control-light"
                placeholder="People, groups & messages..."
                onKeyUp={(e: any) => search(e.target.value)}
              />
              <span className="mdi mdi-magnify"></span>
            </div>
          </form>

          <h6 className="font-13 text-muted text-uppercase">Group Chats</h6>
          <div className="p-2">
            <Link to="#" className="text-reset mb-2 d-block">
              <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-success"></i>
              <span className="mb-0 mt-1">App Development</span>
            </Link>

            <Link to="#" className="text-reset mb-2 d-block">
              <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-warning"></i>
              <span className="mb-0 mt-1">Office Work</span>
            </Link>
          </div>

          <h6 className="font-13 text-muted text-uppercase">Contacts</h6>
          <Row>
            <Col>
              <SimpleBar style={{ height: "375px", width: "100%" }}>
                {(user || []).map((user, index) => {
                  return (
                    <Link
                      to="#"
                      key={index}
                      className="text-body"
                      onClick={(e: any) => {
                        activateUser(user);
                      }}
                    >
                      <div
                        className={classnames(
                          "d-flex",
                          "align-items-start",
                          "p-2",
                          {
                            "bg-light": user.id === selectedUser.id,
                          }
                        )}
                      >
                        <img
                          src={user.avatar}
                          className="me-2 rounded-circle"
                          height="42"
                          alt=""
                        />

                        <div className="w-100">
                          <h5 className="mt-0 mb-0 font-14">
                            <span className="float-end text-muted fw-normal font-12">
                              {user.lastMessageOn}
                            </span>
                            {user.name}
                          </h5>
                          <p className="mt-1 mb-0 text-muted font-14">
                            <span className="w-25 float-end text-end">
                              {user.totalUnread !== 0 && (
                                <span className="badge badge-soft-danger">
                                  {user.totalUnread}
                                </span>
                              )}
                            </span>
                            <span className="w-75">{user.lastMessage}</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </SimpleBar>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default ChatUsers;
