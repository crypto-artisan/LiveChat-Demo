import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Bar, defaults as ChartjsDefaults } from "react-chartjs-2";

// components
import ChartStatistics from "../../../components/ChartStatistics";

const PerformanceChart = () => {
  ChartjsDefaults.color = "#8391a2";
  ChartjsDefaults.scale.grid.color = "#8391a2";

  // chart data
  const barChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales Analytics",
        backgroundColor: "#4a81d4",
        borderColor: "#4a81d4",
        hoverBackgroundColor: "#4a81d4",
        hoverBorderColor: "#4a81d4",
        data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
        barPercentage: 0.7,
        categoryPercentage: 0.5,
      },
      {
        label: "Dollar Rate",
        backgroundColor: "#e3eaef",
        borderColor: "#e3eaef",
        hoverBackgroundColor: "#e3eaef",
        hoverBorderColor: "#e3eaef",
        data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
        barPercentage: 0.7,
        categoryPercentage: 0.5,
      },
    ],
  };

  // options
  const barChartOpts = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 20,
        },
        grid: {
          display: false,
          color: "rgba(0,0,0,0.05)",
        },
        stacked: false,
      },
      x: {
        stacked: false,
        grid: {
          color: "rgba(0,0,0,0.05)",
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

          <h4 className="header-title">Projections Vs Actuals </h4>

          <Row className="mt-4 text-center">
            <Col className="col-4">
              <ChartStatistics
                title="Target"
                icon="fe-arrow-down"
                stats="$3.8k"
                variant="danger"
              />
            </Col>
            <Col className="col-4">
              <ChartStatistics
                title="Last week"
                icon="fe-arrow-up"
                stats="$1.1k"
                variant="success"
              />
            </Col>
            <Col className="col-4">
              <ChartStatistics
                title="Last Month"
                icon="fe-arrow-down"
                stats="$25k"
                variant="danger"
              />
            </Col>
          </Row>

          <div style={{ height: "300px" }} className="chartjs-chart">
            <Bar data={barChartData} options={barChartOpts} />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default PerformanceChart;
