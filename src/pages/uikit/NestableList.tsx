import React, { useState } from "react";
import Nestable from "react-nestable";
import { Row, Col, Card } from "react-bootstrap";

// styles
import "react-nestable/dist/styles/index.css";

// components
import PageTitle from "../../components/PageTitle";

const items = [
  { id: 0, text: "Choose a smartwatch" },
  {
    id: 1,
    text: "Send design for review",
    children: [
      { id: 2, text: " Coffee with the team" },
      { id: 3, text: " Ready my new work" },
      {
        id: 4,
        text: " Make a wireframe",
        children: [
          { id: 5, text: "  Video app redesign" },
          { id: 6, text: " iOS apps design completed" },
          { id: 7, text: "  Dashboard design started" },
        ],
      },
      { id: 8, text: " Homepage design" },
      { id: 9, text: " Developed UI Kit" },
    ],
  },
];

const items2 = [
  { id: 0, text: "Item 13" },
  { id: 1, text: "Item 14" },
  {
    id: 2,
    text: "Item 15",
    children: [
      { id: 3, text: "Item 16" },
      { id: 4, text: "Item 17" },
      { id: 5, text: "Item 18" },
    ],
  },
];

interface RenderItemProps {
  item: Record<string, any>;
  collapseIcon: React.ReactNode;
  handler: React.ReactNode;
}

const RenderItem = ({ item, collapseIcon, handler }: RenderItemProps) => {
  return (
    <div className="dd-list">
      <div className="dd-item">
        <div className="dd-handle">
          {handler}
          {collapseIcon}
          {item.text}
        </div>
      </div>
    </div>
  );
};

const NestableList = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Extended UI", path: "/extended-ui/nestable" },
          {
            label: "Nestable List",
            path: "/extended-ui/nestable",
            active: true,
          },
        ]}
        title={"Nestable List"}
      />

      <Row>
        <Col lg={12}>
          <div className="text-start">
            <button
              type="button"
              className="btn btn-blue btn-sm waves-effect mb-3 waves-light me-1"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? "Expand all" : "Collapse all"}
            </button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h4 className="header-title">Nestable Lists 1</h4>
                  <p className="sub-header">
                    Drag & drop hierarchical list with mouse and touch
                    compatibility
                  </p>
                  <Nestable
                    items={items}
                    renderItem={RenderItem}
                    className="custom-dd dd font-13"
                    collapsed={isCollapsed}
                  />
                </Col>
                <Col md={6}>
                  <h4 className="header-title">Nestable Lists 2</h4>
                  <p className="sub-header">
                    Drag & drop hierarchical list with mouse and touch
                    compatibility
                  </p>
                  <Nestable
                    items={items2}
                    renderItem={RenderItem}
                    className="font-13"
                    handler={
                      <span className="dragula-handle text-muted me-3 font-20" />
                    }
                    collapsed={isCollapsed}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default NestableList;
