import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Toast,
  ToastContainer,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../components/PageTitle";

import logo from "../../assets/images/logo-sm.png";

const colors: string[] = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

const DefaultToasts = () => {
  const [show, setShow] = useState<boolean>(true);
  const [showTranslucent, setShowTranslucent] = useState<boolean>(true);
  const [showPlacement, setShowPlacement] = useState<boolean>(true);

  const [stacked, setStacked] = useState([
    {
      time: "just now",
      desc: "See? Just like this.",
    },
    {
      time: "2 seconds ago",
      desc: "Heads up, toasts will stack automatically",
    },
  ]);

  /*
   * handle close
   */
  const handleClose = (index: number) => {
    const list = [...stacked];
    list.splice(index, 1);
    setStacked(list);
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Bootstrap Toasts</h4>
        <p className="text-muted font-14">
          Push notifications to your visitors with a toast, a lightweight and
          easily customizable alert message.
        </p>

        <Row>
          <Col lg={6}>
            <h5 className="mb-2">Basic</h5>
            <p className="text-muted font-14">
              Toasts are as flexible as you need and have very little required
              markup. At a minimum, we require a single element to contain your
              “toasted” content and strongly encourage a dismiss button.
            </p>
            <div className="p-3">
              <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={3000}
                autohide
              >
                <Toast.Header>
                  <img
                    src={logo}
                    alt="brand-logo"
                    height="12"
                    className="me-1"
                  />
                  <strong className="me-auto">UBold</strong>
                  <small className="ms-5">11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
              </Toast>
            </div>
          </Col>

          <Col lg={6}>
            <h5 className="mb-2">Translucent</h5>
            <p className="text-muted font-14">
              Toasts are slightly translucent, too, so they blend over whatever
              they might appear over. For browsers that support the
              backdrop-filter CSS property, we’ll also attempt to blur the
              elements under a toast.
            </p>

            <div className="p-3 bg-light">
              <Toast
                onClose={() => setShowTranslucent(false)}
                show={showTranslucent}
                delay={4000}
                autohide
              >
                <Toast.Header>
                  <img
                    src={logo}
                    alt="brand-logo"
                    height="12"
                    className="me-1"
                  />
                  <strong className="me-auto">UBold</strong>
                  <small className="ms-5">11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
              </Toast>
            </div>
          </Col>
        </Row>

        {/* stacked */}
        <Row>
          <Col lg={6} className="mt-4">
            <h5 className="mb-2">Stacking</h5>
            <p className="text-muted font-14">
              When you have multiple toasts, we default to vertiaclly stacking
              them in a readable manner.
            </p>
            <div className="p-3">
              <div
                aria-live="polite"
                aria-atomic="true"
                style={{ position: "relative", minHeight: "200px" }}
              >
                <div
                  className="toast-container"
                  style={{ position: "absolute", top: 0, right: 0 }}
                >
                  {(stacked || []).map((item, index) => {
                    return (
                      <Toast
                        key={index}
                        onClose={() => handleClose(index)}
                        delay={5000}
                        autohide
                      >
                        <Toast.Header>
                          <img
                            src={logo}
                            alt="brand-logo"
                            height="12"
                            className="me-1"
                          />
                          <strong className="me-auto">UBold</strong>
                          <small className="ms-5">{item.time}</small>
                        </Toast.Header>
                        <Toast.Body>{item.desc}</Toast.Body>
                      </Toast>
                    );
                  })}
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="mt-4">
            <h5 className="mb-2">Placement</h5>
            <p className="text-muted font-14">
              Place toasts with custom CSS as you need them. The top right is
              often used for notifications, as is the top middle. If you’re only
              ever going to show one toast at a time, put the positioning styles
              right on the <code>.toast</code>.
            </p>

            <div className="p-3">
              <div
                aria-live="polite"
                aria-atomic="true"
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "200px" }}
              >
                <Toast
                  onClose={() => setShowPlacement(false)}
                  show={showPlacement}
                >
                  <Toast.Header>
                    <img
                      src={logo}
                      alt="brand-logo"
                      height="12"
                      className="me-1"
                    />
                    <strong className="me-auto">UBold</strong>
                    <small className="ms-5">1 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>
                    Heads up, toasts will stack automatically
                  </Toast.Body>
                </Toast>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const CustomToast = () => {
  const [showCustom1, setShowCustom1] = useState<boolean>(true);
  const [showCustom2, setShowCustom2] = useState<boolean>(true);
  const [showCustom3, setShowCustom3] = useState<boolean>(true);
  const [showCustom4, setShowCustom4] = useState<boolean>(true);

  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Custom content</h4>
          <p className="text-muted">
            Alternatively, you can also add additional controls and components
            to toasts.
          </p>
          <Toast
            className="d-flex align-items-center mt-4"
            show={showCustom1}
            onClose={() => setShowCustom1(false)}
            delay={3000}
            autohide
          >
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            <Button
              variant=""
              onClick={() => setShowCustom1(false)}
              className="btn-close ms-auto me-2"
            ></Button>
          </Toast>
          <Toast
            className="d-flex align-items-center text-white bg-primary border-0 mt-4"
            show={showCustom2}
            onClose={() => setShowCustom2(false)}
            delay={4000}
            autohide
          >
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>

            <Button
              variant=""
              onClick={() => setShowCustom2(false)}
              className="btn-close btn-close-white ms-auto me-2"
            ></Button>
          </Toast>
          <Toast
            className="mt-4"
            show={showCustom3}
            onClose={() => setShowCustom3(false)}
            delay={6000}
            autohide
          >
            <Toast.Body>
              Hello, world! This is a toast message.
              <div className="mt-2 pt-2 border-top">
                <Button variant="primary" className="btn-sm me-1">
                  Take action
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setShowCustom3(false)}
                  className="btn-sm"
                >
                  Close
                </Button>
              </div>
            </Toast.Body>
          </Toast>
          <Toast
            className="text-white bg-primary mt-4"
            show={showCustom4}
            onClose={() => setShowCustom4(false)}
            delay={8000}
            autohide
          >
            <Toast.Body>
              Hello, world! This is a toast message.
              <div className="mt-2 pt-2 border-top">
                <Button variant="light" className="btn-sm me-1">
                  Take action
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setShowCustom4(false)}
                  className="btn-sm"
                >
                  Close
                </Button>
              </div>
            </Toast.Body>
          </Toast>
        </Card.Body>
      </Card>
    </>
  );
};

