import React from "react";
import { Row, Col, Card, Dropdown } from "react-bootstrap";
import classNames from "classnames";

// dummy data
import { TaskItems } from "./data";

interface TaskProps {
  task: TaskItems;
}

const Task = ({ task }: TaskProps) => {
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Dropdown className="float-end" align="end">
            <Dropdown.Toggle as="a" className="cursor-pointer text-muted">
              <i className="mdi mdi-dots-horizontal font-18"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <i className="mdi mdi-attachment me-1"></i>Attachment
              </Dropdown.Item>
              <Dropdown.Item>
                <i className="mdi mdi-pencil-outline me-1"></i>Edit
              </Dropdown.Item>
              <Dropdown.Item>
                <i className="mdi mdi-content-copy me-1"></i>Mark as Duplicate
              </Dropdown.Item>
              <Dropdown.Divider as="div" />
              <Dropdown.Item className="text-danger">
                <i className="mdi mdi-delete-outline me-1"></i>Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="form-check float-start">
            <input
              type="checkbox"
              className="form-check-input"
              id="completedCheck"
            />
            <label className="form-check-label" htmlFor="completedCheck">
              Mark as completed
            </label>
          </div>
          <div className="clearfix"></div>

          <h4>{task.title}</h4>

          <Row>
            <Col md={4}>
              <p className="mt-2 mb-1 text-muted">Assigned To</p>
              <div className="d-flex align-items-start">
                <img
                  src={task.assignee_avatar}
                  alt={task.assigned_to}
                  className="rounded-circle me-2"
                  height="24"
                />
                <div className="w-100">
                  <h5 className="mt-1 font-size-14">{task.assigned_to}</h5>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <p className="mt-2 mb-1 text-muted">Project Name</p>
              <div className="d-flex align-items-start">
                <i className="mdi mdi-briefcase-check-outline font-18 text-success me-1"></i>
                <div className="w-100">
                  <h5 className="mt-1 font-size-14">{task.project_name}</h5>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <p className="mt-2 mb-1 text-muted">Due Date</p>
              <div className="d-flex align-items-start">
                <i className="mdi mdi-calendar-month-outline font-18 text-success me-1"></i>
                <div className="w-100">
                  <h5 className="mt-1 font-size-14">{task.due_date}</h5>
                </div>
              </div>
            </Col>
          </Row>

          <h5 className="mt-3">Overview:</h5>

          <p className="text-muted mb-4">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer. Some
            quick example text to build on the card title and make up the bulk
            of the card's content. Some quick example text to build on the card
            title and make up.
          </p>

          <h5 className="mt-4 mb-2">Checklists/Sub-tasks</h5>

          {(task.checklists! || []).map((checklist, index) => (
            <div className="form-check mt-1" key={index}>
              <input
                type="checkbox"
                className="form-check-input"
                id={`checklist-${checklist.id}`}
                defaultChecked={checklist.completed}
              />
              <label
                className={classNames("form-check-label", {
                  strikethrough: checklist.completed,
                })}
                htmlFor={`checklist-${checklist.id}`}
              >
                {checklist.title}
              </label>
            </div>
          ))}
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Task;
