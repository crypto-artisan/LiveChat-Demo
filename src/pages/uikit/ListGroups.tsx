import React from "react";
import { Row, Col, Card, ListGroup, Badge } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";

const Basic = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Basic example</h4>

        <p className="sub-header">
          The most basic list group is an unordered list with list items and the
          proper classes. Build upon it with the options that follow, or with
          your own CSS as needed.
        </p>

        <ListGroup>
          <ListGroup.Item>
            <i className="mdi mdi-google-drive me-1"></i> Google Drive
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="mdi mdi-message-outline me-1"></i> Facebook Messenger
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="mdi mdi-apple me-1"></i> Apple Technology Company
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="mdi mdi-lifebuoy me-1"></i> Intercom Support System
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="mdi mdi-credit-card-outline me-1"></i> Paypal Payment
            Gateway
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

const ActiveItems = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Active items</h4>

        <p className="sub-header">
          Add <code>.active</code> to a <code>ListGroup.Item</code> to indicate
          the current active selection.
        </p>

        <ListGroup>
          <ListGroup.Item className="active">
            <i className="uil-google-drive-alt me-1"></i> Google Drive
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="uil-facebook-messenger me-1"></i> Facebook Messenger
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="uil-apple me-1"></i> Apple Technology Company
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="uil-intercom me-1"></i> Intercom Support System
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="uil-paypal me-1"></i> Paypal Payment Gateway
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

const DisabledItems = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Disabled items</h4>

        <p className="sub-header">
          Add <code>.disabled</code> to a <code>ListGroup.Item</code> to make it{" "}
          <em>appear</em> disabled.
        </p>

        <ListGroup>
          <ListGroup.Item className="disabled">
            <i className="mdi mdi-google-drive me-1"></i> Google Drive
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="mdi mdi-message-outline me-1"></i> Facebook Messenger
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="mdi mdi-apple me-1"></i> Apple Technology Company
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="mdi mdi-lifebuoy me-1"></i> Intercom Support System
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="mdi mdi-credit-card-outline me-1"></i> Paypal Payment
            Gateway
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

const LinksButtons = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Links and Buttons</h4>

        <p className="sub-header">
          Use <code>tag</code> attribute along with <code>action</code> to
          create <em>actionable</em> list group items with hover, disabled, and
          active states.
        </p>

        <ListGroup>
          <ListGroup.Item href="#" action className="active">
            Google Drive
          </ListGroup.Item>
          <ListGroup.Item href="#" action>
            Facebook Messenger
          </ListGroup.Item>
          <ListGroup.Item as="button" action>
            Apple Technology Company
          </ListGroup.Item>
          <ListGroup.Item as="button" action>
            Intercom Support System
          </ListGroup.Item>
          <ListGroup.Item as="button" action disabled>
            Paypal Payment Gateway
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

const Flush = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Flush</h4>

        <p className="sub-header">
          Add <code>flush</code> attribute to remove some borders and rounded
          corners to render list group items edge-to-edge in a parent container
          (e.g., cards).
        </p>

        <ListGroup variant="flush">
          <ListGroup.Item>Google Drive</ListGroup.Item>
          <ListGroup.Item>Facebook Messenger</ListGroup.Item>
          <ListGroup.Item>Apple Technology Company</ListGroup.Item>
          <ListGroup.Item>Intercom Support System</ListGroup.Item>
          <ListGroup.Item>Paypal Payment Gateway</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

const Horizontal = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Horizontal</h4>

        <p className="sub-header">
          Add <code>horizontal</code> prop to change the layout of list group
          items from vertical to horizontal across all breakpoints.
        </p>

        <ListGroup horizontal className="mb-3">
          <ListGroup.Item>Google</ListGroup.Item>
          <ListGroup.Item>Whatsapp</ListGroup.Item>
          <ListGroup.Item>Facebook</ListGroup.Item>
        </ListGroup>

        <ListGroup horizontal="sm" className="mb-3">
          <ListGroup.Item>Apple</ListGroup.Item>
          <ListGroup.Item>PayPal</ListGroup.Item>
          <ListGroup.Item>Intercom</ListGroup.Item>
        </ListGroup>

        <ListGroup horizontal="md">
          <ListGroup.Item>Google</ListGroup.Item>
          <ListGroup.Item>Whatsapp</ListGroup.Item>
          <ListGroup.Item>Facebook</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

