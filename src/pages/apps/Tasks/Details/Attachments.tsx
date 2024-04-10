import React from "react";
import { Card, Row, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

// components
import FileUploader from "../../../../components/FileUploader";

const Attachments = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Dropdown className="float-end" align="end">
            <Dropdown.Toggle as="a" className="text-muted cursor-pointer">
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

          <h5 className="card-title font-16 mb-3">Attachments</h5>

          <FileUploader />

          {/* Files */}
          <Card className="my-1 shadow-none border">
            <div className="p-2">
              <Row className="align-items-center">
                <div className="col-auto">
                  <div className="avatar-sm">
                    <span className="avatar-title badge-soft-primary text-primary rounded">
                      .ZIP
                    </span>
                  </div>
                </div>
                <div className="col ps-0">
                  <Link to="#" className="text-muted fw-bold">
                    Hyper-admin-design.zip
                  </Link>
                  <p className="mb-0 font-12">2.3 MB</p>
                </div>
                <div className="col-auto">
                  <Link to="#" className="btn btn-link font-16 text-muted">
                    <i className="dripicons-download"></i>
                  </Link>
                </div>
              </Row>
            </div>
          </Card>

          <Card className="mb-1 shadow-none border">
            <div className="p-2">
              <Row className="align-items-center">
                <div className="col-auto">
                  <div className="avatar-sm">
                    <span className="avatar-title badge-soft-primary text-primary rounded">
                      JPG
                    </span>
                  </div>
                </div>
                <div className="col ps-0">
                  <Link to="#" className="text-muted fw-bold">
                    Dashboard-design.jpg
                  </Link>
                  <p className="mb-0 font-12">3.5 MB</p>
                </div>
                <div className="col-auto">
                  <Link to="#" className="btn btn-link font-16 text-muted">
                    <i className="dripicons-download"></i>
                  </Link>
                </div>
              </Row>
            </div>
          </Card>

          <Card className="mb-0 shadow-none border">
            <div className="p-2">
              <Row className="align-items-center">
                <div className="col-auto">
                  <div className="avatar-sm">
                    <span className="avatar-title bg-secondary rounded">
                      .MP4
                    </span>
                  </div>
                </div>
                <div className="col ps-0">
                  <Link to="#" className="text-muted fw-bold">
                    Admin-bug-report.mp4
                  </Link>
                  <p className="mb-0 font-12">7.05 MB</p>
                </div>
                <div className="col-auto">
                  <Link to="#" className="btn btn-link font-16 text-muted">
                    <i className="dripicons-download"></i>
                  </Link>
                </div>
              </Row>
            </div>
          </Card>
        </Card.Body>
      </Card>
    </>
  );
};

export default Attachments;
