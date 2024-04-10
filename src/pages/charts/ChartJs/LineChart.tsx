import React from "react";
import { defaults as ChartjsDefaults, Line } from "react-chartjs-2";
import { Card } from "react-bootstrap";

const LineChart = () => {
  // changing chartjs defaults
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
    <Card>
      <Card.Body>
        <h4 className="header-title mb-3">Line Chart</h4>
        <div style={{ height: "320px" }} className="mt-3 chartjs-chart">
          <Line data={lineChartData} options={lineChartOpts} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default LineChart;
