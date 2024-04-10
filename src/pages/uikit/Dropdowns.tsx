import React from "react";
import { Row, Col, Card, Dropdown, ButtonGroup, Button } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";

const colors = [
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
];

const SingleButtonDropdown = () => {
  return (
    <>
      <p className="h5">Single button dropdowns</p>
      <p className="text-muted font-13 mb-3">
        You can use <code>DropdownButton</code> to create a simple dropdown.
        Also, you can use prop <code>as</code> to create custom element typeof
        dropdown.
      </p>
      <Row>
        <Col sm={6}>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Dropdown Button <i className="mdi mdi-chevron-down"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col sm={6}>
          <Dropdown className="mt-sm-0 mt-2">
            <Dropdown.Toggle as="a" variant="light" className="btn btn-light">
              Dropdown link <i className="mdi mdi-chevron-down"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </>
  );
};

const ColorVariantButtonDropdown = () => {
  return (
    <React.Fragment>
      <p className="mb-1 mt-5 h5">Variant</p>
      <p className="text-muted font-13 mb-3">
        The best part is you can do this with any button variant, too:
      </p>

      {(colors || []).map((color, index) => {
        return (
          <Dropdown key={index} as={ButtonGroup} className="mb-2 me-1">
            <Dropdown.Toggle variant={color.color}>
              {color.name} <i className="mdi mdi-chevron-down"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
      })}
    </React.Fragment>
  );
};

const DropendVariationDropdowns = () => {
  return (
    <>
      <p className="mb-1 mt-5 h5">Dropend variation</p>
      <p className="text-muted font-13 mb-3">
        Trigger dropdown menus right of their toggle elements, with the{" "}
        <code>drop</code> prop.
      </p>
      <Dropdown as={ButtonGroup} className="mb-2 me-1" drop="end">
        <Dropdown.Toggle variant="blue">
          Dropend <i className="mdi mdi-chevron-right"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={ButtonGroup} className="mb-2" drop="end">
        <Button variant="success">Split Dropend</Button>
        <Dropdown.Toggle variant="success">
          <i className="mdi mdi-chevron-right"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const DropupVariationDropdowns = () => {
  return (
    <>
      <p className="mb-1 mt-5 h5">Dropup variation</p>
      <p className="text-muted font-13 mb-3">
        Trigger dropdown menus above of their toggle elements, with the{" "}
        <code>drop</code> prop.
      </p>
      <Dropdown as={ButtonGroup} className="mb-2 me-1" drop="up">
        <Dropdown.Toggle variant="light">
          Dropup <i className="mdi mdi-chevron-up"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider as="div" />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={ButtonGroup} className="mb-2" drop="up">
        <Button variant="light">Split Dropup</Button>
        <Dropdown.Toggle variant="light">
          <i className="mdi mdi-chevron-up"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider as="div" />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const ActiveItemDropdown = () => {
  return (
    <>
      <p className="mb-1 mt-5 h5">Active Item</p>
      <p className="text-muted font-13 mb-3">
        Add <code>active</code> prop to item in the dropdown to{" "}
        <strong>style them as active</strong>.
      </p>

      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="secondary">
          Active Item <i className="mdi mdi-chevron-down"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Regular link</Dropdown.Item>
          <Dropdown.Item active>Active link</Dropdown.Item>
          <Dropdown.Item>Another link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const DropdownWithHeader = () => {
  return (
    <>
      <p className="mb-1 mt-5 h5">Headers</p>

      <p className="text-muted font-13 mb-3">
        Add a header to label sections of actions.
      </p>

      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="secondary">
          Header <i className="mdi mdi-chevron-down"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>Dropdown header</Dropdown.Header>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const CustomDropdown = () => {
  return (
    <>
      <p className="mb-1 mt-5 h5">Forms</p>
      <p className="text-muted font-13 mb-3">
        Put a form within a dropdown menu, or make it into a dropdown menu, and
        use margin or padding utilities to give it the negative space you
        require.
      </p>

      <Dropdown>
        <Dropdown.Toggle variant="secondary">
          Form <i className="mdi mdi-chevron-down"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <form className="px-4 py-3">
            <div className="mb-2">
              <label htmlFor="exampleDropdownFormEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleDropdownFormEmail1"
                placeholder="email@example.com"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="exampleDropdownFormPassword1"
                className="form-label"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword1"
                placeholder="Password"
              />
            </div>
            <div className="mb-2">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dropdownCheck"
                />
                <label className="form-check-label" htmlFor="dropdownCheck">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">New around here? Sign up</Dropdown.Item>
          <Dropdown.Item eventKey="4">Forgot password?</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const SplitColorVariantButtonDropdown = () => {
  return (
    <React.Fragment>
      <p className="mb-1 h5">Split button dropdowns</p>
      <p className="text-muted font-13 mb-3">
        You can split button dropdowns by adding <code>SplitButton</code>.
      </p>
      {(colors || []).map((color, index) => {
        return (
          <Dropdown key={index} as={ButtonGroup} className="me-1 mb-2">
            <Button variant={color.color}>{color.name} </Button>

            <Dropdown.Toggle split variant={color.color}>
              <i className="mdi mdi-chevron-down"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
      })}
    </React.Fragment>
  );
};

const ButtonDropdownSizes = () => {
  const sizes = [
    {
      size: "lg",
      name: "Large button",
    },
    {
      size: "sm",
      name: "Small button",
    },
  ];
  return (
    <React.Fragment>
      <p className="mb-1 h5 mt-5">Sizing</p>
      <p className="text-muted font-13 mb-3">
        Button dropdowns work with buttons of all sizes, including default and
        split dropdown buttons.
      </p>
      {(sizes || []).map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Dropdown as={ButtonGroup} size={item.size} className="mb-2 me-1">
              <Dropdown.Toggle variant="light">
                {item.name} <i className="mdi mdi-chevron-down"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider as="div" />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup} size={item.size} className="me-1 mb-2">
              <Button variant="light">{item.name}</Button>
              <Dropdown.Toggle variant="light">
                <i className="mdi mdi-chevron-down"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider as="div" />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

const DropstartVariationDropdowns = () => {
  return (
    <>
      <p className="mb-1 mt-5 h5">Dropstart variation</p>
      <p className="text-muted font-13 mb-3">
        Trigger dropdown menus left of their toggle elements, with the{" "}
        <code>drop</code> prop.
      </p>
      <Dropdown as={ButtonGroup} className="mb-2 me-1" drop="start">
        <Dropdown.Toggle variant="info">
          <i className="mdi mdi-chevron-left"></i>Dropstart
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={ButtonGroup} className="mb-2" drop="start">
        <Dropdown.Toggle variant="secondary">
          <i className="mdi mdi-chevron-left"></i>
        </Dropdown.Toggle>
        <Button variant="secondary">Split dropstart</Button>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const DropdownMenuAlignment = () => {
  return (
    <>
      <p className="mb-1 h5 mt-5">Menu alignment</p>
      <p className="text-muted font-13 mb-3">
        Passing <code>right</code> to the <code>menuAligh</code> prop on the
        <code> DropdownButton</code> to right align the dropdown menu.
      </p>

      <Dropdown as={ButtonGroup} className="mb-2 me-1" align="end">
        <Dropdown.Toggle variant="light">
          Right-aligned <i className="mdi mdi-chevron-down"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const DisabledItemDropdown = () => {
  return (
    <>
      <p className="mb-1 mt-5 h5">Disabled Item</p>

      <p className="text-muted font-13 mb-3">
        Add <code>disabled</code> prop to item in the dropdown to{" "}
        <strong>style them as disabled</strong>.
      </p>

      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle>
          Disabled <i className="mdi mdi-chevron-down"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Regular link</Dropdown.Item>
          <Dropdown.Item disabled>Disabled link</Dropdown.Item>
          <Dropdown.Item>Another link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const DropdownWithText = () => {
  return (
    <>
      <p className="mb-1 mt-5 h5">Text</p>
      <p className="text-muted font-13 mb-3">
        Place any freeform text within a dropdown menu with text and use spacing
        utilities. Note that you’ll likely need additional sizing styles to
        constrain the menu width.
      </p>

      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle>
          Text Dropdown <i className="mdi mdi-chevron-down"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-3 text-muted" style={{ maxWidth: "200px" }}>
          <p>Some example text that's free-flowing within the dropdown menu.</p>
          <p className="mb-0">And this is more example text.</p>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const Dropdowns = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Base UI", path: "/ui/dropdowns" },
          { label: "Dropdowns", path: "/ui/dropdowns", active: true },
        ]}
        title={"Dropdowns"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Examples</h4>
              <p className="sub-header">
                Toggle contextual overlays for displaying lists of links and
                more with the Bootstrap dropdown plugin.
              </p>

              <Row>
                <Col xl={6}>
                  <SingleButtonDropdown />
                  <ColorVariantButtonDropdown />
                  <DropendVariationDropdowns />
                  <DropupVariationDropdowns />
                  <ActiveItemDropdown />
                  <DropdownWithHeader />
                  <CustomDropdown />
                </Col>

                <Col xl={6} className="mt-5 mt-xl-0">
                  <SplitColorVariantButtonDropdown />
                  <ButtonDropdownSizes />
                  <DropstartVariationDropdowns />
                  <DropdownMenuAlignment />
                  <DisabledItemDropdown />
                  <DropdownWithText />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Dropdowns;
