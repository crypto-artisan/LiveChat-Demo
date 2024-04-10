import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const SalesChart = () => {
  const apexLineChartWithLables: ApexOptions = {
    chart: {
      height: 363,
      type: "line",
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        opacity: 0.2,
        blur: 7,
        left: -7,
        top: 7,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    fill: {
      type: "solid",
      opacity: [0.35, 1],
    },
    colors: ["#6658dd", "#1abc9c"],
    legend: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (val) => {
          return val + "k";
        },
        offsetX: -15,
      },
    },
  };

  const apexLineChartWithLablesData = [
    {
      name: "Current Week",
      type: "area",
      data: [10, 20, 15, 25, 20, 30, 20],
    },
    {
      name: "Previous Week",
      type: "line",
      data: [0, 15, 10, 30, 15, 35, 25],
    },
  ];

  return (
    <>
      <Card>
        <Card.Body className="pb-2">
          <div className="float-end d-none d-md-inline-block">
            <div className="btn-group mb-2">
              <button type="button" className="btn btn-xs btn-light">
                Today
              </button>
              <button type="button" className="btn btn-xs btn-light">
                Weekly
              </button>
              <button type="button" className="btn btn-xs btn-secondary">
                Monthly
              </button>
            </div>
          </div>

          <h4 className="header-title mb-3">Sales Analytics</h4>
          <Row className="text-center">
            <Col md={4}>
              <p className="text-muted mb-0 mt-3">Current Week</p>
              <h2 className="fw-normal mb-3">
                <small className="mdi mdi-checkbox-blank-circle text-primary align-middle me-1"></small>
                <span>$58,254</span>
              </h2>
            </Col>

            <Col md={4}>
              <p className="text-muted mb-0 mt-3">Previous Week</p>
              <h2 className="fw-normal mb-3">
                <small className="mdi mdi-checkbox-blank-circle text-success align-middle me-1"></small>
                <span>$69,524</span>
              </h2>
            </Col>

            <Col md={4}>
              <p className="text-muted mb-0 mt-3">Targets</p>
              <h2 className="fw-normal mb-3">
                <small className="mdi mdi-checkbox-blank-circle text-success align-middle me-1"></small>
                <span>$95,025</span>
              </h2>
            </Col>
          </Row>

          <Chart
            options={apexLineChartWithLables}
            series={apexLineChartWithLablesData}
            type="line"
            className="apex-charts mt-3"
            height={364}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default SalesChart;
