import React from "react";
import { Row, Col, Card, Pagination, Badge, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

// components
import PageTitle from "../../components/PageTitle";
import Button from "@restart/ui/esm/Button";

interface ColorTypes {
  name: string;
  color: string;
}

const colors: ColorTypes[] = [
  {
    name: "Primary",
    color: "primary",
  },
  {
    name: "Secondary",
    color: "secondary",
  },
  {
    name: "Success",
    color: "success",
  },
  {
    name: "Danger",
    color: "danger",
  },
  {
    name: "Warning",
    color: "warning",
  },
  {
    name: "Info",
    color: "info",
  },
  {
    name: "Pink",
    color: "pink",
  },
  {
    name: "Blue",
    color: "blue",
  },
  {
    name: "Light",
    color: "light",
  },
  {
    name: "Dark",
    color: "dark",
  },
];

const DefaultBadges = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Default</h4>
        <p className="sub-header">
          A simple labeling component. Badges scale to match the size of the
          immediate parent element by using relative font sizing and{" "}
          <code>em</code> units.
        </p>

        <h1>
          h1.Example heading{" "}
          <span className="badge bg-secondary text-light">New</span>
        </h1>
        <h2>
          h2.Example heading{" "}
          <span className="badge badge-soft-success">New</span>
        </h2>
        <h3>
          h3.Example heading <span className="badge bg-primary">New</span>
        </h3>
        <h4>
          h4.Example heading{" "}
          <Link to="#" className="badge badge-soft-info">
            Info Link
          </Link>
        </h4>
        <h5>
          h5.Example heading{" "}
          <span className="badge badge-outline-warning">New</span>
        </h5>
        <h6>
          h6.Example heading <span className="badge bg-danger">New</span>
        </h6>
      </Card.Body>
    </Card>
  );
};

const ContexualBadges = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Contexual variations</h4>
        <p className="sub-header">
          Add any of the below mentioned modifier classes to change the
          appearance of a badge. Badge can be more contextual as well. Just use
          regular convention e.g. <code>bg-*color</code> to have badge with
          different background.
        </p>

        {(colors || []).map((color, index) => {
          return (
            <Badge
              className={classNames(
                "me-1",
                "badge bg-" + color.color,
                color.color === "light" ? "text-dark" : null
              )}
              key={index}
            >
              {color.name}
            </Badge>
          );
        })}

        <h5 className="mt-4">Soft Badges</h5>
        <p className="sub-header">
          Using the <code>.badge-soft-*</code> modifier class, you can have more
          soften variation.
        </p>

        {(colors || []).map((color, index) => {
          return (
            <Badge
              className={classNames("me-1", "badge-soft-" + color.color)}
              bg=""
              key={index}
            >
              {color.name}
            </Badge>
          );
        })}

        <h5 className="mt-4">Outline Badges</h5>
        <p className="sub-header">
          Using the <code>.badge-outline-*</code> to quickly create a bordered
          badges.
        </p>

        {(colors || []).map((color, index) => {
          return (
            <Badge
              bg=""
              className={classNames("me-1", "badge-outline-" + color.color)}
              key={index}
            >
              {color.name}
            </Badge>
          );
        })}
      </Card.Body>
    </Card>
  );
};

const PillBadges = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Pill Badges</h4>
        <p className="sub-header">
          Use the <code>.rounded-pill</code> modifier class to make badges more
          rounded.
        </p>

        {(colors || []).map((color, index) => {
          return (
            <Badge
              pill
              className={classNames(
                "me-1",
                "bg-" + color.color,
                color.color === "light" ? "text-dark" : null,
                color.color === "dark" ? "text-light" : null
              )}
              key={index}
            >
              {color.name}
            </Badge>
          );
        })}

        <h5 className="mt-4">Soft Badges</h5>
        <p className="sub-header">
          Use the <code>.badge-soft-*</code> modifier class to make badges
          lighten.
        </p>

        {(colors || []).map((color, index) => {
          return (
            <Badge
              pill
              bg=""
              className={classNames("me-1", "badge-soft-" + color.color)}
              key={index}
            >
              {color.name}
            </Badge>
          );
        })}

        <h5 className="mt-4">Outline Badges</h5>
        <p className="sub-header">
          Using the <code>.badge-outline-*</code> to quickly create a bordered
          badges.
        </p>

        {(colors || []).map((color, index) => {
          return (
            <Badge
              bg=""
              pill
              className={classNames("me-1", "badge-outline-" + color.color)}
              key={index}
            >
              {color.name}
            </Badge>
          );
        })}
      </Card.Body>
    </Card>
  );
};

