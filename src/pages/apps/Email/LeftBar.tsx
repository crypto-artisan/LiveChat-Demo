import React from "react";
import { Link } from "react-router-dom";

interface LeftBarProps {
  totalUnreadEmails?: number;
  showAllEmails?: () => void;
  showStarredEmails?: () => void;
}

// left side panel
const LeftBar = ({
  totalUnreadEmails,
  showAllEmails,
  showStarredEmails,
}: LeftBarProps) => {
  return (
    <>
      <div className="mail-list mt-4">
        <Link to="#" className="text-danger fw-bold" onClick={showAllEmails}>
          <i className="dripicons-inbox me-2"></i>Inbox
          <span className="badge badge-soft-danger float-end ms-2">
            {totalUnreadEmails}
          </span>
        </Link>
        <Link to="#" onClick={showStarredEmails}>
          <i className="dripicons-star me-2"></i>Starred
        </Link>
        <Link to="#">
          <i className="dripicons-clock me-2"></i>Snoozed
        </Link>
        <Link to="#">
          <i className="dripicons-document me-2"></i>Draft
          <span className="badge badge-soft-info float-end ms-2">32</span>
        </Link>
        <Link to="#">
          <i className="dripicons-exit me-2"></i>Sent Mail
        </Link>
        <Link to="#">
          <i className="dripicons-trash me-2"></i>Trash
        </Link>
        <Link to="#">
          <i className="dripicons-tag me-2"></i>Important
        </Link>
        <Link to="#">
          <i className="dripicons-warning me-2"></i>Spam
        </Link>
      </div>

      <h6 className="mt-4">Labels</h6>

      <div className="list-group b-0 mail-list">
        <Link to="#" className="list-group-item border-0">
          <i className="mdi mdi-circle text-info me-2"></i>Web App
        </Link>
        <Link to="#" className="list-group-item border-0">
          <i className="mdi mdi-circle text-warning me-2"></i>Recharge
        </Link>
        <Link to="#" className="list-group-item border-0">
          <i className="mdi mdi-circle text-dark me-2"></i>Wallet Balance
        </Link>
        <Link to="#" className="list-group-item border-0">
          <i className="mdi mdi-circle text-primary me-2"></i>Friends
        </Link>
        <Link to="#" className="list-group-item border-0">
          <i className="mdi mdi-circle text-success me-2"></i>Family
        </Link>
      </div>
    </>
  );
};

export default LeftBar;
