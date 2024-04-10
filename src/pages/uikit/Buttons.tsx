import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";

interface ButtonsType {
  name: string;
  color: string;
}

const buttonVariants: ButtonsType[] = [
  {
    name: "Primary",
    color: "primary",
  },
  {
    name: "Success",
    color: "success",
  },
  {
    name: "Info",
    color: "info",
  },
  {
    name: "Warning",
    color: "warning",
  },
  {
    name: "Danger",
    color: "danger",
  },
  {
    name: "Dark",
    color: "dark",
  },
  {
    name: "Blue",
    color: "blue",
  },
  {
    name: "Pink",
    color: "pink",
  },
  {
    name: "Secondary",
    color: "secondary",
  },
];

const DefaultButtons = () => {
  return (
    <>
      <h4 className="header-title">Default Buttons</h4>
      <p className="sub-header">
        Use the button classes on an <code>&lt;a&gt;</code>,{" "}
        <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> element.
      </p>

      <div className="button-list">
        {(buttonVariants || []).map((button, index) => {
          return (
            <Button
              key={index}
              variant={button.color}
              className="waves-effect waves-light"
            >
              {button.name}
            </Button>
          );
        })}
        <Button variant="light" className="waves-effect waves-light">
          Light
        </Button>
        <Button variant="white" className="waves-effect waves-light">
          White
        </Button>
        <Button variant="link">Link</Button>
      </div>
    </>
  );
};

const RoundedButtons = () => {
  return (
    <>
      <h4 className="header-title">Rounded Button</h4>
      <p className="sub-header">
        Add <code>.rounded-pill</code> to default button to get rounded corners.
      </p>

      <div className="button-list">
        {(buttonVariants || []).map((button, index) => {
          return (
            <Button
              key={index}
              variant={button.color}
              className="rounded-pill waves-effect waves-light"
            >
              {button.name}
            </Button>
          );
        })}
        <Button
          variant="light"
          className="rounded-pill waves-effect waves-light"
        >
          Light
        </Button>
        <Button
          variant="white"
          className="rounded-pill waves-effect waves-light"
        >
          White
        </Button>
      </div>
    </>
  );
};

const OutlineButtons = () => {
  return (
    <>
      <h4 className="header-title">Outline Buttons</h4>
      <p className="sub-header">
        Use a classes <code>.btn-outline-**</code> to quickly create a bordered
        buttons.
      </p>

      <div className="button-list">
        {(buttonVariants || []).map((button, index) => {
          return (
            <Button
              key={index}
              variant={"outline-" + button.color}
              className="waves-effect waves-light"
            >
              {button.name}
            </Button>
          );
        })}
      </div>
    </>
  );
};

const OutlineRoundedButtons = () => {
  return (
    <>
      <h4 className="header-title">Outline Rounded Button</h4>
      <p className="sub-header">
        Add <code>.rounded-pill</code> to default button to get rounded corners.
      </p>

      <div className="button-list">
        {(buttonVariants || []).map((button, index) => {
          return (
            <Button
              key={index}
              variant={"outline-" + button.color}
              className="rounded-pill"
            >
              {button.name}
            </Button>
          );
        })}
      </div>
    </>
  );
};

const SoftButtons = () => {
  return (
    <>
      <h4 className="header-title">Soft Buttons</h4>
      <p className="sub-header">
        Use a classes <code>.btn-soft-**</code> to quickly create buttons with
        soft background.
      </p>

      <div className="button-list">
        {(buttonVariants || []).map((button, index) => {
          return (
            <Button
              key={index}
              variant={"soft-" + button.color}
              className="waves-effect waves-light"
            >
              {button.name}
            </Button>
          );
        })}
      </div>
    </>
  );
};

const OutlineSoftButtons = () => {
  return (
    <>
      <h4 className="header-title">Soft Rounded Buttons</h4>
      <p className="sub-header">
        Add <code>.rounded-pill</code> to default button to get rounded corners.
      </p>

      <div className="button-list">
        {(buttonVariants || []).map((button, index) => {
          return (
            <Button
              key={index}
              variant={"soft-" + button.color}
              className="rounded-pill waves-effect waves-light"
            >
              {button.name}
            </Button>
          );
        })}
      </div>
    </>
  );
};

