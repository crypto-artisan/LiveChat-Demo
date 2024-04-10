import React from "react";
import { Row, Col, Card, Form, Button, ProgressBar } from "react-bootstrap";
import { Wizard, Steps, Step } from "react-albus";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import PageTitle from "../../components/PageTitle";
import { VerticalForm, FormInput } from "../../components/";

const BasicWizard = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mb-3"> Basic Wizard</h4>

        <Wizard>
          <Steps>
            <Step
              id="login"
              render={({ next }) => (
                <Form>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label htmlFor="exampleEmail" column md={3}>
                      Email
                    </Form.Label>
                    <Col md={9}>
                      <Form.Control
                        type="email"
                        name="exampleEmail"
                        id="exampleEmail"
                        placeholder="Enter email"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label htmlFor="examplePassword" column md={3}>
                      Password
                    </Form.Label>
                    <Col md={9}>
                      <Form.Control
                        type="password"
                        name="examplePassword"
                        id="examplePassword"
                        placeholder="password placeholder"
                        defaultValue="12345"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label htmlFor="examplerePassword" column md={3}>
                      Re-Password
                    </Form.Label>
                    <Col md={9}>
                      <Form.Control
                        type="password"
                        name="exampleRepassword"
                        id="examplerePassword"
                        placeholder="password"
                        defaultValue="12345"
                      />
                    </Col>
                  </Form.Group>

                  <ul className="list-inline wizard mb-0">
                    <li className="next list-inline-item float-end">
                      <Button onClick={next} variant="success">
                        Next
                      </Button>
                    </li>
                  </ul>
                </Form>
              )}
            />
            <Step
              id="gandalf"
              render={({ next, previous }) => (
                <Form>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label htmlFor="fname" column md={3}>
                      First Name
                    </Form.Label>
                    <Col md={9}>
                      <Form.Control
                        type="text"
                        name="fname"
                        id="fname"
                        placeholder="Enter first name"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label htmlFor="lname" column md={3}>
                      Last Name
                    </Form.Label>
                    <Col md={9}>
                      <Form.Control
                        type="text"
                        name="lname"
                        id="lname"
                        placeholder="enter last name"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label htmlFor="phone" column md={3}>
                      Phone Number
                    </Form.Label>
                    <Col md={9}>
                      <Form.Control
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="enter phone number"
                      />
                    </Col>
                  </Form.Group>

                  <ul className="list-inline wizard mb-0">
                    <li className="previous list-inline-item">
                      <Button onClick={previous} variant="info">
                        Previous
                      </Button>
                    </li>
                    <li className="next list-inline-item float-end">
                      <Button onClick={next} variant="success">
                        Next
                      </Button>
                    </li>
                  </ul>
                </Form>
              )}
            />
            <Step
              id="dumbledore"
              render={({ previous }) => (
                <Row>
                  <Col sm={12}>
                    <div className="text-center">
                      <h2 className="mt-0">
                        <i className="mdi mdi-check-all"></i>
                      </h2>
                      <h3 className="mt-0">Thank you !</h3>

                      <p className="w-75 mb-2 mx-auto">
                        Quisque nec turpis at urna dictum luctus. Suspendisse
                        convallis dignissim eros at volutpat. In egestas mattis
                        dui. Aliquam mattis dictum aliquet.
                      </p>

                      <div className="mb-3">
                        <Form.Check type="checkbox">
                          <Form.Check.Input type="checkbox" />{" "}
                          <Form.Check.Label>
                            I agree with the Terms and Conditions
                          </Form.Check.Label>
                        </Form.Check>
                      </div>
                    </div>
                  </Col>

                  <Col sm={12}>
                    <ul className="list-inline wizard mb-0">
                      <li className="previous list-inline-item">
                        <Button onClick={previous} variant="info">
                          Previous
                        </Button>
                      </li>

                      <li className="next list-inline-item float-end">
                        <Button variant="success">Submit</Button>
                      </li>
                    </ul>
                  </Col>
                </Row>
              )}
            />
          </Steps>
        </Wizard>
      </Card.Body>
    </Card>
  );
};

