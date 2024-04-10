import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Line, defaults as ChartjsDefaults } from "react-chartjs-2";

// components
import ChartStatistics from "../../../components/ChartStatistics";

const RevenueChart = () => {
  ChartjsDefaults.color = "#8391a2";
  ChartjsDefaults.scale.grid.color = "#8391a2";

  // chart data
  const lineChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Current Week",
        backgroundColor: "#1fa083",
        borderColor: "#1fa083",
        data: [32, 42, 42, 62, 52, 75, 62],
        tension: 0.4,
        fill: {
          target: "origin",
          above: "rgba(31, 160, 131, 0.3)",
        },
      },
      {
        label: "Previous Week",
        fill: true,
        backgroundColor: "transparent",
        borderColor: "#f1556c",
        borderDash: [5, 5],
        data: [42, 58, 66, 93, 82, 105, 92],
        tension: 0.4,
      },
    ],
  };

  // chart options
  const lineChartOpts = {
    bezierCurve: false,
    maintainAspectRatio: false,
    tooltips: {
      intersect: false,
    },
    hover: {
      intersect: true,
    },
    plugins: {
      filler: {
        propagate: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
      y: {
        ticks: {
          stepSize: 20,
        },
        display: true,
        borderDash: [5, 5],
        grid: {
          color: "rgba(0,0,0,0)",
          fontColor: "#fff",
        },
      },
    },
  };

  return (
    <>
      <Card>
        <Card.Body>
          <div className="float-end d-none d-md-inline-block">
            <div className="btn-group mb-2">
              <button type="button" className="btn btn-xs btn-secondary">
                Today
              </button>
              <button type="button" className="btn btn-xs btn-light">
                Weekly
              </button>
              <button type="button" className="btn btn-xs btn-light">
                Monthly
              </button>
            </div>
          </div>

          <h4 className="header-title">Revenue</h4>

          <Row className="mt-4 text-center">
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

          <div style={{ height: "300px" }} className="mt-3 chartjs-chart">
            <Line data={lineChartData} options={lineChartOpts} />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default RevenueChart;
