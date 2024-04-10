import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

const MaintenanceSvg = () => {
  return (
    <>
      <svg
        id="Layer_1"
        className="svg-computer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 424.2 424.2"
      >
        <g id="Layer_2">
          <path
            className="st0"
            style={{
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="M339.7 289h-323c-2.8 0-5-2.2-5-5V55.5c0-2.8 2.2-5 5-5h323c2.8 0 5 2.2 5 5V284c0 2.7-2.2 5-5 5z"
          />
          <path
            className="st0"
            style={{
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="M26.1 64.9h304.6v189.6H26.1zM137.9 288.5l-3.2 33.5h92.6l-4.4-33M56.1 332.6h244.5l24.3 41.1H34.5zM340.7 373.7s-.6-29.8 35.9-30.2c36.5-.4 35.9 30.2 35.9 30.2h-71.8z"
          />
          <path
            className="st0"
            style={{
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="M114.2 82.8v153.3h147V82.8zM261.2 91.1h-147"
          />
          <path
            className="st0"
            style={{
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="M124.5 105.7h61.8v38.7h-61.8zM196.6 170.2H249v51.7h-52.4zM196.6 105.7H249M196.6 118.6H249M196.6 131.5H249M196.6 144.4H249M124.5 157.3H249M124.5 170.2h62.2M124.5 183.2h62.2M124.5 196.1h62.2M124.5 209h62.2M124.5 221.9h62.2"
          />
        </g>
      </svg>
    </>
  );
};

interface MaintenanceQuery {
  icon: string;
  title: string;
  desc: string;
}

const Maintenance = () => {
  const maintenanceQuery: MaintenanceQuery[] = [
    {
      icon: "dripicons-jewel",
      title: "Why is the Site Down?",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    },
    {
      icon: "dripicons-clock",
      title: "What is the Downtime?",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical but the majority.",
    },
    {
      icon: "dripicons-question",
      title: "Do you need Support?",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar... no-reply@domain.com",
    },
  ];

  useEffect(() => {
    if (document.body)
      document.body.classList.remove("authentication-bg-pattern");
  }, []);

  return (
    <>
      <div className="mt-5 mb-5">
        <Container>
          <Row className="justify-content-center">
            <div className="col-11">
              <div className="text-center">
                <MaintenanceSvg />
                <h3 className="mt-4 text-white">
                  We are currently performing maintenance
                </h3>
                <p className="text-white-50">
                  We're making the system more awesome. We'll be back shortly.
                </p>

                <Row className="mt-5">
                  {(maintenanceQuery || []).map((item, index) => {
                    return (
                      <Col key={index} md={4}>
                        <div className="text-center mt-3 ps-1 pe-1">
                          <div className="avatar-md rounded-circle bg-soft-light mx-auto">
                            <i
                              className={classNames(
                                item.icon,
                                "font-22",
                                "avatar-title"
                              )}
                            ></i>
                          </div>
                          <h5 className="text-uppercase mt-3 text-white">
                            {item.title}
                          </h5>
                          <p className="text-white-50">{item.desc}</p>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </div>
          </Row>
        </Container>
      </div>

      <footer className="footer footer-alt">
        2015 - {new Date().getFullYear()} &copy; UBold theme by{" "}
        <Link to="#" className="text-white-50">
          Coderthemes
        </Link>
      </footer>
    </>
  );
};

export default Maintenance;
