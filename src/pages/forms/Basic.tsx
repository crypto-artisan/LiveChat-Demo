import React from "react";
import { useForm } from "react-hook-form";
import {
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
  InputGroup,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../components/PageTitle";
import { FormInput } from "../../components/";

interface Colors {
  variant: string;
  name: string;
}

const BasicInputElements = () => {
  /*
   * form methods
   */
  const methods = useForm({
    defaultValues: {
      password: "12345",
      statictext: "email@example.com",
      color: "#727cf5",
    },
  });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Input Types</h4>
          <p className="sub-header">
            Most common form control, text-based input fields. Includes support
            for all HTML5 types: <code>text</code>, <code>password</code>,{" "}
            <code>datetime</code>, <code>datetime-local</code>,{" "}
            <code>date</code>, <code>month</code>, <code>time</code>,{" "}
            <code>week</code>, <code>number</code>, <code>email</code>,{" "}
            <code>url</code>, <code>search</code>, <code>tel</code>, and{" "}
            <code>color</code>.
          </p>

          <Row>
            <Col lg={6}>
              <form onSubmit={handleSubmit(() => {})}>
                <FormInput
                  label="Text"
                  type="text"
                  name="text"
                  containerClass={"mb-3"}
                  register={register}
                  key="text"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  containerClass={"mb-3"}
                  register={register}
                  key="email"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  label="Show/Hide Password"
                  type="password"
                  name="password"
                  placeholder="password placeholder"
                  containerClass={"mb-3"}
                  register={register}
                  key="password"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  label="Placeholder"
                  type="text"
                  name="placeholder"
                  placeholder="placeholder"
                  containerClass={"mb-3"}
                  register={register}
                  key="placeholder"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  label="Text Area"
                  type="textarea"
                  name="textarea"
                  rows="5"
                  containerClass={"mb-3"}
                  register={register}
                  key="textarea"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  label="Read only"
                  type="text"
                  name="text1"
                  id="text1"
                  placeholder="Readonly value"
                  readOnly
                  containerClass={"mb-3"}
                  register={register}
                  key="text1"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  label="Disabled"
                  type="text"
                  name="text2"
                  id="text2"
                  placeholder="Disabled value"
                  disabled
                  containerClass={"mb-3"}
                  register={register}
                  key="text2"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  label="Static control"
                  type="text"
                  name="statictext"
                  placeholder="Disabled"
                  readOnly
                  containerClass={"mb-3"}
                  register={register}
                  key="statictext"
                  errors={errors}
                  control={control}
                />

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="text3" className="form-label">
                    Helping text
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="text"
                    id="text3"
                    placeholder="Helping text"
                  />
                  <Form.Text>
                    A block of help text that breaks onto a new line and may
                    extend beyond one line.
                  </Form.Text>
                </Form.Group>
              </form>
            </Col>

            <Col lg={6}>
              <form onSubmit={handleSubmit(() => {})}>
                <FormInput
                  name="select"
                  label="Input Select"
                  type="select"
                  containerClass="mb-3"
                  className="form-select"
                  register={register}
                  key="select"
                  errors={errors}
                  control={control}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </FormInput>

                <FormInput
                  name="selectMulti"
                  label="Multiple Select"
                  type="select"
                  multiple
                  containerClass="mb-3"
                  className="form-select"
                  register={register}
                  key="selectMulti"
                  errors={errors}
                  control={control}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </FormInput>

                <FormInput
                  label="Default file input"
                  type="file"
                  name="file"
                  containerClass={"mb-3"}
                  register={register}
                  key="file"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  label="Date"
                  type="date"
                  name="date"
                  containerClass={"mb-3"}
                  register={register}
                  key="date"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  label="Month"
                  type="month"
                  name="month"
                  containerClass={"mb-3"}
                  register={register}
                  key="month"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  label="Time"
                  type="time"
                  name="time"
                  containerClass={"mb-3"}
                  register={register}
                  key="time"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  label="Week"
                  type="week"
                  name="week"
                  containerClass={"mb-3"}
                  register={register}
                  key="week"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  label="Number"
                  type="number"
                  name="number"
                  placeholder="number placeholder"
                  containerClass={"mb-3"}
                  register={register}
                  key="number"
                  errors={errors}
                  control={control}
                />

                <FormInput
                  label="Color"
                  type="color"
                  name="color"
                  className="w-100"
                  placeholder="color placeholder"
                  containerClass={"mb-3"}
                  register={register}
                  key="color"
                  errors={errors}
                  control={control}
                />

                <Form.Group className="mb-0">
                  <Form.Label htmlFor="exampleRange" className="form-label">
                    Range
                  </Form.Label>
                  <Form.Range />
                </Form.Group>
              </form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

const FloatingLabels = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Floating labels</h4>
          <p className="sub-header">
            Wrap a <code>&lt;Form.Control&gt;</code> element in{" "}
            <code>&lt;FloatingLabel&gt;</code>
            to enable floating labels with Bootstrap’s textual form fields. A{" "}
            <code>placeholder</code>
            is required on each <code>&lt;Form.Control&gt;</code> as our method
            of CSS-only floating labels uses the <code>:placeholder-shown</code>{" "}
            pseudo-element.
          </p>

          <Row>
            <Col lg={6}>
              <h5 className="mb-3">Floating Example</h5>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Col>

            <Col lg={6}>
              <h5 className="mb-3">Selects</h5>
              <FloatingLabel
                controlId="floatingSelect"
                label="Works with selects"
                className="mb-3"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>

              <Row className="g-2">
                <Col md>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Email address"
                  >
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      defaultValue="name@example.com"
                    />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Works with selects"
                  >
                    <Form.Select aria-label="Floating label select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

const SelectInput = () => {
  return (
    <>
      <h4 className="header-title">Select menu</h4>
      <p className="sub-header">
        Custom <code>&lt;select&gt;</code> menus need only a custom class,{" "}
        <code>.custom-select</code> to trigger the custom styles.
      </p>

      <Form.Group>
        <Form.Select className="mt-3" aria-label="Default select example">
          <option defaultValue="0">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
    </>
  );
};

const Switches = () => {
  return (
    <React.Fragment>
      <h4 className="header-title mt-4">Switches</h4>
      <p className="text-muted">
        A switch has the markup of a custom checkbox but uses the{" "}
        <code>.custom-switch</code> class to render a toggle switch. Switches
        also support the <code>disabled</code> attribute.
      </p>

      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Toggle this switch element"
        />
        <Form.Check
          disabled
          type="switch"
          label="Disabled switch element"
          id="disabled-custom-switch"
          className="mt-1"
        />
      </Form>
    </React.Fragment>
  );
};

const CustomCheckboxes = () => {
  return (
    <>
      <Form.Check
        type="checkbox"
        id="default-checkbox1"
        label="Check this custom checkbox"
      />
      <Form.Check
        type="checkbox"
        id="default-checkbox2"
        label="Check this custom checkbox"
      />
    </>
  );
};

const CustomRadios = () => {
  return (
    <>
      <Form.Check
        type="radio"
        id="default-radio1"
        name="customRadio"
        label="Toggle this custom radio"
      />
      <Form.Check
        type="radio"
        id="default-radio2"
        name="customRadio"
        label="Or toggle this other custom radio"
      />
    </>
  );
};

const InputSizes = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Input Sizes</h4>
        <p className="sub-header">
          Use size on <code>&lt;FormControl&gt;</code> and{" "}
          <code>&lt;FormLabel&gt;</code> to change the size of inputs and labels
          respectively.
        </p>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="small">Small</Form.Label>
            <Form.Control
              type="text"
              name="small"
              id="small"
              placeholder="Small"
              size="sm"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="Normal">Normal</Form.Label>
            <Form.Control
              type="text"
              name="Normal"
              id="Normal"
              placeholder="Normal"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="Large">Large</Form.Label>
            <Form.Control
              type="text"
              name="Large"
              id="Large"
              placeholder="Large"
              size="lg"
            />
          </Form.Group>

          <Form.Group className="mb-0">
            <Form.Label htmlFor="grid">Grid Sizes</Form.Label>
            <Row>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  name="grid"
                  id="grid"
                  placeholder=".col-sm-4"
                />
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

const InputGroups = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Input Group</h4>
        <p className="sub-header">
          Easily extend form conrols by adding text, buttons, or button groups
          on either side of textual inputs, custom selects, and custom file
          inputs
        </p>

        <Form>
          <Form.Group>
            <Form.Label htmlFor="Static">Static</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="Dropdown">Dropdown</Form.Label>
            <InputGroup className="mb-3">
              <DropdownButton
                variant="primary"
                title="Dropdown"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <Form.Control aria-label="Text input with dropdown button" />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="Button">Button</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="dark" id="button-addon2">
                Button
              </Button>
            </InputGroup>
          </Form.Group>

          <Row className="g-2">
            <Col sm={6}>
              <Form.Group>
                <Form.Label htmlFor="file">Default file input</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group>
                <Form.Label htmlFor="formFileMultiple01">
                  Multiple input
                </Form.Label>
                <Form.Control type="file" multiple />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

const DefaultForm = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mb-3 header-title">Basic Example</h4>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="exampleEmail2">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="exampleEmail2"
              placeholder="Enter your email"
            />
            <Form.Text>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="examplePassword2">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="examplePassword2"
              placeholder="password placeholder"
              defaultValue="12345"
            />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              id="formGridCheckbox"
              label="Check me out"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

const HorizontalForm = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mb-3 header-title">Horizontal Form</h4>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label htmlFor="exampleEmail3" column sm={3}>
              Email
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="email"
                name="email"
                id="exampleEmail3"
                placeholder="Email"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label htmlFor="examplePassword3" column sm={3}>
              Password
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="password"
                name="password"
                id="examplePassword3"
                placeholder="Password"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label htmlFor="examplePassword4" column sm={3}>
              Re-Password
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="password"
                name="password"
                id="examplePassword4"
                placeholder="Retype Password"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 9, offset: 3 }}>
              <Form.Check label="Check me out !" id="checkmeout" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-0" controlId="formHorizontalCheck">
            <Col sm={{ span: 9, offset: 3 }}>
              <Button variant="info" type="submit">
                Sign in
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

