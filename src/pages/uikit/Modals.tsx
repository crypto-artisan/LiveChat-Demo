import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Modal,
  Accordion,
  useAccordionButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

// components
import PageTitle from "../../components/PageTitle";

import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";

const ModalSizes = () => {
  const [standard, setStandard] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [size, setSize] = useState<"sm" | "lg" | "xl">();
  const [className, setClassName] = useState<string>("");
  const [scroll, setScroll] = useState<boolean>(false);

  /**
   * Show/hide the modal
   */
  const toggleStandard = () => {
    setStandard(!standard);
  };

  /**
   * Show/hide the modal
   */
  const toggle = () => {
    setModal(!modal);
  };

  /**
   * Opens large modal
   */
  const openModalWithSize = (size: "sm" | "lg" | "xl") => {
    setSize(size);
    setClassName("");
    setScroll(false);
    toggle();
  };

  /**
   * Opens modal with custom class
   */
  const openModalWithClass = (className: string) => {
    setClassName(className);
    setScroll(false);
    toggle();
  };

  /**
   * Opens large modal
   */
  const openModalWithScroll = () => {
    setScroll(true);
    setSize("sm");
    setClassName("");
    toggle();
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Bootstrap Modals</h4>

          <p className="sub-header">
            A rendered modal with header, body, and set of actions in the
            footer.
          </p>

          <div className="button-list">
            <Button variant="primary" onClick={toggleStandard}>
              Standard Modal
            </Button>
            <Button variant="info" onClick={() => openModalWithSize("lg")}>
              Large Modal
            </Button>
            <Button variant="success" onClick={() => openModalWithSize("sm")}>
              Small Modal
            </Button>
            <Button
              variant="primary"
              onClick={() => openModalWithClass("modal-full-width")}
            >
              Full width Modal
            </Button>
            <Button variant="secondary" onClick={openModalWithScroll}>
              Scrollable Modal
            </Button>
          </div>

          {/* standard modal */}
          <Modal show={standard} onHide={toggleStandard}>
            <Modal.Header onHide={toggleStandard} closeButton>
              <h4 className="modal-title">Modal Heading</h4>
            </Modal.Header>
            <Modal.Body>
              <h6>Text in a modal</h6>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
              <hr />
              <h6>Overflowing text to show scroll behavior</h6>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="light" onClick={toggleStandard}>
                Close
              </Button>{" "}
              <Button variant="primary" onClick={toggleStandard}>
                Save changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={modal}
            onHide={toggle}
            dialogClassName={className}
            size={size}
            scrollable={scroll}
          >
            <Modal.Header onHide={toggle} closeButton>
              <h4 className="modal-title">Modal Heading</h4>
            </Modal.Header>
            <Modal.Body>
              <h6>Text in a modal</h6>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
              <hr />
              <h6>Overflowing text to show scroll behavior</h6>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              {scroll && (
                <>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="light" onClick={toggle}>
                Close
              </Button>{" "}
              <Button variant="primary" onClick={toggle}>
                Save changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </>
  );
};

const ModalsWithPages = () => {
  const [signUpModal, setSignUpModal] = useState<boolean>(false);
  const [signInModal, setSignInModal] = useState<boolean>(false);

  /**
   * Show/hide the modal
   */
  const toggleSignUp = () => {
    setSignUpModal(!signUpModal);
  };

  const toggleSignIn = () => {
    setSignInModal(!signInModal);
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Modal with Pages</h4>

        <p className="sub-header">Examples of custom modals.</p>

        <Button variant="primary" className="me-1" onClick={toggleSignUp}>
          Sign Up Modal
        </Button>

        <Button variant="info" onClick={toggleSignIn}>
          Log In Modal
        </Button>

        {/* Sign up Modal */}
        <Modal show={signUpModal} onHide={toggleSignUp}>
          <Modal.Body>
            <div className="text-center mt-2 mb-4">
              <div className="auth-logo">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-lg">
                    <img src={logodark} alt="" height="24" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-lg">
                    <img src={logolight} alt="" height="24" />
                  </span>
                </Link>
              </div>
            </div>
            <form className="ps-3 pe-3" action="#">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Name
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="username"
                  required
                  placeholder="Michael Zenaty"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="emailaddress" className="form-label">
                  Email address
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="emailaddress"
                  required
                  placeholder="john@deo.com"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  required
                  id="password"
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customCheck1"
                  />
                  <label className="form-check-label" htmlFor="customCheck1">
                    I accept <Link to="#">Terms and Conditions</Link>
                  </label>
                </div>
              </div>

              <div className="mb-3 text-center">
                <button className="btn btn-primary" type="submit">
                  Sign Up Free
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>

        {/* Sign in Modal */}
        <Modal show={signInModal} onHide={toggleSignIn}>
          <Modal.Body>
            <div className="text-center mt-2 mb-4">
              <div className="auth-logo">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-lg">
                    <img src={logodark} alt="" height="24" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-lg">
                    <img src={logolight} alt="" height="24" />
                  </span>
                </Link>
              </div>
            </div>
            <form className="ps-3 pe-3" action="#">
              <div className="mb-3">
                <label htmlFor="emailaddress" className="form-label">
                  Email address
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="emailaddress"
                  required
                  placeholder="john@deo.com"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  required
                  id="password"
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="customCheck1"
                  />
                  <label className="form-check-label" htmlFor="customCheck1">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="mb-3 text-center">
                <button className="btn rounded-pill btn-primary" type="submit">
                  Sign In
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
};

const ModalPositions = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [className, setClassName] = useState<string>("");

  /**
   * Show/hide the modal
   */
  const toggle = () => {
    setModal(!modal);
  };

  /**
   * Opens modal with custom class
   */
  const openModalWithClass = (className: string) => {
    setClassName(className);
    toggle();
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Modal Position</h4>

          <p className="sub-header">
            Specify the position for the modal. You can display modal at top,
            bottom, center or right of page by specifying classes{" "}
            <code>modal-top</code>, <code>modal-bottom</code>,{" "}
            <code>modal-dialog-centered</code> and <code>modal-right</code>
            respectively.
          </p>

          <div className="button-list">
            <Button
              variant="secondary"
              onClick={() => openModalWithClass("modal-top")}
            >
              Top Modal
            </Button>
            <Button
              variant="secondary"
              onClick={() => openModalWithClass("modal-bottom")}
            >
              Bottom Modal
            </Button>
            <Button
              variant="secondary"
              onClick={() => openModalWithClass("modal-dialog-centered")}
            >
              Center Modal
            </Button>
            <Button
              variant="secondary"
              onClick={() => openModalWithClass("modal-right")}
            >
              Rightbar Modal
            </Button>
          </div>

          <Modal show={modal} onHide={toggle} dialogClassName={className}>
            <Modal.Header onHide={toggle} closeButton>
              <h4 className="modal-title">Modal Heading</h4>
            </Modal.Header>
            <Modal.Body>
              <h5>Text in a modal</h5>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="light" onClick={toggle}>
                Close
              </Button>{" "}
              <Button variant="primary" onClick={toggle}>
                Save changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </>
  );
};

const ModalWithAlerts = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [className, setClassName] = useState<string>("");

  /**
   * Show/hide the modal
   */
  const toggle = () => {
    setModal(!modal);
  };

  /**
   * Opens modal with custom class
   */
  const openModalWithClass = (className: string) => {
    setClassName(className);
    toggle();
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Modal based Alerts</h4>

        <p className="sub-header">
          Show different contexual alert messages using modal component.
        </p>

        <div className="button-list">
          <Button
            variant="success"
            className="me-1"
            onClick={() => openModalWithClass("success")}
          >
            Success Alert
          </Button>
          <Button
            variant="info"
            className="me-1"
            onClick={() => openModalWithClass("info")}
          >
            Info Alert
          </Button>
          <Button
            variant="warning"
            className="me-1"
            onClick={() => openModalWithClass("warning")}
          >
            Warning Alert
          </Button>
          <Button
            variant="danger"
            className="me-1"
            onClick={() => openModalWithClass("danger")}
          >
            Danger Alert
          </Button>
        </div>

        <Modal show={modal} onHide={toggle} size="sm">
          <div className={classNames("modal-filled", "bg-" + className)}>
            <Modal.Body className="p-4">
              <div className="text-center">
                <i className="dripicons-checkmark h1 text-white"></i>
                <h4 className="mt-2 text-white">Well Done!</h4>
                <p className="mt-3 text-white">
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam.
                </p>
                <button
                  type="button"
                  onClick={toggle}
                  className="btn btn-light my-2"
                >
                  Continue
                </button>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </Card.Body>
    </Card>
  );
};

const MultipleModal = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [nextModal, setNextModal] = useState<boolean>(false);

  /**
   * Show/hide the modal
   */
  const toggle = () => {
    setModal(!modal);
  };

  const toggleNextModal = () => {
    toggle();
    setNextModal(!nextModal);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Multiple Modal</h4>

          <p className="sub-header">
            Display a series of modals one by one to guide your users on
            multiple aspects or take step wise input.
          </p>

          <div className="button-list">
            <Button variant="secondary" onClick={toggle}>
              Multiple Modal
            </Button>
          </div>

          <Modal show={modal} onHide={toggle}>
            <Modal.Header closeButton>
              <h4 className="modal-title">Modal Heading</h4>
            </Modal.Header>
            <Modal.Body>
              <h5>Text in a modal</h5>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => setNextModal(true)}>
                Next
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={nextModal} onHide={toggleNextModal}>
            <Modal.Header closeButton>
              <h4 className="modal-title">Modal Heading</h4>
            </Modal.Header>
            <Modal.Body>
              <h5>Text in a modal</h5>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={toggleNextModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </>
  );
};

