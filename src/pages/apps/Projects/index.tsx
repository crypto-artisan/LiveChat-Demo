import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
  Dropdown,
  ProgressBar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

// components
import PageTitle from "../../../components/PageTitle";

// dummy data
import { projects, ProjectsList } from "./data";

// single project
const SingleProject = (props: { project: ProjectsList }) => {
  const project = props.project || {};

  return (
    <Card className="project-box">
      <Card.Body>
        <Dropdown className="card-widgets" align="end">
          <Dropdown.Toggle
            as="a"
            className="cursor-pointer card-drop p-0 shadow-none"
          >
            <i className="mdi mdi-dots-horizontal m-0 text-muted h3"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <i className="mdi mdi-pencil me-1"></i>Edit
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="mdi mdi-delete me-1"></i>Delete
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="mdi mdi-email-outline me-1"></i>Invite
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="mdi mdi-exit-to-app me-1"></i>Leave
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h4 className="mt-0">
          <Link to="/apps/projects/details" className="text-dark">
            {project.title}
          </Link>
        </h4>
        <p className="text-muted text-uppercase">
          <i className="mdi mdi-account-circle"></i>{" "}
          <small>{project.companyName}</small>
        </p>

        <div
          className={classNames(
            "badge",
            {
              "bg-soft-success text-success": project.state === "Finished",
              "bg-soft-secondary text-secondary": project.state === "Ongoing",
            },
            "mb-3"
          )}
        >
          {project.state}
        </div>

        <p className="text-muted font-13 mb-3 sp-line-2">
          {project.shortDesc}...
          <Link to="#" className="fw-bold text-muted">
            view more
          </Link>
        </p>
        <p className="mb-1">
          <span className="pe-2 text-nowrap mb-2 d-inline-block">
            <i className="mdi mdi-format-list-bulleted-type text-muted me-1"></i>
            <b>{project.totalTasks}</b> Tasks
          </span>
          <span className="text-nowrap mb-2 d-inline-block">
            <i className="mdi mdi-comment-multiple-outline text-muted me-1"></i>
            <b>{project.totalComments}</b> Comments
          </span>
        </p>
        <div className="avatar-group mb-3">
          {(project.teamMembers || []).map((member, index) => {
            return (
              <OverlayTrigger
                key={index}
                placement="bottom"
                overlay={<Tooltip id={member.name}>{member.name}</Tooltip>}
              >
                <Link to="#" className="avatar-group-item">
                  <img
                    src={member.image}
                    className="rounded-circle avatar-sm"
                    alt=""
                  />
                </Link>
              </OverlayTrigger>
            );
          })}
        </div>
        <p className="mb-2 fw-semibold">
          Task completed:
          <span className="float-end">
            {project.taskCompleted}/{project.totalTasks}
          </span>
        </p>
        <ProgressBar
          now={project.progress}
          className="mb-1"
          style={{ height: "7px" }}
        />
      </Card.Body>
    </Card>
  );
};

const Projects = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Projects", path: "/apps/projects/list" },
          { label: "Projects List", path: "/apps/projects/list", active: true },
        ]}
        title={"Projects List"}
      />

      <Row className="mb-2">
        <Col sm={4}>
          <Link
            to="/apps/projects/create"
            className="btn btn-danger rounded-pill waves-effect waves-light mb-3"
          >
            <i className="mdi mdi-plus"></i> Create Project
          </Link>
        </Col>
        <Col sm={8}>
          <div className="text-sm-end">
            <div className="btn-group mb-3">
              <Button variant="primary">All</Button>
            </div>
            <ButtonGroup className="btn-group mb-3 ms-1">
              <Button variant="light">Ongoing</Button>
              <Button variant="light">Finished</Button>
            </ButtonGroup>

            <div className="btn-group mb-3 ms-2 d-none d-sm-inline-block">
              <Button variant="dark">
                <i className="mdi mdi-apps"></i>
              </Button>
            </div>
            <div className="btn-group mb-3 d-none d-sm-inline-block">
              <Button variant="link" className="text-dark">
                <i className="mdi mdi-format-list-bulleted-type"></i>
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        {(projects || []).map((project, i) => {
          return (
            <Col lg={4} key={"proj-" + project.id}>
              <SingleProject project={project} />
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col>
          <div className="text-center mb-3">
            <Link to="#" className="text-danger">
              <i className="mdi mdi-spin mdi-loading me-1"></i> Load more{" "}
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Projects;
