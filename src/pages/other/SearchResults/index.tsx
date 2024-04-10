import React from "react";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle";

import AllResult from "./AllResult";
import Users from "./Users";

// dummy data
import { allResults, users } from "./data";

const SearchResults = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Extra Pages", path: "/pages/serach-results" },
          {
            label: "Search Results",
            path: "/pages/serach-results",
            active: true,
          },
        ]}
        title={"Search Results"}
      />

      <Row>
        <Col>
          <Card className="search-result-box">
            <Card.Body>
              <Row>
                <Col md={{ span: 8, offset: 2 }}>
                  <div className="pt-3 pb-4">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Admin Dashboard"
                      />
                      <button
                        type="button"
                        className="input-group-text btn waves-effect waves-light btn-blue"
                      >
                        <i className="fa fa-search me-1"></i> Search
                      </button>
                    </div>
                    <div className="mt-3 text-center">
                      <h4>Search Results For "Admin Dashboard"</h4>
                    </div>
                  </div>
                </Col>
              </Row>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav
                  as="ul"
                  variant="tabs"
                  className="nav nav-tabs nav-bordered"
                >
                  <Nav.Item as="li">
                    <Nav.Link eventKey="first" className="cursor-pointer">
                      All results{" "}
                      <span className="badge bg-success ms-1">325</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="second" className="cursor-pointer">
                      Users <span className="badge bg-danger ms-1">89</span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <AllResult allResults={allResults} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Users users={users} />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SearchResults;
