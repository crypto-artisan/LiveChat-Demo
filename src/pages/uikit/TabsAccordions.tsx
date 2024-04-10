import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Tab,
  Nav,
  Accordion,
  Button,
  Collapse,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../components/PageTitle";

interface TabContentType {
  id: number;
  title: string;
  icon?: string;
  text: string;
}

interface CustomToggleProps {
  children: any;
  eventKey: string;
  containerClass: string;
  linkClass: string;
  callback?: any;
}

const CustomToggle = ({
  children,
  eventKey,
  containerClass,
  linkClass,
  callback,
}: CustomToggleProps) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <h5 className={containerClass}>
      <Link
        to="#"
        className={classNames(linkClass, {
          collapsed: !isCurrentEventKey,
        })}
        onClick={decoratedOnClick}
      >
        {children}
      </Link>
    </h5>
  );
};

const CustomAccordion1 = ({
  item,
  index,
}: {
  item: TabContentType;
  index: number;
}) => {
  return (
    <>
      <Card className="mb-1">
        <Card.Header>
          <CustomToggle
            eventKey={String(index)}
            containerClass="m-0"
            linkClass="text-dark"
          >
            <i className="mdi mdi-help-circle me-1 text-primary"></i>
            {item.title}
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={String(index)}>
          <Card.Body>{item.text}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

const CustomAccordion2 = ({
  item,
  index,
}: {
  item: TabContentType;
  index: number;
}) => {
  return (
    <>
      <Card className="mb-0">
        <Card.Header>
          <CustomToggle
            eventKey={String(index)}
            containerClass="m-0 position-relative"
            linkClass="custom-accordion-title text-reset d-block"
          >
            Q. {item.title}
            <i className="mdi mdi-chevron-down accordion-arrow"></i>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={String(index)}>
          <Card.Body>{item.text}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

const CustomCollapse = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <p>
        <Link
          to="#"
          className="btn btn-primary waves-effect waves-light"
          onClick={toggle}
        >
          Link with href
        </Link>

        <Button
          color="primary"
          className="waves-effect waves-light ms-1"
          onClick={toggle}
        >
          Button with data-bs-target
        </Button>
      </p>
      <Collapse in={isOpen}>
        <div>
          <Card>
            <Card.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card.Body>
          </Card>
        </div>
      </Collapse>
    </>
  );
};

const HorizontalCollapse = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <p>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Toggle width collapse
        </Button>
      </p>
      <Collapse in={open} dimension="width">
        <div>
          <Card as={Card.Body} className="mb-0" style={{ width: "450px" }}>
            This is some placeholder content for a horizontal collapse. It's
            hidden by default and shown when triggered.
          </Card>
        </div>
      </Collapse>
    </>
  );
};

