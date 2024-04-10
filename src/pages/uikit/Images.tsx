import React from "react";
import { Row, Col, Card } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";

import avatar5 from "../../assets/images/users/user-5.jpg";
import avatar6 from "../../assets/images/users/user-6.jpg";

import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-3.jpg";

const ImageShapes = () => {
  return (
    <>
      <h4 className="header-title">Images shapes</h4>
      <p className="sub-header">
        Add classes to an <code>&lt;img /&gt;</code> element to easily style
        images in any project.
      </p>

      <Row>
        <Col sm={4}>
          <img src={img1} alt="" className="img-fluid rounded" width="200" />
          <p className="mb-0">
            <code>.rounded</code>
          </p>
        </Col>

        <Col sm={4} className="text-center">
          <img
            src={avatar6}
            alt=""
            className="img-fluid rounded-circle"
            width="120"
          />
          <p className="mb-0">
            <code>.rounded-circle</code>
          </p>
        </Col>

        <Col sm={4}>
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
      </Row>
    </>
  );
};

const ImageSizes = () => {
  return (
    <>
      <h4 className="header-title">Image sizes</h4>
      <p className="sub-header">
        Add classes to an <code>&lt;img /&gt;</code> element to easily style
        images in any project.
      </p>

      <Row>
        <Col md={3}>
          <img src={avatar5} alt="" className="img-fluid avatar-xs rounded" />
          <p className="mb-0">
            <code>.avatar-xs</code>
          </p>
          <img
            src={avatar5}
            alt=""
            className="img-fluid avatar-sm rounded mt-2"
          />
          <p className="mb-0">
            <code>.avatar-sm</code>
          </p>
        </Col>

        <Col md={3}>
          <img src={avatar5} alt="" className="img-fluid avatar-md rounded" />
          <p className="mb-0">
            <code>.avatar-md</code>
          </p>
        </Col>

        <Col md={3}>
          <img src={avatar5} alt="" className="img-fluid avatar-lg rounded" />
          <p className="mb-0">
            <code>.avatar-lg</code>
          </p>
        </Col>

        <Col md={3}>
          <img src={avatar5} alt="" className="img-fluid avatar-xl rounded" />
          <p className="mb-0">
            <code>.avatar-xl</code>
          </p>
        </Col>
      </Row>
    </>
  );
};

const Images = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Base UI", path: "/ui/images" },
          { label: "Images", path: "/ui/images", active: true },
        ]}
        title={"Images"}
      />

      <Row>
        <Col sm={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={6}>
                  <ImageShapes />
                </Col>
                <Col xl={6} className="mt-3 mt-xl-0">
                  <ImageSizes />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Images;
