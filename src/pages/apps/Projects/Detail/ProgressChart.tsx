import React from "react";
import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";

const ProgressChart = () => {
  // chart data
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Completed Tasks",
        backgroundColor: "rgba(74, 129, 212, 0.3)",
        borderColor: "#4a81d4",
        tension: 0.4,
        data: [32, 42, 42, 62, 52, 75, 62],
        fill: {
          target: "origin",
          above: "rgba(74, 129, 212, 0.3)",
        },
      },
      {
        label: "Plan Tasks",
        backgroundColor: "transparent",
        borderColor: "#f1556c",
        borderDash: [5, 5],
        tension: 0.4,
        data: [42, 58, 66, 93, 82, 105, 92],
      },
    ],
  };

  // chart options
  const chartOpts = {
    bezierCurve: false,
    maintainAspectRatio: false,
    tooltip: {
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
    <Card>
      <Card.Body>
        <h5 className="card-title mb-3">Progress</h5>
        <div className="mt-3 chartjs-chart" style={{ height: "320px" }}>
          <Line data={chartData} options={chartOpts} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProgressChart;