const Contextual = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Contextual classes</h4>

        <p className="sub-header">
          Use contextual classes to style list items with a stateful background
          and color.
        </p>

        <ListGroup>
          <ListGroup.Item variant="link">
            Dapibus ac facilisis in
          </ListGroup.Item>
          <ListGroup.Item variant="primary">
            A simple primary list group item
          </ListGroup.Item>
          <ListGroup.Item variant="secondary">
            A simple secondary list group item
          </ListGroup.Item>
          <ListGroup.Item variant="success">
            A simple success list group item
          </ListGroup.Item>
          <ListGroup.Item variant="info">
            A simple info list group item
          </ListGroup.Item>
          <ListGroup.Item variant="warning">
            A simple warning list group item
          </ListGroup.Item>
          <ListGroup.Item variant="danger">
            A simple danger list group item
          </ListGroup.Item>
          <ListGroup.Item variant="light">
            A simple light list group item
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            A simple dark list group item
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

const ContextualLinks = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Contextual classes with Link</h4>

        <p className="sub-header">
          Use contextual classes to style list items with a stateful background
          and color.
        </p>

        <ListGroup>
          <ListGroup.Item variant="link" as="a" href="#" action>
            Porta ac consectetur ac
          </ListGroup.Item>
          <ListGroup.Item variant="primary" as="a" href="#" action>
            A simple primary list group item
          </ListGroup.Item>
          <ListGroup.Item variant="secondary" as="a" href="#" action>
            A simple secondary list group item
          </ListGroup.Item>
          <ListGroup.Item variant="success" as="a" href="#" action>
            A simple success list group item
          </ListGroup.Item>
          <ListGroup.Item variant="info" as="a" href="#" action>
            A simple info list group item
          </ListGroup.Item>
          <ListGroup.Item variant="warning" as="a" href="#" action>
            A simple warning list group item
          </ListGroup.Item>
          <ListGroup.Item variant="danger" as="a" href="#" action>
            A simple danger list group item
          </ListGroup.Item>
          <ListGroup.Item variant="light" as="a" href="#" action>
            A simple light list group item
          </ListGroup.Item>
          <ListGroup.Item variant="dark" as="a" href="#" action>
            A simple dark list group item
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

const CustomContent = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Custom content</h4>

        <p className="sub-header">
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of flexbox utilities.
        </p>

        <ListGroup>
          <ListGroup.Item active>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1 text-white">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

const Badges = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">With badges</h4>

        <p className="sub-header">
          Add badges to any list group item to show unread counts, activity, and
          more with the help of some utilities.
        </p>

        <ListGroup>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            Gmail Emails{" "}
            <Badge pill className="badge bg-primary">
              14
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            Pending Payments{" "}
            <Badge pill className="badge bg-success">
              2
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            Action Needed{" "}
            <Badge pill className="badge bg-danger">
              99+
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            Payments Done{" "}
            <Badge pill className="badge bg-success">
              20+
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            Messages{" "}
            <Badge pill className="badge bg-warning">
              16+
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

const CheckboxesandRadios = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Checkboxes and radios</h4>
          <p className="sub-header">
            And if you want <code>&lt;label&gt;</code>s as the{" "}
            <code>.list-group-item</code> for large hit areas, you can do that,
            too.
          </p>

          <ListGroup>
            <ListGroup.Item>
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              First checkbox
            </ListGroup.Item>
            <ListGroup.Item>
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              Second checkbox
            </ListGroup.Item>
            <ListGroup.Item>
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              Third checkbox
            </ListGroup.Item>
            <ListGroup.Item>
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              Fourth checkbox
            </ListGroup.Item>
            <ListGroup.Item>
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              Fifth checkbox
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

const Numbered = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Numbered List</h4>
          <p className="sub-header">
            Numbers are generated by <code>counter-reset</code> on the{" "}
            <code>&lt;ol&gt;</code>, and then styled and placed with a{" "}
            <code>::before</code> psuedo-element on the <code>&lt;li&gt;</code>{" "}
            with <code>counter-increment</code> and <code>content</code>.
          </p>

          <ListGroup as="ol" className="list-group-numbered">
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge pill className="badge bg-primary">
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge pill className="badge bg-primary">
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge pill className="badge bg-primary">
                14
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

const ListGroups = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Base UI", path: "/ui/listgroups" },
          { label: "List Group", path: "/ui/listgroups", active: true },
        ]}
        title={"List Group"}
      />

      <Row>
        <Col xl={4}>
          <Basic />
        </Col>

        <Col xl={4}>
          <ActiveItems />
        </Col>

        <Col xl={4}>
          <DisabledItems />
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <LinksButtons />
        </Col>
        <Col xl={4}>
          <Flush />
        </Col>
        <Col xl={4}>
          <Horizontal />
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <Contextual />
        </Col>
        <Col xl={4}>
          <ContextualLinks />
        </Col>
        <Col xl={4}>
          <CustomContent />
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <Badges />
        </Col>
        <Col xl={4}>
          <CheckboxesandRadios />
        </Col>
        <Col xl={4}>
          <Numbered />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ListGroups;
