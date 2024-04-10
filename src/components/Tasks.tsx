import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

// dummy data
import { TasksItemTypes } from "../layouts/RightSidebar/data";

const Tasks = ({ tasks }: { tasks: TasksItemTypes[] }) => {
  const workingTasks = tasks.filter((task) => task.stage === "working");
  const upcomingTasks = tasks.filter((task) => task.stage === "upcoming");

  return (
    <>
      <h6 className="fw-medium p-3 m-0 text-uppercase">Working Tasks</h6>
      <div className="px-2">
        {(workingTasks || []).map((item, index) => {
          return (
            <Link
              key={index}
              to="#"
              className="text-reset item-hovered d-block p-2"
            >
              <p className="text-muted mb-0">
                {item.task}
                <span className="float-end">{item.progress}%</span>
              </p>
              <ProgressBar
                now={item.progress}
                variant={item.variant}
                className="mt-2"
                style={{ height: "4px" }}
              />
            </Link>
          );
        })}
      </div>

      <h6 className="fw-medium px-3 mb-0 mt-4 text-uppercase">
        Upcoming Tasks
      </h6>
      <div className="p-2">
        {(upcomingTasks || []).map((item, index) => {
          return (
            <Link
              key={index}
              to="#"
              className="text-reset item-hovered d-block p-2"
            >
              <p className="text-muted mb-0">
                {item.task}
                <span className="float-end">{item.progress}%</span>
              </p>
              <ProgressBar
                now={item.progress}
                variant={item.variant}
                className="mt-2"
                style={{ height: "4px" }}
              />
            </Link>
          );
        })}
      </div>

      <div className="p-3 mt-2 d-grid">
        <Link to="#" className="btn btn-success waves-effect waves-light">
          Create Task
        </Link>
      </div>
    </>
  );
};

export default Tasks;
