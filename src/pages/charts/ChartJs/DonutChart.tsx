import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Card } from "react-bootstrap";

const DonutChart = () => {
  // chart data
  const donutChartData = {
    labels: ["Direct", "Affilliate", "Sponsored", "E-mail"],
    datasets: [
      {
        data: [300, 135, 48, 154],
        backgroundColor: ["#727cf5", "#fa5c7c", "#0acf97", "#ebeff2"],
        borderColor: "transparent",
      },
    ],
  };

  // default options
  const donutChartOpts = {
    maintainAspectRatio: false,
    cutoutPercentage: 60,
    legend: {
      display: true,
    },
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mb-3">Donut Chart</h4>

        <div
          className="mb-5 mt-4 chartjs-chart"
          style={{ height: "320px", maxWidth: "320px" }}
        >
          <Doughnut data={donutChartData} options={donutChartOpts} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default DonutChart;
