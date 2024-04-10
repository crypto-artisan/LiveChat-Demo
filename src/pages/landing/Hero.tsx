import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import homeImage from "../../assets/images/landing/home-img.png";

const Hero = () => {
  return (
    <section className="bg-home bg-gradient" id="home">
      <div className="home-center">
        <div className="home-desc-center">
          <Container className="container-fluid">
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="home-title mo-mb-20">
                  <h1 className="mb-4 text-white">
                    Ubold is a fully featured premium admin template
                  </h1>
                  <p className="text-white-50 home-desc mb-5">
                    Ubold is a fully featured premium admin template built on
                    top of awesome Bootstrap 5, modern web technology HTML5,
                    CSS3 and JavaScript library (React). It has many ready to
                    use hand crafted components.{" "}
                  </p>
                  <div className="subscribe">
                    <form>
                      <Row>
                        <Col md={8}>
                          <div className="mb-2">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your e-mail address"
                            />
                          </div>
                        </Col>
                        <Col md={4}>
                          <button type="submit" className="btn btn-primary">
                            Subscribe Us
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </div>
              </Col>
              <Col
                lg={{ span: 5, offset: 1 }}
                md={7}
                xl={{ span: 4, offset: 2 }}
              >
                <div className="home-img position-relative">
                  <img src={homeImage} alt="" className="home-first-img" />
                  <img
                    src={homeImage}
                    alt=""
                    className="home-second-img mx-auto d-block"
                  />
                  <img src={homeImage} alt="" className="home-third-img" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Hero;
