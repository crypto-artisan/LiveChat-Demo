import React, { useState } from "react";
import { Row, Col, Dropdown, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// components
import PageTitle from "../../../../components/PageTitle";

import TaskSection from "./Section";
import Task from "./Task";

// dummy data
import { todayTasks, upcomingTasks, otherTasks, TaskItemTypes } from "./data";

// Task List
const TaskList = () => {
  const [todayTask] = useState<TaskItemTypes[]>([...todayTasks]);
  const [upcomingTask] = useState<TaskItemTypes[]>([...upcomingTasks]);
  const [otherTask] = useState<TaskItemTypes[]>([...otherTasks]);
  const [selectedTask, setSelectedTask] = useState<TaskItemTypes>(
    todayTasks[0]
  );

  /**
   * Selects the task
   * @param {*} taks
   */
  const selectTask = (task: TaskItemTypes) => {
    setSelectedTask(task);
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Tasks", path: "/apps/tasks/list" },
          { label: "Tasks List", path: "/apps/tasks/list", active: true },
        ]}
        title={"Tasks List"}
      />
      <Row>
        <Col xl={8}>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Row>
                    <Col sm={3}>
                      <Link
                        to="#"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        <i className="fe-plus me-1"></i>Add New
                      </Link>
                    </Col>
                    <Col sm={9}>
                      <div className="float-sm-end mt-3 mt-sm-0">
                        <div className="d-inline-block mb-3 mb-sm-0 me-sm-2">
                          <form className="search-bar form-inline">
                            <div className="position-relative">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                              />
                              <span className="mdi mdi-magnify"></span>
                            </div>
                          </form>
                        </div>
                        <Dropdown className="d-inline-block" align="end">
                          <Dropdown.Toggle variant="light">
                            <i className="mdi mdi-filter-variant"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Due Date</Dropdown.Item>
                            <Dropdown.Item>Added Date</Dropdown.Item>
                            <Dropdown.Item>Assignee</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col>
                      {/* tasks */}
                      <div>
                        <TaskSection
                          title="Today"
                          tasks={todayTask}
                          selectTask={selectTask}
                        ></TaskSection>
                      </div>
                      <div className="mt-4">
                        <TaskSection
                          title="Upcoming"
                          tasks={upcomingTask}
                          selectTask={selectTask}
                        ></TaskSection>
                      </div>
                      <div className="mt-4 mb-4">
                        <TaskSection
                          title="Other"
                          tasks={otherTask}
                          selectTask={selectTask}
                        ></TaskSection>
                      </div>
                    </Col>
                  </Row>

                  <div className="row mt-4">
                    <div className="col-12">
                      <div className="text-center">
                        <Link to="#" className="btn btn-sm btn-white">
                          <i className="mdi mdi-spin mdi-loading me-2"></i>
                          Load more
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col xl={4}>
          <Task {...selectedTask} />
        </Col>
      </Row>
    </>
  );
};

export default TaskList;
