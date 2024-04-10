import React from "react";
import { Card, Dropdown, Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// components
import ChartStatistics from "../../../components/ChartStatistics";

const RevenueChart = () => {
  const apexOpts: ApexOptions = {
    chart: {
      height: 242,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "65%",
        },
      },
    },
    colors: ["#f1556c"],
    labels: ["Revenue"],
  };

  const apexData = [68];

  return (
    <>
      <Card>
        <Card.Body>
          <Dropdown className="float-end" align="end">
            <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
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
            <Chart
              options={apexOpts}
              series={apexData}
              type="radialBar"
              height={242}
              className="apex-charts mt-0"
            />

            <h5 className="text-muted mt-0">Total sales made today</h5>
            <h2>$178</h2>

            <p className="text-muted w-75 mx-auto sp-line-2">
              Traditional heading elements are designed to work best in the meat
              of your page content.
            </p>

            <Row className="row mt-3">
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

export default RevenueChart;
