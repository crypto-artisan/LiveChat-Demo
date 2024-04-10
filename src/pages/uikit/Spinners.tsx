import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import Spinner from "../../components/Spinner";

const colors: string[] = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
  "blue",
  "pink",
];

const BorderedSpinners = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mt-0 header-title">Border spinner</h4>
        <p className="text-muted mb-4">
          Use the border spinners for a lightweight loading indicator.
        </p>
        <Spinner className="m-2" />
      </Card.Body>
    </Card>
  );
};

const GrowingSpinners = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mt-0 header-title">Growing spinner</h4>
        <p className="text-muted mb-4">
          If you don’t fancy a border spinner, switch to the grow spinner. While
          it doesn’t technically spin, it does repeatedly grow!
        </p>
        <Spinner type="grow" />
      </Card.Body>
    </Card>
  );
};

const Colors = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mt-0 header-title">Colors</h4>
        <p className="text-muted mb-4">
          All standard visual variants are available for both animation styles
          by setting the <code>variant</code> property.
        </p>

        {(colors || []).map((color, index) => {
          return <Spinner key={index} className="m-2" color={color} />;
        })}
      </Card.Body>
    </Card>
  );
};

const ColorGrowingSpinners = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mt-0 header-title">Color Growing spinner</h4>
        <p className="text-muted mb-4">
          Here it is in blue, along with the supported variants.
        </p>
        {(colors || []).map((color, index) => {
          return (
            <Spinner key={index} className="m-2" type="grow" color={color} />
          );
        })}
      </Card.Body>
    </Card>
  );
};

const AlignmentSpinners = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="mt-0 header-title">Alignment</h4>
          <p className="text-muted mb-4">
            Use flexbox utilities, float utilities, or text alignment utilities
            to place spinners exactly where you need them in any situation.
          </p>
          <div className="d-flex justify-content-center">
            <Spinner />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const SpinnerPlacements = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="mt-0 header-title">Placement</h4>
          <p className="text-muted mb-4">
            Use <code>flexbox utilities</code>, <code>float utilities</code>, or{" "}
            <code>text alignment</code> utilities to place spinners exactly
            where you need them in any situation.
          </p>
          <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <Spinner className="ms-auto" />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const SpinnersSizes = () => {
  const sizes: ("lg" | "md" | "sm")[] = ["lg", "md", "sm"];

  return (
    <Card>
      <Card.Body>
        <h4 className="mt-0 header-title">Size</h4>
        <p className="text-muted mb-4">
          Add <code>size</code> attribute to make spinner with sizes including
          lg, md or sm.
        </p>
        <div className="row">
          {(sizes || []).map((size, index) => {
            return (
              <div key={index} className="col-lg-6">
                <Spinner
                  className="text-primary m-2"
                  color="primary"
                  size={size}
                />
                <Spinner
                  className="text-secondary m-2"
                  type="grow"
                  size={size}
                />
              </div>
            );
          })}
          <div className="col-lg-6">
            <Spinner className="spinner-border-sm m-2" />
            <Spinner type="grow" className="spinner-grow-sm m-2" />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const ButtonSpinners = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mt-0 header-title">Buttons spinner</h4>
        <p className="text-muted mb-4">
          Use spinners within buttons to indicate an action is currently
          processing or taking place. You may also swap the text out of the
          spinner element and utilize button text as needed.
        </p>
        <Row>
          <Col md={6}>
            <div className="button-list mb-1 mb-sm-0">
              <Button color="primary" disabled>
                <Spinner
                  className="spinner-border-sm"
                  tag="span"
                  color="white"
                />
                <span className="visually-hidden">Loading...</span>
              </Button>

              <Button color="primary" disabled>
                <Spinner
                  className="spinner-border-sm me-1"
                  tag="span"
                  color="white"
                />
                Loading...
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="button-list">
              <Button color="primary" disabled>
                <Spinner
                  className="spinner-grow-sm"
                  tag="span"
                  color="white"
                  type="grow"
                />
                <span className="visually-hidden">Loading...</span>
              </Button>

              <Button color="primary" disabled>
                <Spinner
                  className="spinner-grow-sm me-1"
                  tag="span"
                  color="white"
                  type="grow"
                />
                Loading...
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const Spinners = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Base UI", path: "/ui/spinners" },
          { label: "Spinners", path: "/ui/spinners", active: true },
        ]}
        title={"Spinners"}
      />

      <Row>
        <Col lg={6}>
          <BorderedSpinners />
        </Col>
        <Col lg={6}>
          <GrowingSpinners />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Colors />
        </Col>

        <Col xl={6}>
          <ColorGrowingSpinners />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <AlignmentSpinners />
        </Col>
        <Col lg={6}>
          <SpinnerPlacements />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <SpinnersSizes />
        </Col>
        <Col lg={6}>
          <ButtonSpinners />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Spinners;