const ButtonsWithLabels = () => {
  const buttons = [
    {
      name: "Success",
      variant: "success",
      icon: "mdi mdi-check-all",
    },
    {
      name: "Danger",
      variant: "danger",
      icon: "mdi mdi-close-circle-outline",
    },
    {
      name: "Info",
      variant: "info",
      icon: "mdi mdi-alert-circle-outline",
    },
    {
      name: "Warning",
      variant: "warning",
      icon: "mdi mdi-alert",
    },
  ];
  return (
    <>
      <h4 className="header-title">Buttons Labels</h4>
      <p className="sub-header">
        Put <code>&lt;span&gt;</code> with class <code>.btn-label</code> and any{" "}
        <code>icon</code> inside it. If you want to put icon on right side then
        add class <code>.btn-label-right</code> in <code>&lt;span&gt;</code>
      </p>

      <div className="button-list">
        {(buttons || []).map((button, index) => {
          return (
            <Button
              key={index}
              variant={button.variant}
              className="waves-effect waves-light"
            >
              <span className="btn-label">
                <i className={button.icon}></i>
              </span>
              {button.name}
            </Button>
          );
        })}
      </div>
      <br />
      <div className="button-list">
        {(buttons || []).map((button, index) => {
          return (
            <Button
              key={index}
              variant={button.variant}
              className="waves-effect waves-light"
            >
              {button.name}
              <span className="btn-label-right">
                <i className={button.icon}></i>
              </span>
            </Button>
          );
        })}
      </div>
    </>
  );
};

const RoundedButtonsWithLabels = () => {
  const buttons = [
    {
      name: "Success",
      variant: "success",
      icon: "mdi mdi-check-all",
    },
    {
      name: "Danger",
      variant: "danger",
      icon: "mdi mdi-close-circle-outline",
    },
    {
      name: "Info",
      variant: "info",
      icon: "mdi mdi-alert-circle-outline",
    },
    {
      name: "Warning",
      variant: "warning",
      icon: "mdi mdi-alert",
    },
  ];
  return (
    <>
      <h4 className="header-title">Outline Rounded Button</h4>
      <p className="sub-header">
        Add <code>.rounded-pill</code> to default button to get rounded corners.
      </p>

      <div className="button-list">
        {(buttons || []).map((button, index) => {
          return (
            <Button
              key={index}
              variant={button.variant}
              className="rounded-pill waves-effect waves-light"
            >
              <span className="btn-label">
                <i className={button.icon}></i>
              </span>
              {button.name}
            </Button>
          );
        })}
      </div>
      <br />
      <div className="button-list">
        {(buttons || []).map((button, index) => {
          return (
            <Button
              key={index}
              variant={button.variant}
              className="rounded-pill waves-effect waves-light"
            >
              {button.name}
              <span className="btn-label-right">
                <i className={button.icon}></i>
              </span>
            </Button>
          );
        })}
      </div>
    </>
  );
};

const ButtonWidths = () => {
  return (
    <>
      <h4 className="header-title">Button Width</h4>
      <p className="sub-header">
        Add <code>.rounded-pill</code> to default button to get rounded corners.
      </p>

      <div className="button-list">
        <Button variant="primary" className="width-xs waves-effect waves-light">
          xs
        </Button>
        <Button variant="success" className="width-sm waves-effect waves-light">
          Small
        </Button>
        <Button variant="info" className="width-md waves-effect waves-light">
          Middle
        </Button>
        <Button variant="warning" className="width-lg waves-effect waves-light">
          Large
        </Button>
        <Button variant="danger" className="width-xl waves-effect waves-light">
          Extra Large
        </Button>
      </div>
    </>
  );
};

const ButtonSizes = () => {
  return (
    <>
      <h4 className="header-title">Button-Sizes</h4>
      <p className="text-muted font-14">
        Add <code>size="lg"</code>, <code>size="sm"</code> for additional sizes.
      </p>

      <div className="button-list">
        <Button size="lg" variant="pink" className="waves-effect waves-light">
          Btn Large
        </Button>
        <Button variant="secondary" className="waves-effect waves-light">
          Btn Normal
        </Button>
        <Button size="sm" variant="blue" className="waves-effect waves-light">
          Btn Small
        </Button>
        <Button variant="warning" className="btn-xs waves-effect waves-light">
          Btn Xs
        </Button>
      </div>
    </>
  );
};

const DisabledButton = () => {
  return (
    <>
      <h4 className="header-title">Button Disabled</h4>
      <p className="text-muted font-14">
        Add the <code>disabled</code> prop to <code>&lt;Button&gt;</code>{" "}
        buttons.
      </p>

      <div className="button-list">
        <Button disabled variant="primary">
          Primary
        </Button>
        <Button disabled variant="success">
          Success
        </Button>
        <Button disabled variant="info">
          Info
        </Button>
        <Button disabled variant="warning">
          Warning
        </Button>
      </div>
    </>
  );
};