const InlineForm = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Column sizing</h4>

        <p className="sub-header">
          As shown in the previous examples, our grid system allows you to place
          any number of <code>.col</code>s within a <code>.row</code>.
        </p>
        <Form className="row row-cols-lg-auto g-3 align-items-center">
          <div className="col-12">
            <Form.Group className="mb-2 me-sm-2 mb-sm-0">
              <Form.Control
                readOnly
                type="email"
                name="email"
                id="exampleEmail4"
                bsPrefix="form-control-plaintext"
                placeholder="email@example.com"
              />
            </Form.Group>
          </div>

          <div className="col-12">
            <Form.Group className="mb-2 me-sm-2 mb-sm-0">
              <Form.Control
                type="password"
                name="password"
                id="examplePassword5"
                placeholder="Password"
              />
            </Form.Group>
          </div>

          <div className="col-12">
            <Button color="primary" type="submit">
              Confirm identity
            </Button>
          </div>
        </Form>

        <h6 className="font-13 mt-3">Auto-sizing</h6>

        <Form>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Jane Doe"
              />
            </Col>
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Username
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control
                  id="inlineFormInputGroup"
                  placeholder="Username"
                />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
                label="Remember me"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

const FormGrid = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Gutters</h4>
          <p className="text-muted font-13">
            More complex layouts can also be created with the grid system.
          </p>

          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Check me out"
                id="formGridCheckbox"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="waves-effect waves-light"
            >
              Sign in
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