const WizardWithProgressbar = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mb-3">Wizard with Progress bar</h4>

        <Wizard
          render={({ step, steps }) => (
            <React.Fragment>
              <ProgressBar
                animated
                striped
                variant="success"
                now={((steps.indexOf(step) + 1) / steps.length) * 100}
                className="mb-3 progress-sm"
              />

              <Steps>
                <Step
                  id="login"
                  render={({ next }) => (
                    <Form>
                      <Form.Group as={Row} className="mb-3">
                        <Form.Label htmlFor="exampleEmail" column md={3}>
                          Email
                        </Form.Label>
                        <Col md={9}>
                          <Form.Control
                            type="email"
                            name="exampleEmail"
                            id="exampleEmail2"
                            placeholder="Enter email"
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3">
                        <Form.Label htmlFor="examplePassword" column md={3}>
                          Password
                        </Form.Label>
                        <Col md={9}>
                          <Form.Control
                            type="password"
                            name="password"
                            id="examplePassword2"
                            placeholder="password placeholder"
                            defaultValue="12345"
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3">
                        <Form.Label htmlFor="examplerePassword" column md={3}>
                          Re-Password
                        </Form.Label>
                        <Col md={9}>
                          <Form.Control
                            type="password"
                            name="repassword"
                            id="examplerePassword2"
                            placeholder="password"
                            defaultValue="12345"
                          />
                        </Col>
                      </Form.Group>

                      <ul className="list-inline wizard mb-0">
                        <li className="next list-inline-item float-end">
                          <Button onClick={next} variant="success">
                            Next
                          </Button>
                        </li>
                      </ul>
                    </Form>
                  )}
                />
                <Step
                  id="gandalf"
                  render={({ next, previous }) => (
                    <Form>
                      <Form.Group as={Row} className="mb-3">
                        <Form.Label htmlFor="fname" column md={3}>
                          First Name
                        </Form.Label>
                        <Col md={9}>
                          <Form.Control
                            type="text"
                            name="fname"
                            id="fname"
                            placeholder="Enter first name"
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3">
                        <Form.Label htmlFor="lname" column md={3}>
                          Last Name
                        </Form.Label>
                        <Col md={9}>
                          <Form.Control
                            type="text"
                            name="lname"
                            id="lname"
                            placeholder="enter last name"
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3">
                        <Form.Label htmlFor="phone" column md={3}>
                          Phone Number
                        </Form.Label>
                        <Col md={9}>
                          <Form.Control
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="enter phone number"
                          />
                        </Col>
                      </Form.Group>

                      <ul className="list-inline wizard mb-0">
                        <li className="previous list-inline-item">
                          <Button onClick={previous} variant="info">
                            Previous
                          </Button>
                        </li>
                        <li className="next list-inline-item float-end">
                          <Button onClick={next} variant="success">
                            Next
                          </Button>
                        </li>
                      </ul>
                    </Form>
                  )}
                />
                <Step
                  id="dumbledore"
                  render={({ previous }) => (
                    <Row>
                      <Col sm={12}>
                        <div className="text-center">
                          <h2 className="mt-0">
                            <i className="mdi mdi-check-all"></i>
                          </h2>
                          <h3 className="mt-0">Thank you !</h3>

                          <p className="w-75 mb-2 mx-auto">
                            Quisque nec turpis at urna dictum luctus.
                            Suspendisse convallis dignissim eros at volutpat. In
                            egestas mattis dui. Aliquam mattis dictum aliquet.
                          </p>

                          <div className="mb-3">
                            <Form.Check type="checkbox">
                              <Form.Check.Input type="checkbox" />{" "}
                              <Form.Check.Label>
                                I agree with the Terms and Conditions
                              </Form.Check.Label>
                            </Form.Check>
                          </div>
                        </div>
                      </Col>

                      <Col sm={12}>
                        <ul className="list-inline wizard mb-0">
                          <li className="previous list-inline-item">
                            <Button onClick={previous} variant="info">
                              Previous
                            </Button>
                          </li>

                          <li className="next list-inline-item float-end">
                            <Button variant="success">Submit</Button>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  )}
                />
              </Steps>
            </React.Fragment>
          )}
        />
      </Card.Body>
    </Card>
  );
};

