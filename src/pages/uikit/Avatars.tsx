import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../components/PageTitle";

import avatar2 from "../../assets/images/users/user-2.jpg";
import avatar3 from "../../assets/images/users/user-3.jpg";
import avatar4 from "../../assets/images/users/user-4.jpg";
import avatar5 from "../../assets/images/users/user-5.jpg";
import avatar6 from "../../assets/images/users/user-6.jpg";
import avatar7 from "../../assets/images/users/user-7.jpg";
import avatar8 from "../../assets/images/users/user-8.jpg";

import img1 from "../../assets/images/small/img-2.jpg";
import img2 from "../../assets/images/small/img-3.jpg";

const RoundedCircle = ({ size }: { size: string }) => {
  return (
    <>
      <Col md={4}>
        <img
          src={avatar3}
          alt=""
          className={classNames(
            "img-fluid",
            "rounded-circle",
            "avatar-" + size
          )}
        />
        <p>
          <code>.avatar-{size} .rounded-circle</code>
        </p>
      </Col>
    </>
  );
};

const Avatars = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Base UI", path: "/ui/avatars" },
          { label: "Avatars", path: "/ui/avatars", active: true },
        ]}
        title={"Avatars"}
      />

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Sizing - Images</h4>
              <p className="text-muted font-14 mb-3">
                Create and group avatars of different sizes and shapes with the
                css classes. Using Bootstrap's naming convention, you can
                control size of avatar including standard avatar, or scale it up
                to different sizes.
              </p>

              <Row>
                <Col md={3}>
                  <img
                    src={avatar2}
                    alt=""
                    className="img-fluid avatar-xs rounded"
                  />
                  <p>
                    <code>.avatar-xs</code>
                  </p>
                  <img
                    src={avatar3}
                    alt=""
                    className="img-fluid avatar-sm rounded mt-2"
                  />
                  <p className="mb-2 mb-sm-0">
                    <code>.avatar-sm</code>
                  </p>
                </Col>

                <Col md={3}>
                  <img
                    src={avatar4}
                    alt=""
                    className="img-fluid avatar-md rounded"
                  />
                  <p>
                    <code>.avatar-md</code>
                  </p>
                </Col>

                <Col md={3}>
                  <img
                    src={avatar5}
                    alt=""
                    className="img-fluid avatar-lg rounded"
                  />
                  <p>
                    <code>.avatar-lg</code>
                  </p>
                </Col>

                <Col md={3}>
                  <img
                    src={avatar6}
                    alt=""
                    className="img-fluid avatar-xl rounded"
                  />
                  <p className="mb-0">
                    <code>.avatar-xl</code>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Rounded Circle</h4>
              <p className="text-muted font-14 mb-4">
                Using an additional class <code>.rounded-circle</code> in{" "}
                <code>&lt;img /&gt;</code> element creates the rounded avatar.
              </p>

              <Row>
                {["md", "lg", "xl"].map((size, index) => {
                  return <RoundedCircle key={index} size={size} />;
                })}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Sizing - Background Color</h4>
              <p className="text-muted font-14 mb-3">
                Using utilities classes of background e.g. <code>bg-*</code>{" "}
                allows you to have any background color as well.
              </p>

              <Row>
                <Col md={3}>
                  <div className="avatar-xs">
                    <span className="avatar-title bg-primary rounded">xs</span>
                  </div>
                  <p className="mb-2 font-14 mt-1">
                    Using <code>.avatar-xs</code>
                  </p>

                  <div className="avatar-sm mt-3">
                    <span className="avatar-title bg-success rounded">sm</span>
                  </div>

                  <p className="mb-0 font-14 mt-1">
                    Using <code>.avatar-sm</code>
                  </p>
                </Col>

                <Col md={3}>
                  <div className="avatar-md">
                    <span className="avatar-title bg-soft-info text-info font-20 rounded">
                      MD
                    </span>
                  </div>

                  <p className="mb-0 font-14 mt-1">
                    Using <code>.avatar-md</code>
                  </p>
                </Col>

                <Col md={3}>
                  <div className="avatar-lg">
                    <span className="avatar-title bg-danger font-22 rounded">
                      LG
                    </span>
                  </div>

                  <p className="mb-0 font-14 mt-1">
                    Using <code>.avatar-lg</code>
                  </p>
                </Col>

                <Col md={3}>
                  <div className="avatar-xl">
                    <span className="avatar-title bg-soft-warning text-warning font-24 rounded">
                      XL
                    </span>
                  </div>

                  <p className="mb-0 font-14 mt-1">
                    Using <code>.avatar-xl</code>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Rounded Circle Background</h4>
              <p className="text-muted font-14 mb-3">
                Using an additional class <code>.rounded-circle</code> in{" "}
                <code>&lt;img /&gt;</code> element creates the rounded avatar.
              </p>

              <Row>
                <Col md={4}>
                  <div className="avatar-md">
                    <span className="avatar-title bg-soft-secondary text-secondary font-20 rounded-circle">
                      MD
                    </span>
                  </div>

                  <p className="mb-0 font-14 mt-1">
                    Using <code>.avatar-md .rounded-circle</code>
                  </p>
                </Col>
                <Col md={4}>
                  <div className="avatar-lg">
                    <span className="avatar-title bg-light text-dark font-22 rounded-circle">
                      LG
                    </span>
                  </div>

                  <p className="mb-0 font-14 mt-1">
                    Using <code>.avatar-lg .rounded-circle</code>
                  </p>
                </Col>
                <Col md={4}>
                  <div className="avatar-xl">
                    <span className="avatar-title bg-soft-primary text-primary font-24 rounded-circle">
                      XL
                    </span>
                  </div>

                  <p className="mb-0 font-14 mt-1">
                    Using <code>.avatar-xl .rounded-circle</code>
                  </p>
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
              <h4 className="header-title">Images Shapes</h4>
              <p className="text-muted font-14 mb-3">
                Avatars with different sizes and shapes.
              </p>

              <Row>
                <Col sm={2}>
                  <img
                    src={img1}
                    alt=""
                    className="img-fluid rounded"
                    width="200"
                  />
                  <p className="mb-0">
                    <code>.rounded</code>
                  </p>
                </Col>

                <Col sm={2} className="text-center">
                  <img
                    src={avatar5}
                    alt=""
                    className="img-fluid rounded"
                    width="120"
                  />
                  <p className="mb-0">
                    <code>.rounded</code>
                  </p>
                </Col>

                <Col sm={2} className="text-center">
                  <img
                    src={avatar7}
                    alt=""
                    className="img-fluid rounded-circle"
                    width="120"
                  />
                  <p className="mb-0">
                    <code>.rounded-circle</code>
                  </p>
                </Col>

                <Col sm={2}>
                  <img
                    src={img2}
                    alt=""
                    className="img-fluid img-thumbnail"
                    width="200"
                  />
                  <p className="mb-0">
                    <code>.img-thumbnail</code>
                  </p>
                </Col>

                <Col sm={2}>
                  <img
                    src={avatar8}
                    alt=""
                    className="img-fluid rounded-circle img-thumbnail"
                    width="120"
                  />
                  <p className="mb-0">
                    <code>.rounded-circle .img-thumbnail</code>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Avatars;
