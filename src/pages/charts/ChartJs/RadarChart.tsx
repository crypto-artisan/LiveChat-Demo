import React from "react";
import { Radar } from "react-chartjs-2";
import { Card } from "react-bootstrap";

const RadarChart = () => {
  // chart data
  const radarChartData = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "Desktops",
        backgroundColor: "rgba(57,175,209,0.2)",
        borderColor: "#39afd1",
        pointBackgroundColor: "#39afd1",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#39afd1",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: "Tablets",
        backgroundColor: "rgba(161, 127, 224,0.2)",
        borderColor: "#a17fe0",
        pointBackgroundColor: "#a17fe0",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#a17fe0",
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  };

  // default options
  const radarChartOpts = {
    maintainAspectRatio: false,
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mb-3">Radar Chart</h4>

        <div
          className="mb-5 mt-4 chartjs-chart"
          style={{ height: "320px", maxWidth: "320px" }}
        >
          <Radar data={radarChartData} options={radarChartOpts} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default RadarChart;