const WizardWithFormValidation = () => {
  /*
   * form validation schema
   */
  const validationSchema = yupResolver(
    yup.object().shape({
      email: yup.string().required("Please enter Email address"),
      password: yup.string().required("Please enter Password"),
      checkbox: yup.bool().oneOf([true]),
    })
  );
  const validationSchema2 = yupResolver(
    yup.object().shape({
      firstname: yup.string().required("Please enter First Name"),
      lastname: yup.string().required("Please enter Last Name"),
      checkbox: yup.bool().oneOf([true]),
    })
  );

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mb-3">Wizard with Validation</h4>

        <Wizard
          render={({ step, steps }) => (
            <React.Fragment>
              <ProgressBar
                animated
                striped
                variant="success"
                now={((steps.indexOf(step) + 1) / steps.length) * 100}
                className="mb-3 progress-sm"
              />

              <Steps>
                <Step
                  id="login"
                  render={({ next }) => (
                    <VerticalForm
                      onSubmit={(event, values) => next()}
                      resolver={validationSchema}
                    >
                      <FormInput
                        label="Username/Email"
                        type="email"
                        name="email"
                        containerClass={"mb-3"}
                      />
                      <FormInput
                        label="Password"
                        type="password"
                        name="password"
                        containerClass={"mb-3"}
                      />

                      <FormInput
                        label="Remember me"
                        type="checkbox"
                        name="checkbox"
                      />

                      <ul className="list-inline wizard mb-0">
                        <li className="next list-inline-item float-end">
                          <Button variant="success" type="submit">
                            Next
                          </Button>
                        </li>
                      </ul>
                    </VerticalForm>
                  )}
                />
                <Step
                  id="gandalf"
                  render={({ next, previous }) => (
                    <VerticalForm
                      onSubmit={(event, values) => next()}
                      resolver={validationSchema2}
                    >
                      <FormInput
                        label="First Name"
                        type="text"
                        name="firstname"
                        containerClass={"mb-3"}
                      />
                      <FormInput
                        label="Last Name"
                        type="text"
                        name="lastname"
                        containerClass={"mb-3"}
                      />

                      <FormInput
                        label="Agree to terms and conditions"
                        type="checkbox"
                        name="checkbox"
                        containerClass={"mb-3"}
                      />

                      <ul className="list-inline wizard mb-0">
                        <li className="previous list-inline-item">
                          <Button onClick={previous} variant="info">
                            Previous
                          </Button>
                        </li>
                        <li className="next list-inline-item float-end">
                          <Button variant="success" type="submit">
                            Next
                          </Button>
                        </li>
                      </ul>
                    </VerticalForm>
                  )}
                />
                <Step
                  id="dumbledore"
                  render={({ previous }) => (
                    <Row>
                      <Col sm={12}>
                        <div className="text-center">
                          <h2 className="mt-0">
                            <i className="mdi mdi-check-all"></i>
                          </h2>
                          <h3 className="mt-0">Thank you !</h3>

                          <p className="w-75 mb-2 mx-auto">
                            Quisque nec turpis at urna dictum luctus.
                            Suspendisse convallis dignissim eros at volutpat. In
                            egestas mattis dui. Aliquam mattis dictum aliquet.
                          </p>

                          <div className="mb-3">
                            <Form.Check type="checkbox">
                              <Form.Check.Input type="checkbox" />{" "}
                              <Form.Check.Label>
                                I agree with the Terms and Conditions
                              </Form.Check.Label>
                            </Form.Check>
                          </div>
                        </div>
                      </Col>

                      <Col sm={12}>
                        <ul className="list-inline wizard mb-0">
                          <li className="previous list-inline-item">
                            <Button onClick={previous} variant="info">
                              Previous
                            </Button>
                          </li>

                          <li className="next list-inline-item float-end">
                            <Button variant="success">Submit</Button>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  )}
                />
              </Steps>
            </React.Fragment>
          )}
        />
      </Card.Body>
    </Card>
  );
};

const FormWizard = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Forms", path: "/ui/forms/wizard" },
          { label: "Form Wizard", path: "/ui/forms/wizard", active: true },
        ]}
        title={"Form Wizard"}
      />

      <Row>
        <Col xl={6}>
          <BasicWizard />
        </Col>

        <Col xl={6}>
          <WizardWithProgressbar />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <WizardWithFormValidation />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FormWizard;
