import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

interface PerformanceDetailsProps {
  performanceDetails: {
    id: number;
    user: string;
    position: string;
    leads: number;
    deals: number;
    tasks: number;
  }[];
}

const PerformanceDetails = ({
  performanceDetails,
}: PerformanceDetailsProps) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Dropdown className="float-end" align="end">
            <Dropdown.Toggle
              as="address"
              className="card-drop p-0 shadow-none cursor-pointer"
            >
              <i className="mdi mdi-dots-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h4 className="header-title mb-3">Top Performing</h4>

          <div className="table-responsive">
            <table className="table table-striped table-sm table-nowrap table-centered mb-0">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Leads</th>
                  <th>Deals</th>
                  <th>Tasks</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {(performanceDetails || []).map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <h5 className="font-15 my-1 fw-normal">{item.user}</h5>
                        <span className="text-muted mb-1 d-block font-13">
                          {item.position}
                        </span>
                      </td>
                      <td>{item.leads}</td>
                      <td>{item.deals}</td>
                      <td>{item.tasks}</td>
                      <td className="table-action">
                        <Link to="#" className="action-icon">
                          {" "}
                          <i className="mdi mdi-eye"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default PerformanceDetails;
