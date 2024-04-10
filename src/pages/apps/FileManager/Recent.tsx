import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";

// dummy data
import { RecentFileTypes } from "./data";

interface RecentProps {
  recentFiles: RecentFileTypes[];
}

const Recent = ({ recentFiles }: RecentProps) => {
  return (
    <>
      <div className="mt-3">
        <h5 className="mb-3">Recent</h5>

        <div className="table-responsive">
          <Table responsive className="table table-centered table-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th className="border-0">Name</th>
                <th className="border-0">Last Modified</th>
                <th className="border-0">Size</th>
                <th className="border-0">Owner</th>
                <th className="border-0">Members</th>
                <th className="border-0" style={{ width: "80px" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {(recentFiles || []).map((file, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <FeatherIcon icon={file.icon} className="icon-dual" />
                      <span className="ms-2 fw-semibold">
                        <Link to="#" className="text-reset">
                          {file.name}
                        </Link>
                      </span>
                    </td>
                    <td>
                      <p className="mb-0">{file.modifiedDate}</p>
                      <span className="font-12">by {file.modifiedBy}</span>
                    </td>
                    <td>{file.size}</td>
                    <td>{file.owner}</td>
                    <td>
                      <div className="avatar-group">
                        {(file.members || []).map((item, index) => {
                          return (
                            <OverlayTrigger
                              key={index}
                              placement="top"
                              overlay={
                                <Tooltip id={item.name}>{item.name}</Tooltip>
                              }
                            >
                              <Link to="#" className="avatar-group-item mb-0">
                                <img
                                  src={item.image}
                                  className="rounded-circle avatar-xs"
                                  alt="friend"
                                />
                              </Link>
                            </OverlayTrigger>
                          );
                        })}
                      </div>
                    </td>
                    <td>
                      <Dropdown className="btn-group" align="end">
                        <Dropdown.Toggle className="table-action-btn dropdown-toggle btn btn-light btn-xs">
                          <i className="mdi mdi-dots-horizontal"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <i className="mdi mdi-share-variant me-2 text-muted vertical-middle"></i>
                            Share
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <i className="mdi mdi-link me-2 text-muted vertical-middle"></i>
                            Get Sharable Link
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <i className="mdi mdi-pencil me-2 text-muted vertical-middle"></i>
                            Rename
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <i className="mdi mdi-download me-2 text-muted vertical-middle"></i>
                            Download
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <i className="mdi mdi-delete me-2 text-muted vertical-middle"></i>
                            Remove
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Recent;
