import React from "react";
import { Card, Col, Row, Button, Placeholder } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";

import img1 from "../../assets/images/small/img-5.jpg";
import img2 from "../../assets/images/small/img-3.jpg";

const BasicPlaceholders = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Placeholders</h4>
          <p className="text-muted">
            In the example below, we take a typical card component and recreate
            it with placeholders applied to create a “loading card”. Size and
            proportions are the same between the two.
          </p>

          <Row>
            <Col md={6}>
              <Card className="border shadow-none">
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border shadow-none mb-0">
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

const PlaceholdersWidth = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Width</h4>
          <p className="text-muted">
            You can change the <code>width</code> through grid column classes,
            width utilities, or inline styles.
          </p>
          <Placeholder xs={6} />
          <Placeholder className="w-75" /> <br />
          <Placeholder style={{ width: "25%" }} />
        </Card.Body>
      </Card>
    </>
  );
};

const PlaceholdersAnimation = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Animation</h4>
          <p className="text-muted">
            Animate placeholders by setting the prop <code>animation</code> to{" "}
            <code>glow</code> or <code>wave</code> to better convey the
            perception of something being <em>actively</em> loaded.
          </p>

          <Placeholder as="p" animation="glow">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as="p" animation="wave" className="mb-0">
            <Placeholder xs={12} />
          </Placeholder>
        </Card.Body>
      </Card>
    </>
  );
};

const PlaceholdersWithVariants = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Color</h4>
          <p className="text-muted">
            By default, the <code>placeholder</code> uses{" "}
            <code>currentColor</code>. This can be overriden with a custom color
            or utility class.
          </p>

          <Placeholder xs={12} />

          <Placeholder xs={12} bg="primary" />
          <Placeholder xs={12} bg="secondary" />
          <Placeholder xs={12} bg="success" />
          <Placeholder xs={12} bg="danger" />
          <Placeholder xs={12} bg="warning" />
          <Placeholder xs={12} bg="info" />
          <Placeholder xs={12} bg="light" />
          <Placeholder xs={12} bg="dark" />
        </Card.Body>
      </Card>
    </>
  );
};

const PlaceholdersConcept = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">How it works</h4>
          <p className="text-muted">
            Create placeholders with the <code>Placeholder</code> component and
            a grid column prop (e.g., <code>xs={6}</code>) to set the{" "}
            <code>width</code>. They can replace the text inside an element or
            be added to an existing component via the <code>as</code> prop.
          </p>

          <p aria-hidden="true">
            <Placeholder xs={6} />
          </p>

          <Placeholder.Button xs={4} aria-hidden="true" />
        </Card.Body>
      </Card>
    </>
  );
};

const PlaceholdersWithSizes = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Sizing</h4>
          <p className="text-muted">
            The size of <code>placeholder</code>s are based on the typographic
            style of the parent element. Customize them with sizing props:{" "}
            <code>lg</code>, <code>sm</code>, or <code>xs</code>.
          </p>

          <Placeholder xs={12} size="lg" />
          <Placeholder xs={12} />
          <Placeholder xs={12} size="sm" />
          <Placeholder xs={12} size="xs" />
        </Card.Body>
      </Card>
    </>
  );
};

const Placeholders = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Base UI", path: "/ui/placeholders" },
          { label: "Placeholders", path: "/ui/placeholders", active: true },
        ]}
        title={"Placeholders"}
      />
      <Row>
        <Col xl={6}>
          <BasicPlaceholders />
          <PlaceholdersWidth />
        </Col>
        <Col xl={6}>
          <PlaceholdersWithVariants />
          <PlaceholdersConcept />
          <PlaceholdersWithSizes />
        </Col>
        <Col xl={6}>
          <PlaceholdersAnimation />
        </Col>
      </Row>
    </>
  );
};

export default Placeholders;