const TabsAccordions = () => {
  const tabContents: TabContentType[] = [
    {
      id: 1,
      title: "Home",
      icon: "mdi mdi-home-variant",
      text: "Home - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
      id: 2,
      title: "Profile",
      icon: "mdi mdi-account-circle",
      text: "Profile - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
      id: 3,
      title: "Messages",
      icon: "mdi mdi-cog-outline",
      text: "Settings - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
  ];

  const accordianContent: TabContentType[] = [
    {
      id: 1,
      title: "What is Vakal text here?",
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
    },
    {
      id: 2,
      title: "What is Vakal text here?",
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
    },
    {
      id: 3,
      title: "How many variations exist?",
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
    },
    {
      id: 4,
      title: "What is Vakal text here?",
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
    },
  ];

  const accordianContent2: TabContentType[] = [
    {
      id: 1,
      title: "Can I use this template for my client?",
      text: " Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere",
    },
    {
      id: 2,
      title: "Can this theme work with Wordpress?",
      text: "No. This is a HTML template. It won't directly with wordpress, though you can convert this into wordpress compatible theme",
    },
    {
      id: 3,
      title: "How do I get help with the theme?",
      text: "   Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime",
    },
    {
      id: 4,
      title: "Will you regularly give updates of UBold ?",
      text: "Yes, We will update the UBold regularly. All the future updates would be available without any cost",
    },
  ];

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Base UI", path: "/ui/tabs-accordions" },
          {
            label: "Tabs & Accordions",
            path: "/ui/tabs-accordions",
            active: true,
          },
        ]}
        title={"Tabs & Accordions"}
      />

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Default Tabs</h4>

              <Tab.Container defaultActiveKey="Profile">
                <Nav as="ul" variant="tabs">
                  {(tabContents || []).map((tab, index) => {
                    return (
                      <Nav.Item as="li" key={index}>
                        <Nav.Link
                          className="cursor-pointer"
                          href="#"
                          eventKey={tab.title}
                        >
                          {tab.title}
                        </Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>

                <Tab.Content>
                  {(tabContents || []).map((tab, index) => {
                    return (
                      <Tab.Pane
                        eventKey={tab.title}
                        id={String(tab.id)}
                        key={index}
                      >
                        <p>{tab.text}</p>
                      </Tab.Pane>
                    );
                  })}
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>

        {/* tab justified */}
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Tabs Justified</h4>

              <Tab.Container defaultActiveKey="Profile">
                <Nav as="ul" variant="pills" justify className="navtab-bg">
                  {(tabContents || []).map((tab, index) => {
                    return (
                      <Nav.Item as="li" key={index}>
                        <Nav.Link
                          className="cursor-pointer"
                          href="#"
                          eventKey={tab.title}
                        >
                          {tab.title}
                        </Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>

                <Tab.Content>
                  {(tabContents || []).map((tab, index) => {
                    return (
                      <Tab.Pane
                        eventKey={tab.title}
                        id={String(tab.id)}
                        key={index}
                      >
                        <p>{tab.text}</p>
                      </Tab.Pane>
                    );
                  })}
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* vertical tab */}
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Tabs Vertical Left</h4>

              <Row>
                <Tab.Container defaultActiveKey="Home">
                  <Col sm={3}>
                    <Nav as="ul" variant="pills" className="flex-column">
                      {(tabContents || []).map((tab, index) => {
                        return (
                          <Nav.Item as="li" key={index}>
                            <Nav.Link
                              className="cursor-pointer"
                              href="#"
                              eventKey={tab.title}
                            >
                              {tab.title}
                            </Nav.Link>
                          </Nav.Item>
                        );
                      })}
                    </Nav>
                  </Col>

                  <Col sm={9}>
                    <Tab.Content className="pt-0">
                      {(tabContents || []).map((tab, index) => {
                        return (
                          <Tab.Pane
                            eventKey={tab.title}
                            id={String(tab.id)}
                            key={index}
                          >
                            <p>{tab.text}</p>
                          </Tab.Pane>
                        );
                      })}
                    </Tab.Content>
                  </Col>
                </Tab.Container>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Tabs Vertical Right</h4>

              <Row>
                <Tab.Container defaultActiveKey="Home">
                  <Col sm={9}>
                    <Tab.Content className="pt-0">
                      {(tabContents || []).map((tab, index) => {
                        return (
                          <Tab.Pane
                            eventKey={tab.title}
                            id={String(tab.id)}
                            key={index}
                          >
                            <p>{tab.text}</p>
                          </Tab.Pane>
                        );
                      })}
                    </Tab.Content>
                  </Col>
                  <Col sm={3}>
                    <Nav
                      variant="pills"
                      as="ul"
                      className="flex-column nav-pills-tab"
                    >
                      {(tabContents || []).map((tab, index) => {
                        return (
                          <Nav.Item as="li" key={index}>
                            <Nav.Link
                              className="cursor-pointer"
                              href="#"
                              eventKey={tab.title}
                            >
                              {tab.title}
                            </Nav.Link>
                          </Nav.Item>
                        );
                      })}
                    </Nav>
                  </Col>
                </Tab.Container>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Bordered Tabs */}
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Tabs Bordered</h4>

              <Tab.Container defaultActiveKey="Profile">
                <Nav variant="tabs" className="nav-bordered" as="ul">
                  {(tabContents || []).map((tab, index) => {
                    return (
                      <Nav.Item key={index} as="li">
                        <Nav.Link
                          className="cursor-pointer"
                          href="#"
                          eventKey={tab.title}
                        >
                          {tab.title}
                        </Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>

                <Tab.Content>
                  {(tabContents || []).map((tab, index) => {
                    return (
                      <Tab.Pane
                        eventKey={tab.title}
                        id={String(tab.id)}
                        key={index}
                      >
                        <Row>
                          <Col sm="12">
                            <p className="mt-3">{tab.text}</p>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    );
                  })}
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>

        {/* tab justified */}
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Tabs Bordered Justified</h4>
              <p className="text-muted font-14 mb-3">
                The navigation item with a simple bottom border and justified.
              </p>

              <Tab.Container defaultActiveKey="Profile">
                <Nav variant="tabs" justify className="nav-bordered" as="ul">
                  {(tabContents || []).map((tab, index) => {
                    return (
                      <Nav.Item key={index} as="li">
                        <Nav.Link
                          className="cursor-pointer"
                          href="#"
                          eventKey={tab.title}
                        >
                          {tab.title}
                        </Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>

                <Tab.Content>
                  {(tabContents || []).map((tab, index) => {
                    return (
                      <Tab.Pane
                        eventKey={tab.title}
                        id={String(tab.id)}
                        key={index}
                      >
                        <Row>
                          <Col sm="12">
                            <p className="mt-3">{tab.text}</p>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    );
                  })}
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Accordion defaultActiveKey="0" id="accordion" className="mb-3">
            {(accordianContent || []).map((item, index) => {
              return <CustomAccordion1 key={index} item={item} index={index} />;
            })}
          </Accordion>
        </Col>
        <Col xl={6}>
          <Accordion
            defaultActiveKey="0"
            id="accordion"
            className="custom-accordion"
          >
            {(accordianContent2 || []).map((item, index) => {
              return <CustomAccordion2 key={index} item={item} index={index} />;
            })}
          </Accordion>
        </Col>
        <Col xl={6}>
          <CustomCollapse />
        </Col>
        <Col xl={6}>
          <HorizontalCollapse />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default TabsAccordions;
