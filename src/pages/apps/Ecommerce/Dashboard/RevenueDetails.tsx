import React from "react";
import { Card, Dropdown, Row, Col } from "react-bootstrap";

// components
import { WorldVectorMap } from "../../../../components/VectorMap/";
import ChartStatistics from "../../../../components/ChartStatistics";

const RevenueDetails = () => {
  // vector map config
  const options = {
    zoomOnScroll: false,
    markers: [
      { name: "New York", coords: [40.71, -74.0] },
      { name: "San Francisco", coords: [37.77, -122.41] },
      { name: "Sydney", coords: [-33.86, 151.2] },
      { name: "Singapore", coords: [1.3, 103.8] },
    ],
    markerStyle: {
      initial: {
        r: 9,
        fill: "#727cf5",
        "fill-opacity": 0.9,
        stroke: "#fff",
        "stroke-width": 7,
        "stroke-opacity": 0.4,
      },
      hover: {
        fill: "#727cf5",
        stroke: "#fff",
        "fill-opacity": 1,
        "stroke-width": 1.5,
      },
    },
    regionStyle: {
      initial: {
        fill: "#e3eaef",
      },
    },
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Dropdown className="float-end" align="end">
            <Dropdown.Toggle as="a" className="card-drop cursor-pointer">
              <i className="mdi mdi-dots-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Sales Report</Dropdown.Item>
              <Dropdown.Item>Export Report</Dropdown.Item>
              <Dropdown.Item>Profit</Dropdown.Item>
              <Dropdown.Item>Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h4 className="header-title mb-0">Total Revenue</h4>

          <div className="widget-chart text-center" dir="ltr">
            <div className="mt-4">
              <WorldVectorMap height="230px" width="100%" options={options} />
            </div>

            <h5 className="text-muted mt-4">Total sales made today</h5>
            <h2>$178</h2>

            <p className="text-muted w-75 mx-auto sp-line-2">
              Traditional heading elements are designed to work best in the meat
              of your page content.
            </p>

            <Row className="mt-4">
              <Col className="col-4">
                <ChartStatistics
                  title="Target"
                  icon="fe-arrow-down"
                  stats="$7.8k"
                  variant="danger"
                />
              </Col>
              <Col className="col-4">
                <ChartStatistics
                  title="Last week"
                  icon="fe-arrow-up"
                  stats="$1.4k"
                  variant="success"
                />
              </Col>
              <Col className="col-4">
                <ChartStatistics
                  title="Last Month"
                  icon="fe-arrow-down"
                  stats="$15k"
                  variant="danger"
                />
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default RevenueDetails;