const CheckboxBasic = () => {
  const colors: Colors[] = [
    {
      variant: "primary",
      name: "Primary",
    },
    {
      variant: "success",
      name: "Success",
    },
    {
      variant: "danger",
      name: "Danger",
    },
    {
      variant: "warning",
      name: "Warning",
    },
    {
      variant: "pink",
      name: "Pink",
    },
    {
      variant: "blue",
      name: "Blue",
    },
    {
      variant: "info",
      name: "Info",
    },
    {
      variant: "dark",
      name: "Dark",
    },
  ];
  return (
    <>
      <h4 className="header-title">Custom checkbox - Basic</h4>

      <p className="sub-header">
        Supports bootstrap brand colors: <code>.form-check</code>,
        <code>.form-check-*</code> etc.
      </p>

      {(colors || []).map((item, index) => {
        return (
          <Form.Check
            key={index}
            label={item.name}
            type="checkbox"
            id={`basic-checkbox-${index}`}
            className={classNames("mb-2", "form-check-" + item.variant)}
            aria-label="option 1"
            defaultChecked={index % 2 === 0}
          />
        );
      })}
    </>
  );
};

const CheckboxCircled = () => {
  const colors: Colors[] = [
    {
      variant: "primary",
      name: "Primary",
    },
    {
      variant: "success",
      name: "Success",
    },
    {
      variant: "danger",
      name: "Danger",
    },
    {
      variant: "warning",
      name: "Warning",
    },
    {
      variant: "pink",
      name: "Pink",
    },
    {
      variant: "blue",
      name: "Blue",
    },
    {
      variant: "info",
      name: "Info",
    },
    {
      variant: "dark",
      name: "Dark",
    },
  ];
  return (
    <>
      <h4 className="header-title">Custom checkbox - Circled</h4>

      <p className="sub-header">
        <code>.rounded-circle</code> for roundness.
      </p>

      {(colors || []).map((item, index) => {
        return (
          <Form.Check
            key={index}
            id={`circle-checkbox-${index}`}
            className={classNames(
              "mb-2",
              "form-check",
              "form-check-" + item.variant
            )}
          >
            <Form.Check.Input
              type="checkbox"
              className="rounded-circle"
              defaultChecked={index % 3 === 0}
            />
            <Form.Check.Label>{item.name} </Form.Check.Label>
          </Form.Check>
        );
      })}
    </>
  );
};

