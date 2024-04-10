import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Dropdown,
  ButtonGroup,
  ProgressBar,
} from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle";

import QuickAccess from "./QuickAccess";
import Recent from "./Recent";

// dummy data
import { quickAccessFiles, recentFiles } from "./data";

// left side panel
const LeftSide = () => {
  return (
    <>
      <ButtonGroup className="d-block mb-2">
        <Dropdown>
          <Dropdown.Toggle className="btn btn-success waves-effect waves-light w-100">
            <i className="mdi mdi-plus"></i> Create New{" "}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <i className="mdi mdi-folder-plus-outline me-1"></i> Folder
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="mdi mdi-file-plus-outline me-1"></i> File
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="mdi mdi-file-document me-1"></i> Document
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="mdi mdi-upload me-1"></i> Choose File
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>

      <div className="mail-list mt-3">
        <Link to="#" className="list-group-item border-0">
          <i className="mdi mdi-folder-outline font-18 align-middle me-2"></i>My
          Files
        </Link>
        <Link to="#" className="list-group-item border-0">
          <i className="mdi mdi-google-drive font-18 align-middle me-2"></i>
          Google Drive
        </Link>
        <Link to="#" className="list-group-item border-0">
          <i className="mdi mdi-dropbox font-18 align-middle me-2"></i>Dropbox
        </Link>
        <Link to="#" className="list-group-item border-0">
          <i className="mdi mdi-share-variant font-18 align-middle me-2"></i>
          Share with me
        </Link>
        <Link to="#" className="list-group-item border-0">
          <i className="mdi mdi-clock-outline font-18 align-middle me-2"></i>
          Recent
        </Link>
        <Link to="#" className="list-group-item border-0">
          <i className="mdi mdi-star-outline font-18 align-middle me-2"></i>
          Starred
        </Link>
        <Link to="#" className="list-group-item border-0">
          <i className="mdi mdi-delete font-18 align-middle me-2"></i>Deleted
          Files
        </Link>
      </div>

      <div className="mt-5">
        <h4>
          <span className="badge rounded-pill p-1 px-2 badge-soft-secondary">
            FREE
          </span>
        </h4>
        <h6 className="text-uppercase mt-3">Storage</h6>
        <ProgressBar variant="success" now={46} className="my-2 progress-sm" />
        <p className="text-muted font-12 mb-0">7.02 GB (46%) of 15 GB used</p>
      </div>
    </>
  );
};

// FileManager
const FileManager = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Apps", path: "/apps/file-manager" },
          { label: "File Manager", path: "/apps/file-manager", active: true },
        ]}
        title={"File Manager"}
      />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="inbox-leftbar">
                <LeftSide />
              </div>

              <div className="inbox-rightbar">
                <div className="d-md-flex justify-content-between align-items-center">
                  <form className="search-bar">
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control form-control-light"
                        placeholder="Search files..."
                      />
                      <span className="mdi mdi-magnify"></span>
                    </div>
                  </form>
                  <div className="mt-2 mt-md-0">
                    <button type="submit" className="btn btn-sm btn-white me-1">
                      <i className="mdi mdi-format-list-bulleted"></i>
                    </button>
                    <button type="submit" className="btn btn-sm btn-white me-1">
                      <i className="mdi mdi-view-grid"></i>
                    </button>
                    <button type="submit" className="btn btn-sm btn-white me-1">
                      <i className="mdi mdi-information-outline"></i>
                    </button>
                  </div>
                </div>

                <QuickAccess quickAccessFiles={quickAccessFiles} />

                <Recent recentFiles={recentFiles} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default FileManager;
