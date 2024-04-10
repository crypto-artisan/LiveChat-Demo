import React from "react";
import { Bubble } from "react-chartjs-2";
import { Card } from "react-bootstrap";

const BubbleChart = () => {
  // chart data
  const bubbleData = {
    labels: ["January"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(114, 124, 245, 0.4)",
        borderColor: "rgba(114, 124, 245, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(114, 124, 245, 1)",
        pointBackgroundColor: "rgba(114, 124, 245, 0.4)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(114, 124, 245, 1)",
        pointHoverBorderColor: "rgba(114, 124, 245, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [
          { x: -43.219521604938265, y: 68.05984224965707, r: 5 },
          { x: -85.34593621399178, y: 0.27756344307269387, r: 26 },
          { x: 52.50450102880657, y: -102.80564128943759, r: 30 },
          { x: -25.501543209876544, y: -137.02310528120714, r: 21 },
          { x: 34.80259773662553, y: 1.7918381344307193, r: 20 },
          { x: 87.58359053497944, y: -82.19414437585733, r: 16 },
          { x: -12.991898148148152, y: -34.81438614540467, r: 3 },
          { x: 87.24279835390945, y: -1.9022205075445697, r: 11 },
          { x: -7.545653292181072, y: -129.29098079561044, r: 5 },
          { x: 56.80941358024691, y: -62.81400034293553, r: 18 },
          { x: -115.52533436213992, y: 51.69538751714677, r: 30 },
          { x: -120.52533536213992, y: 80.69538751724677, r: 10 },
          { x: 79.6167695473251, y: 68.40384945130313, r: 19 },
          { x: -3.597608024691368, y: 91.47805212620028, r: 16 },
          { x: -11.001800411522623, y: -24.91533779149519, r: 11 },
          { x: -88.42914094650206, y: 73.39034636488338, r: 11 },
          { x: -131.71296296296296, y: -9.438228737997235, r: 22 },
        ],
      },
    ],
  };

  const colorize = (opaque: any, context: any) => {
    var value = context.dataset.data[context.dataIndex];
    var x = value.x / 100;
    var y = value.y / 100;
    var r = x < 0 && y < 0 ? 250 : x < 0 ? 150 : y < 0 ? 50 : 0;
    var g = x < 0 && y < 0 ? 0 : x < 0 ? 50 : y < 0 ? 150 : 250;
    var b = x < 0 && y < 0 ? 0 : x > 0 && y > 0 ? 250 : 150;
    var a = opaque ? 1 : (0.5 * value.v) / 1000;

    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  };

  // options
  const bubbleChartOpts = {
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
    elements: {
      point: {
        backgroundColor: colorize.bind(null, false),
        borderColor: colorize.bind(null, true),
        borderWidth: (context: any) => {
          return Math.min(Math.max(1, context.datasetIndex + 1), 8);
        },
        radius: function (context: any) {
          var value = context.dataset.data[context.dataIndex];
          var size = context.chart.width;
          var base = Math.abs(value.v) / 1000;
          return (size / 24) * base;
        },
      },
    },
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mb-3">Bubble Chart</h4>

        <div
          className="mb-5 mt-4 chartjs-chart"
          style={{ height: "320px", maxWidth: "100%" }}
        >
          <Bubble data={bubbleData} options={bubbleChartOpts} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default BubbleChart;
