import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { ReactSortable } from "react-sortablejs";

// components
import PageTitle from "../../components/PageTitle";

import user1 from "../../assets/images/users/user-2.jpg";
import user2 from "../../assets/images/users/user-3.jpg";
import user3 from "../../assets/images/users/user-4.jpg";
import user4 from "../../assets/images/users/user-5.jpg";
import user5 from "../../assets/images/users/user-6.jpg";
import user6 from "../../assets/images/users/user-7.jpg";
import user7 from "../../assets/images/users/user-1.jpg";

interface ProjectType {
  id: number;
  title: string;
  desc: string;
  created_on: string;
  announced_on: string;
  user: {
    profile: string;
    name: string;
  };
}

interface TeamMemberType {
  id: number;
  name: string;
  avatar: string;
  position: string;
  desc?: string;
}

const MovableCard = ({ item }: { item: ProjectType }) => {
  return (
    <Card
      className={classNames("mb-0", "mt-3", "border", {
        "border-success": item.announced_on === "Latest",
      })}
    >
      <Card.Body>
        <span
          className={classNames(
            "badge",
            "float-end",
            item.announced_on === "Latest"
              ? "badge-soft-success"
              : "badge-soft-secondary"
          )}
        >
          {item.announced_on}
        </span>
        <h5 className="mt-0">
          <a
            href="/"
            className={classNames(
              item.announced_on === "Latest" ? "text-success" : "text-secondary"
            )}
          >
            {item.title}
          </a>
        </h5>

        <p>{item.desc}</p>
        <div className="clearfix"></div>
        <div className="row">
          <div className="col">
            <Link to="#" className="text-reset">
              <img
                src={item.user.profile}
                alt="task-user"
                className="avatar-sm img-thumbnail rounded-circle"
              />
              <span className="d-none d-md-inline-block ms-1 fw-semibold">
                {item.user.name}
              </span>
            </Link>
          </div>
          <div className="col-auto">
            <div className="text-end text-muted">
              <p className="font-13 mt-2 mb-0">
                <i className="mdi mdi-calendar"></i> {item.created_on}
              </p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const MovableCard2 = ({ item }: { item: TeamMemberType }) => {
  return (
    <>
      <Card className="border rounded">
        <Card.Body>
          <div className="d-flex align-itames-start">
            <img
              src={item.avatar}
              alt=""
              className="me-3 d-none d-sm-block avatar-sm rounded-circle"
            />
            <div className="w-100">
              <h5 className="mb-1 mt-0">{item.name}</h5>
              <p> {item.position} </p>
              <p className="mb-0 text-muted">
                <span className="fst-italic">
                  <b>"</b>
                  {item.desc}
                </span>
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const MovableCard3 = ({ item }: { item: TeamMemberType }) => {
  return (
    <>
      <Card className="mb-0 mt-2">
        <Card.Body>
          <div className="d-flex align-itames-start">
            <img
              src={item.avatar}
              alt=""
              className="me-3 d-none d-sm-block avatar-sm rounded-circle"
            />
            <div className="w-100">
              <h5 className="mb-1 mt-0">{item.name}</h5>
              <p className="mb-0"> {item.position} </p>
            </div>
            <span className="dragula-handle"></span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

// DragDrop
const DragDrop = () => {
  const [items, setItems] = useState<ProjectType[]>([
    {
      id: 1,
      title: "iOS App home page",
      desc: "There are many variations of passages of Lorem Ipsum available.",
      created_on: "Oct 16, 2018",
      announced_on: "03 Nov",
      user: {
        profile: user1,
        name: "David Muth",
      },
    },
    {
      id: 2,
      title: "Invite user to a project",
      desc: "There are many variations of passages of Lorem Ipsum available.",
      created_on: "Oct 16, 2018",
      announced_on: "Latest",
      user: {
        profile: user2,
        name: "Dan Statler",
      },
    },
    {
      id: 3,
      title: "Topnav layout design",
      desc: "There are many variations of passages of Lorem Ipsum available.",
      created_on: "Oct 16, 2018",
      announced_on: "New",
      user: {
        profile: user3,
        name: "Raleigh Aragon",
      },
    },
    {
      id: 4,
      title: "Write a release note",
      desc: "There are many variations of passages of Lorem Ipsum available.",
      created_on: "Oct 16, 2018",
      announced_on: "Latest",
      user: {
        profile: user4,
        name: "Gary Rhode",
      },
    },
    {
      id: 5,
      title: "Enable analytics tracking",
      desc: "There are many variations of passages of Lorem Ipsum available.",
      created_on: "Oct 16, 2018",
      announced_on: "15 Jun",
      user: {
        profile: user5,
        name: "Andres Preston",
      },
    },
    {
      id: 6,
      title: "Kanban board design",
      desc: "There are many variations of passages of Lorem Ipsum available.",
      created_on: "Oct 16, 2018",
      announced_on: "Latest",
      user: {
        profile: user6,
        name: "Joseph Carson",
      },
    },
  ]);

  const [team1, setTeam1] = useState<TeamMemberType[]>([
    {
      id: 1,
      name: "Louis K. Bond",
      avatar: user7,
      position: "Founder & CEO",
      desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
    },
    {
      id: 2,
      name: "Dennis N. Cloutier",
      avatar: user1,
      position: "Software Engineer",
      desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
    },
    {
      id: 3,
      name: "Susan J. Sander",
      avatar: user2,
      position: "Web Designer",
      desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
    },
  ]);

  const [team2, setTeam2] = useState<TeamMemberType[]>([
    {
      id: 1,
      name: "James M. Short",
      avatar: user3,
      position: "Web Developer",
      desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
    },
    {
      id: 2,
      name: "Gabriel J. Snyder",
      avatar: user4,
      position: "Business Analyst",
      desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
    },
    {
      id: 3,
      name: "Louie C. Mason",
      avatar: user5,
      position: "Human Resources",
      desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
    },
  ]);

  const [part1, setPart1] = useState<TeamMemberType[]>([
    {
      id: 1,
      name: "Louis K. Bond",
      avatar: user7,
      position: "Founder & CEO",
    },
    {
      id: 2,
      name: "Dennis N. Cloutier",
      avatar: user1,
      position: "Software Engineer",
    },
    {
      id: 3,
      name: "Susan J. Sander",
      avatar: user2,
      position: "Web Designer",
    },
  ]);

  const [part2, setPart2] = useState<TeamMemberType[]>([
    {
      id: 1,
      name: "James M. Short",
      avatar: user3,
      position: "Web Developer",
    },
    {
      id: 2,
      name: "Gabriel J. Snyder",
      avatar: user4,
      position: "Business Analyst",
    },
    {
      id: 3,
      name: "Louie C. Mason",
      avatar: user5,
      position: "Human Resources",
    },
  ]);

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Extended UI", path: "/extended-ui/dragdrop" },
          {
            label: "Drag and Drop",
            path: "/extended-ui/dragdrop",
            active: true,
          },
        ]}
        title={"Drag and Drop"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Simple Drag and Drop Example</h4>
              <p className="text-muted font-14">
                Drag and drop cards in a list{" "}
              </p>

              <ReactSortable className="row" list={items} setList={setItems}>
                {(items || []).map((item, idx) => {
                  return (
                    <Col key={idx} md={4}>
                      <MovableCard item={item} />
                    </Col>
                  );
                })}
              </ReactSortable>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Move stuff between containers</h4>
              <p className="text-muted font-14">
                Drag and drop cards between two containers
              </p>

              <Row>
                <Col md={6}>
                  <h5 className="mt-0 text-center">Team One</h5>
                  <ReactSortable
                    group="teamList"
                    list={team1}
                    setList={setTeam1}
                    className="py-2"
                  >
                    {(team1 || []).map((item, idx) => {
                      return <MovableCard2 key={idx} item={item} />;
                    })}
                  </ReactSortable>
                </Col>
                <Col md={6}>
                  <h5 className="mt-0 text-center">Team Two</h5>
                  <ReactSortable
                    group="teamList"
                    list={team2}
                    setList={setTeam2}
                    className="py-2"
                  >
                    {(team2 || []).map((item, idx) => {
                      return <MovableCard2 key={idx} item={item} />;
                    })}
                  </ReactSortable>
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
              <h4 className="header-title">
                Move stuff between containers using handle
              </h4>
              <p className="text-muted font-14">
                Drag and drop cards between two containers
              </p>

              <Row>
                <Col md={6}>
                  <div className="bg-light p-2 p-lg-4">
                    <h5 className="mt-0">Part 1</h5>
                    <ReactSortable
                      group="teamList2"
                      handle=".dragula-handle"
                      list={part1}
                      setList={setPart1}
                      className="py-2"
                    >
                      {(part1 || []).map((item, idx) => {
                        return <MovableCard3 key={idx} item={item} />;
                      })}
                    </ReactSortable>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="bg-light p-2 p-lg-4">
                    <h5 className="mt-0">Part 1</h5>
                    <ReactSortable
                      group="teamList2"
                      handle=".dragula-handle"
                      list={part2}
                      setList={setPart2}
                      className="py-2"
                    >
                      {(part2 || []).map((item, idx) => {
                        return <MovableCard3 key={idx} item={item} />;
                      })}
                    </ReactSortable>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DragDrop;
