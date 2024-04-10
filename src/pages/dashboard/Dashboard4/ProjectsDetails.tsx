import React from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import classNames from "classnames";

// components
import { BasicPortlet } from "../../../components/Portlet";

// dummy data
import { ProjectDetailType } from "./data";

interface ProjectsDetailsProps {
  projectsDetails: ProjectDetailType[];
}

const ProjectsDetails = ({ projectsDetails }: ProjectsDetailsProps) => {
  return (
    <>
      <BasicPortlet cardTitle="Projects" titleClass="header-title">
        <div className="table-responsive">
          <table className="table table-centered table-nowrap table-borderless mb-0">
            <thead className="table-light">
              <tr>
                <th>Project Name</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>Team</th>
                <th>Status</th>
                <th>Clients</th>
              </tr>
            </thead>
            <tbody>
              {(projectsDetails || []).map((project, i) => {
                return (
                  <tr key={i}>
                    <td>{project.name}</td>
                    <td>{project.startDate}</td>
                    <td>{project.dueDate}</td>
                    <td>
                      <div className="avatar-group">
                        {(project.teamMembers || []).map((item, index) => {
                          return (
                            <OverlayTrigger
                              key={index}
                              placement="top"
                              overlay={
                                <Tooltip id={item.name}>{item.name}</Tooltip>
                              }
                            >
                              <Link to="#" className="avatar-group-item">
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
                      <span
                        className={classNames(
                          "badge bg-soft-info text-info p-1",
                          {
                            "bg-soft-info text-info":
                              project.status === "Work in Progress",
                            "bg-soft-warning text-warning":
                              project.status === "Pending",
                            "bg-soft-success text-success":
                              project.status === "Completed",
                            "bg-soft-dark text-dark":
                              project.status === "Coming Soon",
                          }
                        )}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td>{project.clients}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </BasicPortlet>
    </>
  );
};

export default ProjectsDetails;
