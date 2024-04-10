import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Dropdown,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import classNames from "classnames";

// Form Editor
import { EditorState, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// dummy data
import { TaskItemTypes } from "./data";

const Task = (task: TaskItemTypes) => {
  const [completed, setCompleted] = useState<boolean>(task.stage === "Done");
  const [editorState, setEditorState] = useState<any>();

  useEffect(() => {
    const html = `<p class="m-0">This is a task description with markup support</p> <ul> <li>Select a text to reveal the toolbar.</li> <li>Edit rich document on-the-fly, so elastic!</li> </ul> <p>End of air-mode area</p>`;
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, []);

  /**
   * On editor body change
   */
  const onEditorStateChange = (editorStates: any) => {
    setEditorState(editorStates);
  };

  /*
   * mark completd on selected task
   */
  const markCompleted = (e: any) => setCompleted(e.target.checked);

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Row>
            <Col>
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
                    <i className="mdi mdi-content-copy me-1"></i>Mark as
                    Duplicate
                  </Dropdown.Item>
                  <Dropdown.Divider />
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
                  checked={completed}
                  onChange={markCompleted}
                />
                <label className="form-check-label" htmlFor="completedCheck">
                  Mark as completed
                </label>
              </div>

              <div className="clearfix"></div>

              <hr className="my-2" />
            </Col>
          </Row>

          <Row>
            <Col>
              <h4>{task.title}</h4>

              <Row>
                <Col>
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

                <Col>
                  <p className="mt-2 mb-1 text-muted">Due Date</p>
                  <div className="d-flex align-items-start">
                    <i className="mdi mdi-calendar-month-outline font-18 text-success me-1"></i>
                    <div className="w-100">
                      <h5 className="mt-1 font-size-14">{task.due_date}</h5>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <Editor
                    toolbarHidden
                    toolbarClassName="draft-toolbar"
                    wrapperClassName="react-draft-wrapper"
                    editorStyle={{ minHeight: "150px" }}
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                  />
                </Col>
              </Row>

              <h5 className="mt-4 mb-2 font-size-16">Checklists/Sub-tasks</h5>

              {/* checklists */}
              {(task.checklists || []).map((checklist, index) => (
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

              <h5 className="mt-4 mb-2 font-size-16">Attachments</h5>

              {/* attachments */}
              {(task.attachments || []).map((f, index) => {
                const ext = f.filename.substr(f.filename.lastIndexOf(".") + 1);
                return (
                  <Card key={index} className="mb-1 shadow-none border">
                    <div className="p-2">
                      <Row className="align-items-center">
                        <Col className="col-auto">
                          <div className="avatar-sm">
                            <span className="avatar-title badge-soft-primary text-primary rounded">
                              .{ext}
                            </span>
                          </div>
                        </Col>
                        <Col className="ps-0">
                          <Link to="#" className="text-muted fw-bold">
                            {f.filename}
                          </Link>
                          <p className="mb-0 font-12">{f.size}</p>
                        </Col>
                        <Col className="col-auto">
                          <OverlayTrigger
                            placement="left"
                            overlay={<Tooltip id="download">Download</Tooltip>}
                          >
                            <Link
                              to="#"
                              id="btn-download"
                              className="btn btn-link font-16 text-muted"
                            >
                              <i className="dripicons-download"></i>
                            </Link>
                          </OverlayTrigger>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                );
              })}

              <div className="row mt-3">
                <div className="col">
                  <h5 className="mb-2 font-size-16">Comments</h5>

                  {/* comments */}
                  {(task.comments || []).map((comment, idx) => (
                    <React.Fragment key={idx}>
                      <div
                        key={idx}
                        className="d-flex align-items-start mt-3 p-1"
                      >
                        <img
                          src={comment.author_avatar}
                          className="me-2 rounded-circle"
                          height="36"
                          alt={comment.author}
                        />
                        <div className="w-100">
                          <h5 className="mt-0 mb-0 font-size-14">
                            <span className="float-end text-muted font-12">
                              {comment.posted_on}
                            </span>
                            {comment.author}
                          </h5>
                          <p className="mt-1 mb-0 text-muted">{comment.text}</p>
                        </div>
                      </div>
                      <hr />
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* add comments */}
              <Row className="mt-2">
                <Col>
                  <div className="border rounded">
                    <form action="#">
                      <textarea
                        rows={3}
                        className="form-control border-0 resize-none"
                        placeholder="Your comment..."
                      ></textarea>
                      <div className="p-2 bg-light d-flex justify-content-between align-items-center">
                        <div>
                          <Link
                            to="#"
                            className="btn btn-sm px-2 font-16 btn-light"
                          >
                            <i className="mdi mdi-cloud-upload-outline"></i>
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-sm px-2 font-16 btn-light"
                          >
                            <i className="mdi mdi-at"></i>
                          </Link>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-sm btn-success"
                        >
                          <i className="mdi mdi-send me-1"></i>Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Task;
