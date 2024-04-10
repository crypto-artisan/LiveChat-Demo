import React, { useState } from "react";
import { Row, Col, Card, Button, InputGroup, Form } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";

const NormalFormValidation = () => {
  const [validated, setValidated] = useState<boolean>(false);

  /*
   * handle form submission
   */
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Bootstrap Validation - Normal</h4>
          <p className="sub-header">
            Provide valuable, actionable feedback to your users with HTML5 form
            validation–available in all our supported browsers.
          </p>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                id="validation-check"
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

const FormValidationWithTooltip = () => {
  const [validated, setValidated] = useState<boolean>(false);

  /*
   * handle form submission
   */
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Bootstrap Validation (Tooltips)</h4>
          <p className="sub-header">
            If your form layout allows it, you can swap the{" "}
            <code>.valid | invalid-feedback</code> classes for{" "}
            <code>.valid | invalid-tooltip</code> classes to display validation
            feedback in a styled tooltip.
          </p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group
              className="position-relative mb-3"
              controlId="validationTooltip01"
            >
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="position-relative mb-3"
              controlId="validationTooltip02"
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="position-relative mb-3"
              controlId="validationCustonTooltipme"
            >
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              className="position-relative mb-3"
              controlId="validationTooltip03"
            >
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid" tooltip>
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="position-relative mb-3"
              controlId="validationTooltip04"
            >
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid" tooltip>
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="position-relative mb-3"
              controlId="validationTooltip05"
            >
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid" tooltip>
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

const FormValidation = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Forms", path: "/forms/validation" },
          { label: "Form Validation", path: "/forms/validation", active: true },
        ]}
        title={"Form Validation"}
      />

      <Row>
        <Col lg={6}>
          <NormalFormValidation />
        </Col>

        <Col lg={6}>
          <FormValidationWithTooltip />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FormValidation;