const IconButtons = () => {
  return (
    <>
      <h4 className="header-title">Icon Buttons</h4>
      <p className="text-muted font-14">Icon only button.</p>

      <div className="button-list">
        <Button variant="success">
          <i className="mdi mdi-heart-half-full"></i>
        </Button>
        <Button variant="danger">
          <i className="mdi mdi-close"></i>
        </Button>
        <Button variant="info">
          <i className="mdi mdi-music"></i>
        </Button>
        <Button variant="warning">
          <i className="mdi mdi-star"></i>
        </Button>
        <Button variant="blue">
          <i className="mdi mdi-cog"></i>
        </Button>
      </div>

      <br />
      <div className="button-list">
        <Button variant="success">
          <i className="mdi mdi-heart me-1"></i>Like
        </Button>
        <Button variant="dark">
          <i className="mdi mdi-email-outline me-1"></i>Share
        </Button>
        <Button variant="info">
          <i className="mdi mdi-cloud-outline me-1"></i>Cloud Hosting
        </Button>
        <Button variant="warning">
          Donate <i className="mdi mdi-currency-btc"></i>
        </Button>
      </div>
    </>
  );
};

const BlockButton = () => {
  return (
    <>
      <h4 className="header-title mt-4">Block Buttons</h4>
      <p className="text-muted font-14">
        Create block level buttons by adding class <code>.d-grid</code> to
        parent div.
      </p>

      <div className="button-list pe-xl-4 d-grid">
        <Button
          variant="primary"
          size="lg"
          className="waves-effect waves-light"
        >
          Block Button
        </Button>
        <Button variant="pink" className="waves-effect waves-light">
          Block Button
        </Button>
        <Button
          variant="success"
          size="sm"
          className="waves-effect waves-light"
        >
          Block Button
        </Button>
      </div>
    </>
  );
};

const ButtonGroups = () => {
  return (
    <>
      <h4 className="header-title">Button Group</h4>
      <p className="text-muted font-14">
        Wrap a series of buttons with <code>&lt;Button&gt;</code> in{" "}
        <code>&lt;ButtonGroup&gt;</code>.
      </p>

      <ButtonGroup className="mb-2">
        <Button variant="light">Left</Button>
        <Button variant="light">Middle</Button>
        <Button variant="light">Right</Button>
      </ButtonGroup>

      <br />

      <ButtonGroup className="mb-2 me-1">
        <Button variant="light">1</Button>
        <Button variant="light">2</Button>
        <Button variant="light">3</Button>
        <Button variant="light">4</Button>
      </ButtonGroup>
      <ButtonGroup className="mb-2 me-1">
        <Button variant="light">5</Button>
        <Button variant="light">6</Button>
        <Button variant="light">7</Button>
      </ButtonGroup>
      <ButtonGroup className="mb-2">
        <Button variant="light">8</Button>
      </ButtonGroup>

      <br />

      <ButtonGroup className="mb-2">
        <Button variant="light">1</Button>
        <Button variant="primary">2</Button>
        <Button variant="light">3</Button>
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle variant="light">
            Dropdown <i className="mdi mdi-chevron-down"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
            <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>

      <Row>
        <Col md={3}>
          <ButtonGroup vertical>
            <Button variant="light">Top</Button>
            <Button variant="light">Middle</Button>
            <Button variant="light">Bottom</Button>
          </ButtonGroup>
        </Col>
        <Col md={3}>
          <ButtonGroup vertical>
            <Button variant="light">Button 1</Button>
            <Button variant="light">Button 2</Button>
            <DropdownButton as={ButtonGroup} title="Button 3" variant="light">
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </Col>
      </Row>
    </>
  );
};

const Buttons = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Base UI", path: "/ui/buttons" },
          { label: "Buttons", path: "/ui/buttons", active: true },
        ]}
        title={"Buttons"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={6}>
                  <DefaultButtons />
                </Col>
                <Col xl={6} className="mt-xl-0 mt-3">
                  <RoundedButtons />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={6}>
                  <OutlineButtons />
                </Col>
                <Col xl={6} className="mt-xl-0 mt-3">
                  <OutlineRoundedButtons />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={6}>
                  <SoftButtons />
                </Col>
                <Col xl={6} className="mt-xl-0 mt-3">
                  <OutlineSoftButtons />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={6}>
                  <ButtonsWithLabels />
                </Col>
                <Col xl={6} className="mt-xl-0 mt-3">
                  <RoundedButtonsWithLabels />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={4}>
                  <ButtonWidths />
                </Col>
                <Col xl={4} className="mt-xl-0 mt-3">
                  <ButtonSizes />
                </Col>
                <Col xl={4} className="mt-xl-0 mt-3">
                  <DisabledButton />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={6}>
                  <IconButtons />
                  <BlockButton />
                </Col>
                <Col xl={6} className="mt-xl-0 mt-3">
                  <ButtonGroups />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Buttons;
