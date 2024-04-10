import React from "react";
import { Link } from "react-router-dom";

// dummy data
import { UserResultType } from "./data";

interface UsersProps {
  users: UserResultType[];
}

const Users = ({ users }: UsersProps) => {
  return (
    <>
      {(users || []).map((user, index) => {
        return (
          <div key={index} className="search-item">
            <div className="d-flex align-items-start">
              <img
                className="d-flex me-3 rounded-circle"
                src={user.avatar}
                alt=""
                height="54"
              />
              <div className="w-100">
                <h5 className="mt-0">
                  <Link to="#" className="text-dark">
                    {user.userName}
                  </Link>
                </h5>
                <p className="font-13">
                  <b>Email:</b>
                  <span>
                    <Link to="#" className="text-muted">
                      {user.email}
                    </Link>
                  </span>
                </p>
                <p className="mb-0 font-13">
                  <b>Bio:</b>
                  <br />
                  <span className="text-muted">{user.bio}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}

      <ul className="pagination pagination-rounded justify-content-end mt-0">
        <li className="page-item">
          <Link className="page-link" to="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
            <span className="visually-hidden">Previous</span>
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="#">
            1
          </Link>
        </li>
        <li className="page-item active">
          <Link className="page-link" to="#">
            2
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="#">
            3
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="#">
            4
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="#">
            5
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="#" aria-label="Next">
            <span aria-hidden="true">»</span>
            <span className="visually-hidden">Next</span>
          </Link>
        </li>
      </ul>

      <div className="clearfix"></div>
    </>
  );
};

export default Users;
