import React from "react";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";

// components
import PageTitle from "../../../../components/PageTitle";
import Messages from "../../../../components/Messages";

import UserBox from "./UserBox";
import About from "./About";
import TimeLine from "./TimeLine";
import Settings from "./Settings";

interface ProjectDetails {
  id: number;
  client: string;
  name: string;
  startDate: string;
  dueDate: string;
  status: string;
}

const Profile = () => {
  const projectDetails: ProjectDetails[] = [
    {
      id: 1,
      client: "Halette Boivin",
      name: "App design and development",
      startDate: "01/01/2015",
      dueDate: "10/05/2018",
      status: "Work in Progress",
    },
    {
      id: 2,
      client: "Durandana Jolicoeur",
      name: "Coffee detail page - Main Page",
      startDate: "21/07/2016",
      dueDate: "12/05/2018",
      status: "Pending",
    },
    {
      id: 3,
      client: "Lucas Sabourin",
      name: "Poster illustation design",
      startDate: "18/03/2018",
      dueDate: "28/09/2018",
      status: "Done",
    },
    {
      id: 4,
      client: "Donatien Brunelle",
      name: "Drinking bottle graphics",
      startDate: "02/10/2017",
      dueDate: "07/05/2018",
      status: "Work in Progress",
    },
    {
      id: 5,
      client: "Karel Auberjo",
      name: "Landing page design - Home",
      startDate: "17/01/2017",
      dueDate: "25/05/2021",
      status: "Coming soon",
    },
  ];

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Contacts", path: "/apps/contacts/profile" },
          { label: "Profile", path: "/apps/contacts/profile", active: true },
        ]}
        title={"Profile"}
      />
      <Row>
        <Col xl={4} lg={4}>
          {/* User information */}
          <UserBox />

          {/* User's recent messages */}
          <Messages />
        </Col>
        <Col xl={8} lg={8}>
          <Tab.Container defaultActiveKey="timeline">
            <Card>
              <Card.Body>
                <Nav
                  variant="pills"
                  as="ul"
                  className="nav nav-pills nav-fill navtab-bg"
                >
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link
                      href="#"
                      eventKey="aboutme"
                      className="nav-link cursor-pointer"
                    >
                      About Me
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link
                      href="#"
                      eventKey="timeline"
                      className="nav-link cursor-pointer"
                    >
                      Timeline
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item">
                    <Nav.Link
                      href="#"
                      eventKey="settings"
                      className="nav-link cursor-pointer"
                    >
                      Settings
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="aboutme">
                    <About projectDetails={projectDetails} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="timeline">
                    <TimeLine />
                  </Tab.Pane>
                  <Tab.Pane eventKey="settings">
                    <Settings />
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Tab.Container>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
