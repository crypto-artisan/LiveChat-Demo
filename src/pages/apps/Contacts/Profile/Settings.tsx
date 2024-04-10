import React from "react";
import { useForm, FieldErrors, Control } from "react-hook-form";
import { Row, Col, InputGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

// components
import { FormInput } from "../../../../components/";

interface SocialInfo {
  label: string;
  icon: string;
  placeholder: string;
}

interface FormInputProps {
  register: any;
  errors: FieldErrors;
  control: Control<any>;
}

const PersonalInfo = ({ register, errors, control }: FormInputProps) => {
  return (
    <>
      <h5 className="mb-4 text-uppercase">
        <i className="mdi mdi-account-circle me-1"></i> Personal Info
      </h5>
      <Row>
        <Col md={6}>
          <FormInput
            label="First Name"
            type="text"
            name="firstname"
            placeholder="Enter first name"
            containerClass={"mb-3"}
            register={register}
            key="firstname"
            errors={errors}
            control={control}
          />
        </Col>
        <Col md={6}>
          <FormInput
            label="Last Name"
            type="text"
            name="lastname"
            placeholder="Enter last name"
            containerClass={"mb-3"}
            register={register}
            key="lastname"
            errors={errors}
            control={control}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormInput
            label="Bio"
            type="textarea"
            name="userbio"
            placeholder="Write something..."
            rows="4"
            containerClass={"mb-3"}
            register={register}
            key="userbio"
            errors={errors}
            control={control}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <FormInput
            label="Email Address"
            type="text"
            name="usermail"
            placeholder="Enter email"
            register={register}
            key="useremail"
            errors={errors}
            control={control}
          />
          <span className="form-text text-muted">
            <small>
              If you want to change email please <Link to="#">click</Link> here.
            </small>
          </span>
        </Col>
        <Col md={6} className="mb-3">
          <FormInput
            label="Password"
            type="text"
            name="userpassword"
            placeholder="Enter password"
            register={register}
            key="userpassword"
            errors={errors}
            control={control}
          />
          <span className="form-text text-muted">
            <small>
              If you want to change password please <Link to="#">click</Link>{" "}
              here.
            </small>
          </span>
        </Col>
      </Row>
    </>
  );
};

const CompanyInfo = ({ register, errors, control }: FormInputProps) => {
  return (
    <>
      <h5 className="mb-3 text-uppercase bg-light p-2">
        <i className="mdi mdi-office-building me-1"></i> Company Info
      </h5>
      <Row>
        <Col md={6}>
          <FormInput
            label="Company Name"
            type="text"
            name="companyname"
            placeholder="Enter company name"
            containerClass={"mb-3"}
            register={register}
            key="companyname"
            errors={errors}
            control={control}
          />
        </Col>
        <Col md={6}>
          <FormInput
            label="Website"
            type="text"
            name="cwebsite"
            placeholder="Enter website url"
            containerClass={"mb-3"}
            register={register}
            key="cwebsite"
            errors={errors}
            control={control}
          />
        </Col>
      </Row>
    </>
  );
};

const Social = ({ socialinfo }: { socialinfo: SocialInfo[] }) => {
  return (
    <>
      <h5 className="mb-3 text-uppercase bg-light p-2">
        <i className="mdi mdi-earth me-1"></i> Social
      </h5>

      <Row>
        {(socialinfo || []).map((item, index) => {
          return (
            <Col key={index} md={6} className="mb-3">
              <Form.Label> {item.label} </Form.Label>
              <InputGroup className="mb-0">
                <span className="input-group-text">
                  <i className={item.icon}></i>
                </span>
                <Form.Control placeholder={item.placeholder} />
              </InputGroup>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

const Settings = () => {
  /*
   * form methods
   */
  const methods = useForm();
  const {
    register,
    control,
    formState: { errors },
  } = methods;

  const socialInfo: SocialInfo[] = [
    {
      label: "Facebook",
      icon: "fab fa-facebook-square",
      placeholder: "Url",
    },
    {
      label: "Twitter",
      icon: "fab fa-twitter",
      placeholder: "Username",
    },
    {
      label: "Instagram",
      icon: "fab fa-instagram",
      placeholder: "Url",
    },
    {
      label: "Linkedin",
      icon: "fab fa-linkedin",
      placeholder: "Url",
    },
    {
      label: "Skype",
      icon: "fab fa-skype",
      placeholder: "@username",
    },
    {
      label: "Github",
      icon: "fab fa-github",
      placeholder: "Username",
    },
  ];

  return (
    <>
      <form>
        <PersonalInfo register={register} errors={errors} control={control} />
        <CompanyInfo register={register} errors={errors} control={control} />
        <Social socialinfo={socialInfo} />

        <div className="text-end">
          <button type="submit" className="btn btn-success mt-2">
            <i className="mdi mdi-content-save"></i> Save
          </button>
        </div>
      </form>
    </>
  );
};

export default Settings;