const CheckboxDisabled = () => {
  const colors: Colors[] = [
    {
      variant: "primary",
      name: "Primary",
    },
    {
      variant: "success",
      name: "Success",
    },
    {
      variant: "danger",
      name: "Danger",
    },
    {
      variant: "warning",
      name: "Warning",
    },
    {
      variant: "pink",
      name: "Pink",
    },
  ];
  return (
    <>
      <h4 className="header-title">Custom radio - Circled</h4>

      <p className="sub-header">
        <code>.rounded-circle</code> for roundness.
      </p>

      {(colors || []).map((item, index) => {
        return (
          <Form.Check
            key={index}
            label={item.name}
            id={`circled-radio-${index}`}
            type="radio"
            className={classNames("mb-2", "form-check-" + item.variant)}
            aria-label="option 1"
            disabled
            defaultChecked={index % 3 === 0}
          />
        );
      })}
    </>
  );
};

const RadioBasic = () => {
  const colors: Colors[] = [
    {
      variant: "primary",
      name: "Primary",
    },
    {
      variant: "success",
      name: "Success",
    },
    {
      variant: "danger",
      name: "Danger",
    },
    {
      variant: "warning",
      name: "Warning",
    },
    {
      variant: "pink",
      name: "Pink",
    },
    {
      variant: "blue",
      name: "Blue",
    },
    {
      variant: "info",
      name: "Info",
    },
    {
      variant: "dark",
      name: "Dark",
    },
  ];
  return (
    <>
      <h4 className="header-title">Custom radio - Basic</h4>

      <p className="sub-header">
        Supports bootstrap brand colors: <code>.form-check</code>,
        <code>.form-check-*</code> etc.
      </p>
      <Row>
        <Col sm={6}>
          {(colors || []).map((item, index) => {
            return (
              <Form.Check
                key={index}
                type="radio"
                id={`basic-radio-${index}`}
                label={item.name}
                className={classNames("mb-2", "form-check-" + item.variant)}
                aria-label="option 1"
                name="customradio1"
                defaultChecked={index === 2}
              />
            );
          })}
        </Col>
        <Col sm={6}>
          {(colors || []).map((item, index) => {
            return (
              <Form.Check
                key={index}
                type="radio"
                id={`basic-radio2-${index}`}
                label={item.name}
                className={classNames("mb-2", "form-check-" + item.variant)}
                aria-label="option 1"
                defaultChecked={index % 3 === 0}
              />
            );
          })}
        </Col>
      </Row>
    </>
  );
};

const RadioDisabled = () => {
  const colors: Colors[] = [
    {
      variant: "danger",
      name: "Danger",
    },
    {
      variant: "dark",
      name: "Dark",
    },
    {
      variant: "blue",
      name: "Blue",
    },
    {
      variant: "pink",
      name: "Pink",
    },
  ];
  return (
    <>
      <h4 className="header-title">Custom checkbox - Circled</h4>

      <p className="sub-header">
        <code>.rounded-circle</code> for roundness.
      </p>

      {(colors || []).map((item, index) => {
        return (
          <Form.Check
            id={"custom-checkbox-" + item.variant}
            type="radio"
            key={index}
            label={item.name}
            className={classNames("mb-2", "form-check-" + item.variant)}
            aria-label="option 1"
            disabled
            defaultChecked
          />
        );
      })}
    </>
  );
};

const BasicForms = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Forms", path: "/forms/basic" },
          { label: "Basic Elements", path: "/forms/basic", active: true },
        ]}
        title={"Basic Elements"}
      />

      <Row>
        <Col>
          <BasicInputElements />
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <SelectInput />
                  <Switches />
                </Col>

                <Col md={6}>
                  <h4 className="header-title mt-5 mt-sm-0">
                    Checkboxes and radios
                  </h4>
                  <div className="mt-3">
                    <CustomCheckboxes />
                  </div>
                  <div className="mt-3">
                    <CustomRadios />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <FloatingLabels />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <InputSizes />
        </Col>

        <Col lg={6}>
          <InputGroups />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <DefaultForm />
        </Col>

        <Col lg={6}>
          <HorizontalForm />
        </Col>
      </Row>

      <Row>
        <Col>
          <InlineForm />
        </Col>
      </Row>

      <Row>
        <Col>
          <FormGrid />
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <CheckboxBasic />
                </Col>

                <Col md={4}>
                  <CheckboxCircled />
                </Col>

                <Col md={4}>
                  <CheckboxDisabled />
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
                <Col md={4}>
                  <RadioBasic />
                </Col>

                <Col md={4}>
                  <RadioDisabled />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default BasicForms;
