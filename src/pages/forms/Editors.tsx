import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import SimpleMDEReact from "react-simplemde-editor";

// styles
import "easymde/dist/easymde.min.css";

// components
import PageTitle from "../../components/PageTitle";

const Editors = () => {
  const delay = 1000;
  const options = {
    autofocus: true,
    autosave: {
      enabled: true,
      uniqueId: "1",
      delay,
    },
  };

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Forms", path: "/forms/editors" },
          { label: "Editors", path: "/forms/editors", active: true },
        ]}
        title={"Editors"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">SimpleMDE</h4>
              <p className="text-muted font-14 mb-3">
                SimpleMDE is a light-weight, simple, embeddable, and beautiful
                JS markdown editor
              </p>

              <SimpleMDEReact id="1" options={options} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Editors;