const PositionedBadges = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Badge Positioned</h4>
          <p className="sub-header">
            Use the <code>.rounded-pill</code> modifier class to make badges
            more rounded.
          </p>

          <Row>
            <div className="col-6">
              <Button className="btn btn-primary position-relative">
                Inbox
                <Badge
                  pill
                  bg="danger"
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  99+
                  <span className="visually-hidden">unread messages</span>
                </Badge>
              </Button>
            </div>

            <div className="col-6">
              <Button className="btn btn-primary position-relative">
                Profile
                <Badge
                  bg="danger"
                  className="position-absolute top-0 start-100 translate-middle p-1 border border-light rounded-circle"
                >
                  <span className="visually-hidden">New alerts</span>
                </Badge>
              </Button>
            </div>

            <div className="col-6">
              <Button className="btn btn-success mt-4">
                Notifications
                <Badge bg="light" className=" text-dark ms-1">
                  4
                </Badge>
              </Button>
            </div>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

const DefaultPagination = () => {
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === 3}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <p className="mb-1 fw-bold">Default Pagination</p>
      <p className="text-muted font-14">
        Simple pagination inspired by Rdio, great for apps and search results.
      </p>
      <nav>
        <Pagination>
          <Pagination.Prev />
          {items}
          <Pagination.Next />
        </Pagination>
      </nav>
    </>
  );
};

const RoundedPagination = () => {
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === 3}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <>
      <p className="mb-1 fw-bold mt-4">Rounded Pagination</p>
      <p className="text-muted font-14">
        Add <code> .pagination-rounded</code> for rounded pagination.
      </p>
      <Pagination className="pagination-rounded">
        <Pagination.Prev />
        {items}
        <Pagination.Next />
      </Pagination>
    </>
  );
};

const PaginationSizes = () => {
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
  }
  return (
    <>
      <p className="mb-1 fw-bold mt-4">Sizing</p>
      <p className="text-muted font-14">
        Add <code>lg</code> or <code>sm</code> type to <code>size</code> prop
        for additional sizes.
      </p>

      <Pagination size="lg">
        <Pagination.Prev />
        {items}
        <Pagination.Next />
      </Pagination>

      <Pagination size="sm">
        <Pagination.Prev />
        {items}
        <Pagination.Next />
      </Pagination>
    </>
  );
};

const PaginationAlignment = () => {
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
  }
  return (
    <>
      <p className="mb-1 fw-bold mt-4">Alignment</p>
      <p className="text-muted font-14">
        Change the alignment of pagination components with flexbox utilities.
      </p>

      <Pagination className="justify-content-center">
        <Pagination.Prev disabled>Previous</Pagination.Prev>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Next>Next</Pagination.Next>
      </Pagination>

      <Pagination className="justify-content-end">
        <Pagination.Prev disabled>Previous</Pagination.Prev>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Next>Next</Pagination.Next>
      </Pagination>
    </>
  );
};

const BreadcrumbExample = () => {
  return (
    <>
      <h4 className="header-title mt-3 mt-sm-0">Breadcrumb</h4>
      <p className="text-muted font-14">
        Indicate the current page’s location within a navigational hierarchy
        that automatically adds separators via CSS. Please read the official{" "}
        <Link
          target="_blank"
          rel="noreferrer"
          to="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
        >
          Bootstrap
        </Link>{" "}
        documentation for more options.
      </p>

      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Library</Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/ui/general">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

const GeneralUI = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Base UI", path: "/ui/general" },
          { label: "General UI", path: "/ui/general", active: true },
        ]}
        title={"General UI"}
      />
      <Row>
        <Col xl={6}>
          <DefaultBadges />
          <ContexualBadges />
        </Col>
        <Col xl={6}>
          <PillBadges />
          <PositionedBadges />
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h4 className="header-title">Pagination</h4>
                  <p className="sub-header">
                    Provide pagination links for your site or app with the
                    multi-page pagination component.
                  </p>
                  <DefaultPagination />
                  <RoundedPagination />
                  <PaginationSizes />
                  <PaginationAlignment />
                </Col>
                <Col md={6}>
                  <BreadcrumbExample />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default GeneralUI;
