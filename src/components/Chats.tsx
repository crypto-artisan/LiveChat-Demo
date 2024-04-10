import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

// dummy data
import { ChatItemTypes } from "../layouts/RightSidebar/data";

interface ChatsProps {
  chats: ChatItemTypes[];
}

const Chats = ({ chats }: ChatsProps) => {
  return (
    <>
      <form className="search-bar p-3">
        <div className="position-relative">
          <input type="text" className="form-control" placeholder="Search..." />
          <span className="mdi mdi-magnify"></span>
        </div>
      </form>

      <h6 className="fw-medium px-3 mt-2 text-uppercase">Group Chats</h6>

      <div className="p-2">
        <Link to="#" className="text-reset notification-item ps-3 mb-2 d-block">
          <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-success"></i>
          <span className="mb-0 mt-1">App Development</span>
        </Link>
        <Link to="#" className="text-reset notification-item ps-3 mb-2 d-block">
          <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-warning"></i>
          <span className="mb-0 mt-1">Office Work</span>
        </Link>
        <Link to="#" className="text-reset notification-item ps-3 mb-2 d-block">
          <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-danger"></i>
          <span className="mb-0 mt-1">Personal Group</span>
        </Link>
        <Link to="#" className="text-reset notification-item ps-3 d-block">
          <i className="mdi mdi-checkbox-blank-circle-outline me-1"></i>
          <span className="mb-0 mt-1">Freelance</span>
        </Link>
      </div>

      <h6 className="fw-medium px-3 mt-2 text-uppercase">
        Favourites
        <Link to="#" className="font-18 text-danger">
          <i className="float-end mdi mdi-plus-circle"></i>
        </Link>
      </h6>

      <div className="p-2">
        {(
          chats.filter((e: ChatItemTypes) => e.group === "favourites") || []
        ).map((item, index) => {
          return (
            <Link to="#" key={index} className="text-reset notification-item">
              <div className="d-flex align-items-start noti-user-item">
                <div className="position-relative me-2">
                  <img
                    src={item.avatar}
                    className="rounded-circle avatar-sm"
                    alt=""
                  />
                  <i
                    className={classNames(
                      "mdi mdi-circle user-status",
                      item.userStatus
                    )}
                  ></i>
                </div>
                <div className="overflow-hidden">
                  <h6 className="mt-0 mb-1 font-14">{item.userName}</h6>
                  <div className="font-13 text-muted">
                    <p className="mb-0 text-truncate">{item.message}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <h6 className="fw-medium px-3 mt-2 text-uppercase">
        Other Chats
        <Link to="#" className="font-18 text-danger">
          <i className="float-end mdi mdi-plus-circle"></i>
        </Link>
      </h6>

      <div className="p-2 pb-4">
        {(chats.filter((e: ChatItemTypes) => e.group === "other") || []).map(
          (item, index) => {
            return (
              <Link to="#" key={index} className="text-reset notification-item">
                <div className="d-flex align-items-start noti-user-item">
                  <div className="position-relative me-2">
                    <img
                      src={item.avatar}
                      className="rounded-circle avatar-sm"
                      alt=""
                    />
                    <i
                      className={classNames(
                        "mdi mdi-circle user-status",
                        item.userStatus
                      )}
                    ></i>
                  </div>
                  <div className="overflow-hidden">
                    <h6 className="mt-0 mb-1 font-14">{item.userName}</h6>
                    <div className="font-13 text-muted">
                      <p className="mb-0 text-truncate">{item.message}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          }
        )}

        <div className="text-center mt-3">
          <Link to="#" className="btn btn-sm btn-white">
            <i className="mdi mdi-spin mdi-loading me-2"></i>
            Load more
          </Link>
        </div>
      </div>
    </>
  );
};

export default Chats;
