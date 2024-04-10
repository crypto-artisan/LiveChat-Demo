import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { FormInput } from "../../components";

// Images
import BGShape from '../../assets/images/landing/bg-shape.png'


const ContactUs = () => {
  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      fullname: yup.string().required("Please enter your name"),
      emailaddress: yup.string().required("Please enter your name"),
      subject: yup.string().required("Please enter your name"),
    })
  );

  /*
   * form methods
   */
  const methods = useForm({ resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  return (
    <>
      <section className="section pb-0 bg-gradient" id="contact">
        <div className="bg-shape">
        <img src={BGShape} alt="bg-img" className="img-fluid mx-auto d-block" />
          {/* <BgShapeSVG /> */}
        </div>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="title text-center mb-4">
                <h3 className="text-white">Have any Questions ?</h3>
                <p className="text-white-50">
                  Please fill out the following form and we will get back to you
                  shortly
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={4}>
              <div className="contact-content text-center mt-4">
                <div className="contact-icon mb-2">
                  <i className="mdi mdi-email-outline text-info h2"></i>
                </div>
                <div className="contact-details text-white">
                  <h6 className="text-white">E-mail</h6>
                  <p className="text-white-50">example@abc.com</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-content text-center mt-4">
                <div className="contact-icon mb-2">
                  <i className="mdi mdi-cellphone-iphone text-info h2"></i>
                </div>
                <div className="contact-details">
                  <h6 className="text-white">Phone</h6>
                  <p className="text-white-50">012-345-6789</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-content text-center mt-4">
                <div className="contact-icon mb-2">
                  <i className="mdi mdi-map-marker text-info h2"></i>
                </div>
                <div className="contact-details">
                  <h6 className="text-white">Address</h6>
                  <p className="text-white-50">4413 Redbud Drive, New York</p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="custom-form p-5 bg-white">
                <span id="error-msg"></span>
                <form onSubmit={handleSubmit(() => {})}>
                  <Row>
                    <Col lg={6}>
                      <FormInput
                        type="text"
                        label="Name"
                        name="fullname"
                        placeholder="Enter your name..."
                        containerClass={"mb-3"}
                        register={register}
                        key="fullname"
                        errors={errors}
                        control={control}
                      />
                    </Col>
                    <Col lg={6}>
                      <FormInput
                        type="email"
                        label="Email address"
                        name="emailaddress"
                        placeholder="Enter your email..."
                        containerClass={"mb-3"}
                        register={register}
                        key="emailaddress"
                        errors={errors}
                        control={control}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col lg={12}>
                      <FormInput
                        type="text"
                        label="Subject"
                        name="subject"
                        placeholder="Enter subject..."
                        containerClass={"mb-3"}
                        register={register}
                        key="subject"
                        errors={errors}
                        control={control}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col lg={12}>
                      <FormInput
                        type="textarea"
                        label="Message"
                        name="comments"
                        placeholder="Enter your message..."
                        containerClass={"mb-3"}
                        rows="4"
                        register={register}
                        key="comments"
                        errors={errors}
                        control={control}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} className="text-end">
                      <Button variant="danger" className="submitBnt">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* cta */}
      <section className="section-sm bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-9">
              <h3 className="mb-0 mo-mb-20">
                We also customize the theme as per your needs
              </h3>
            </div>
            <div className="col-md-3">
              <div className="text-md-end">
                <Link to="#" className="btn btn-outline-dark rounded-pill">
                  <i className="mdi mdi-email-outline me-1"></i>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
