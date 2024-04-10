import React from "react";
import Chart from "react-apexcharts";
import { Card } from "react-bootstrap";
import { ApexOptions } from "apexcharts";

// simple bar chart
const BarChart = () => {
  // default options
  const apexBarChartOpts: ApexOptions = {
    chart: {
      height: 380,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    colors: ["#fa5c7c", "#6c757d"],
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },

    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
    legend: {
      offsetY: -10,
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    grid: {
      borderColor: "#f1f3fa",
    },
  };

  // chart data
  const apexBarChartData = [
    {
      name: "Series 1",
      data: [44, 55, 41, 64, 22, 43, 21],
    },
    {
      name: "Series 2",
      data: [53, 32, 33, 52, 13, 44, 32],
    },
  ];

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mb-3">Bar Chart</h4>
        <Chart
          options={apexBarChartOpts}
          series={apexBarChartData}
          type="bar"
          className="apex-charts"
        />
      </Card.Body>
    </Card>
  );
};

export default BarChart;