const PlacementToast = () => {
  type ToastPositions =
    | "top-start"
    | "top-center"
    | "top-end"
    | "middle-start"
    | "middle-center"
    | "middle-end"
    | "bottom-start"
    | "bottom-center"
    | "bottom-end";

  const [position, setPosition] = useState<ToastPositions>("top-start");

  const positions = [
    "top-start",
    "top-center",
    "top-end",
    "middle-start",
    "middle-center",
    "middle-end",
    "bottom-start",
    "bottom-center",
    "bottom-end",
  ];

  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Placement</h4>
          <p className="text-muted font-14">
            Place toasts with custom CSS as you need them. The top right is
            often used for notifications, as is the top middle. If you’re only
            ever going to show one toast at a time, put the positioning styles
            right on the
            <code>.toast</code>.
          </p>
          <div className="mb-3">
            <label htmlFor="selectToastPlacement">Toast placement</label>
            <Form.Select
              id="selectToastPlacement"
              className="mt-2"
              onChange={(e: any) => setPosition(e.currentTarget.value)}
            >
              {(positions || []).map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </Form.Select>
          </div>

          <div
            aria-live="polite"
            aria-atomic="true"
            className="bg-light position-relative"
            style={{ minHeight: "294px" }}
          >
            <ToastContainer className="p-3" position={position}>
              <Toast>
                <Toast.Header closeButton={false}>
                  <img src={logo} className="me-1" alt="" height="12" />
                  <strong className="me-auto">UBold</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
              </Toast>
            </ToastContainer>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const DefaultAlerts = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Default Alert</h4>
        <p className="sub-header">
          Alerts are available for any length of text, as well as an optional
          dismiss button. For proper styling, use one of the eight{" "}
          <code>variant</code>s.
        </p>

        {(colors || []).map((color, index) => {
          return (
            <Alert variant={color} key={index}>
              This is a <strong>{color}</strong> alert—check it out!
            </Alert>
          );
        })}
      </Card.Body>
    </Card>
  );
};

const DismissibleAlerts = () => {
  const [colors, setColors] = useState<string[]>([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]);

  /*
   * handle close
   */
  const handleClose = (index: number) => {
    const list = [...colors];
    list.splice(index, 1);
    setColors(list);
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Dismissing Alerts</h4>
        <p className="sub-header">
          Add the <code>dismissible</code> prop to add a functioning dismiss
          button to the Alert.
        </p>

        {colors.map((color, index) => {
          return (
            <Alert
              variant={color}
              key={index}
              onClose={() => handleClose(index)}
              dismissible
            >
              <strong>{color} - </strong> A simple {color} alert—check it out!
            </Alert>
          );
        })}
      </Card.Body>
    </Card>
  );
};

const CustomBackgroundAlerts = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Custom Background Alert</h4>
          <p className="sub-header">
            Use <code>.bg-*</code>,<code>.border-0</code> classes.
          </p>

          {(colors || []).map((color, index) => {
            return (
              <Alert
                variant={color}
                key={index}
                className={classNames(
                  "bg-" + color,
                  "border-0",
                  color === "light" ? "text-dark" : "text-white",
                  color === "dark" ? "text-light" : "text-white"
                )}
              >
                This is a <strong>{color}</strong> alert—check it out!
              </Alert>
            );
          })}
        </Card.Body>
      </Card>
    </>
  );
};

const DismissibleCustomBackgroundAlerts = () => {
  const [colors, setColors] = useState<string[]>([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]);

  /*
   * handle close
   */
  const handleClose = (index: number) => {
    const list = [...colors];
    list.splice(index, 1);
    setColors(list);
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Dismissing Custom Background Alert</h4>
        <p className="sub-header">
          Use <code>.bg-*</code>,<code>.border-0</code> classes.
        </p>

        {(colors || []).map((color, index) => {
          return (
            <Alert
              variant={color}
              key={index}
              onClose={() => handleClose(index)}
              className={classNames(
                "bg-" + color,
                "border-0",
                color === "light" ? "text-dark" : "text-white",
                color === "dark" ? "text-light" : "text-white"
              )}
              dismissible
            >
              <strong>{color} - </strong> A simple {color} alert—check it out!
            </Alert>
          );
        })}
      </Card.Body>
    </Card>
  );
};

const Notifications = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Base UI", path: "/ui/toasts" },
          {
            label: "Alerts & Notifications",
            path: "/ui/notifications",
            active: true,
          },
        ]}
        title={"Alerts & Notifications"}
      />

      {/* toasts */}
      <Row>
        <Col>
          <DefaultToasts />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <CustomToast />
        </Col>
        <Col lg={6}>
          <PlacementToast />
        </Col>
      </Row>

      {/* alerts */}
      <Row>
        <Col lg={6}>
          <DefaultAlerts />
        </Col>

        <Col lg={6}>
          <DismissibleAlerts />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <CustomBackgroundAlerts />
        </Col>

        <Col lg={6}>
          <DismissibleCustomBackgroundAlerts />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Notifications;