const CustomToggle = ({
  children,
  eventKey,
}: {
  children: any;
  eventKey: string;
}) => {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});

  return (
    <h5 className="m-0">
      <Link to="#" className="text-dark" onClick={decoratedOnClick}>
        {children}
      </Link>
    </h5>
  );
};

const CustomModals = () => {
  const [responsiveModal, setResponsiveModal] = useState<boolean>(false);
  const [accordionModal, setAccordionModal] = useState<boolean>(false);

  /**
   * Show/hide the modal
   */
  const toggleResponsiveModal = () => {
    setResponsiveModal(!responsiveModal);
  };

  const toggleAccordionModal = () => {
    setAccordionModal(!accordionModal);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Custom Modals</h4>

          <p className="sub-header">Examples of custom modals.</p>

          <div className="button-list">
            <Button
              variant="success"
              className="waves-effect waves-light"
              onClick={toggleResponsiveModal}
            >
              Responsive Modal
            </Button>
            <Button
              variant="secondary"
              className="waves-effect waves-light"
              onClick={toggleAccordionModal}
            >
              Accordion in Modal
            </Button>
          </div>

          <Modal show={responsiveModal} onHide={toggleResponsiveModal}>
            <Modal.Header closeButton>
              <h4 className="modal-title">Modal Content is Responsive</h4>
            </Modal.Header>
            <Modal.Body className="p-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="field-1" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="field-1"
                      placeholder="John"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="field-2" className="form-label">
                      Surname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="field-2"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label htmlFor="field-3" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="field-3"
                      placeholder="Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-3">
                    <label htmlFor="field-4" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="field-4"
                      placeholder="Boston"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label htmlFor="field-5" className="form-label">
                      Country
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="field-5"
                      placeholder="United States"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label htmlFor="field-6" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="field-6"
                      placeholder="123456"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="">
                    <label htmlFor="field-7" className="form-label">
                      Personal Info
                    </label>
                    <textarea
                      className="form-control"
                      id="field-7"
                      placeholder="Write something about yourself"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <button
                type="button"
                className="btn btn-secondary waves-effect"
                onClick={toggleResponsiveModal}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-info waves-effect waves-light"
              >
                Save changes
              </button>
            </Modal.Footer>
          </Modal>

          <Modal show={accordionModal} onHide={toggleAccordionModal}>
            <Accordion defaultActiveKey="0">
              <Card className="mb-0">
                <Card.Header>
                  <CustomToggle eventKey="0">
                    Collapsible Group Item #1
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="mb-0">
                <Card.Header>
                  <CustomToggle eventKey="1">
                    Collapsible Group Item #2
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="mb-0">
                <Card.Header>
                  <CustomToggle eventKey="2">
                    Collapsible Group Item #3
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Modal>
        </Card.Body>
      </Card>
    </>
  );
};

const StaticBackdropModal = () => {
  const [modal, setModal] = useState<boolean>(false);

  /**
   * Show/hide the modal
   */
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Static Backdrop</h4>

          <p className="sub-header">
            When backdrop is set to static, the modal will not close when
            clicking outside it. Click the button below to try it.
          </p>

          <div className="button-list">
            <Button variant="info" onClick={toggle}>
              Static Backdrop
            </Button>
          </div>

          <Modal
            show={modal}
            onHide={toggle}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don't even try to press
              escape key.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={toggle}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </>
  );
};

const Modals = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Base UI", path: "/ui/modals" },
          { label: "Modals", path: "/ui/modals", active: true },
        ]}
        title={"Modals"}
      />

      <Row>
        <Col md={6}>
          <ModalSizes />
        </Col>

        <Col md={6}>
          <ModalsWithPages />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <ModalPositions />
        </Col>

        <Col md={6}>
          <ModalWithAlerts />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <MultipleModal />
        </Col>

        <Col md={6}>
          <CustomModals />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <StaticBackdropModal />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Modals;
