import React from "react";
import { Row, Col, Card, ProgressBar } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";

const Basic = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Basic Example</h4>
        <p className="sub-header"> Default progress bar.</p>

        <ProgressBar className="mb-2" />
        <ProgressBar now={33} className="mb-2" />
        <ProgressBar now={66} className="mb-2" />
        <ProgressBar now={100} className="mb-2" />
        <ProgressBar now={25} label={"25%"} className="mb-0" />
      </Card.Body>
    </Card>
  );
};

const ContextualAlternatives = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Contextual alternatives</h4>
        <p className="sub-header">
          Progress bars use some of the same button and alert classes for
          consistent styles.
        </p>

        <ProgressBar now={25} className="mb-2" variant="success" />
        <ProgressBar now={50} className="mb-2" variant="info" />
        <ProgressBar now={75} className="mb-2" variant="warning" />
        <ProgressBar now={100} className="mb-2" variant="danger" />
        <ProgressBar className="mb-0">
          <ProgressBar variant="primary" now={15} key={1} />
          <ProgressBar variant="success" now={30} key={2} />
          <ProgressBar variant="info" now={20} key={3} />
        </ProgressBar>
      </Card.Body>
    </Card>
  );
};

const Striped = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Striped example</h4>
        <p className="sub-header">
          Uses a gradient to create a striped effect.
        </p>

        <ProgressBar now={10} className="mb-2" striped />
        <ProgressBar now={25} className="mb-2" variant="success" striped />
        <ProgressBar now={50} className="mb-2" variant="info" striped />
        <ProgressBar now={75} className="mb-2" variant="warning" striped />
        <ProgressBar now={100} className="mb-2" variant="danger" striped />
        <ProgressBar now={75} className="mb-0" striped animated />
      </Card.Body>
    </Card>
  );
};

const Sizes = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Size example</h4>
        <p className="sub-header">
          We only set a <code>height</code> value on the <code>.progress</code>,
          so if you change that value the inner <code>.progress-bar</code> will
          automatically resize accordingly.
        </p>

        <ProgressBar now={70} className="mb-2" style={{ height: 1 }} />
        <ProgressBar now={30} className="progress-sm mb-2" />
        <ProgressBar now={25} className="mb-2 progress-md" variant="success" />
        <ProgressBar now={50} className="mb-2 progress-lg" variant="info" />
        <ProgressBar now={75} className="mb-2 progress-xl" variant="warning" />
        <ProgressBar now={38} className="mb-0 progress-xxl" variant="danger" />
      </Card.Body>
    </Card>
  );
};

const VerticalProgress = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Progressbar Vertical</h4>
          <p className="sub-header">
            Use class <code>.progress-vertical</code>.
          </p>
          <ProgressBar className="progress-vertical">
            <ProgressBar style={{ height: "10%" }} />
          </ProgressBar>
          <ProgressBar className="progress-vertical">
            <ProgressBar variant="success" style={{ height: "25%" }} />
          </ProgressBar>
          <ProgressBar className="progress-vertical progress-lg">
            <ProgressBar variant="info" style={{ height: "50%" }} />
          </ProgressBar>
          <ProgressBar className="progress-vertical progress-xl">
            <ProgressBar variant="warning" style={{ height: "75%" }} />
          </ProgressBar>
        </Card.Body>
      </Card>
    </>
  );
};

const VerticalBottomProgress = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Progressbar Vertical Bottom</h4>
          <p className="sub-header">
            Use class <code>.progress-vertical-bottom</code>.
          </p>
          <ProgressBar className="progress-vertical-bottom">
            <ProgressBar style={{ height: "10%" }} />
          </ProgressBar>
          <ProgressBar className="progress-vertical-bottom">
            <ProgressBar variant="success" style={{ height: "25%" }} />
          </ProgressBar>
          <ProgressBar className="progress-vertical-bottom progress-lg">
            <ProgressBar variant="info" style={{ height: "50%" }} />
          </ProgressBar>
          <ProgressBar className="progress-vertical-bottom progress-xl">
            <ProgressBar variant="warning" style={{ height: "75%" }} />
          </ProgressBar>
        </Card.Body>
      </Card>
    </>
  );
};

const ProgressBarExamples = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Base UI", path: "/ui/progressBar" },
          { label: "Progress", path: "/ui/progressBar", active: true },
        ]}
        title={"Progress"}
      />

      <Row>
        <Col md={6}>
          <Basic />
        </Col>
        <Col md={6}>
          <ContextualAlternatives />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Striped />
        </Col>
        <Col md={6}>
          <Sizes />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <VerticalProgress />
        </Col>
        <Col md={6}>
          <VerticalBottomProgress />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProgressBarExamples;
