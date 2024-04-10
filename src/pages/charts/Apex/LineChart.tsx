import React from "react";
import Chart from "react-apexcharts";
import { Card } from "react-bootstrap";
import { ApexOptions } from "apexcharts";

// simple line chart
const LineChart = () => {
  // default options
  const apexLineChartWithLables: ApexOptions = {
    chart: {
      height: 380,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#727cf5", "#0acf97"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      width: [3, 3],
      curve: "smooth",
    },
    title: {
      text: "Average High & Low Temperature",
      align: "left",
      style: {
        fontSize: "14px",
      },
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.2,
      },
      borderColor: "#f1f3fa",
    },
    markers: {
      size: 6,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: {
        text: "Month",
      },
    },
    yaxis: {
      title: {
        text: "Temperature",
      },
      min: 5,
      max: 40,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  // chart data
  const apexLineChartWithLablesData = [
    {
      name: "High - 2018",
      data: [28, 29, 33, 36, 32, 32, 33],
    },
    {
      name: "Low - 2018",
      data: [12, 11, 14, 18, 17, 13, 13],
    },
  ];

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mb-3">Line with Data Labels</h4>
        <Chart
          options={apexLineChartWithLables}
          series={apexLineChartWithLablesData}
          type="line"
          className="apex-charts"
        />
      </Card.Body>
    </Card>
  );
};

export default LineChart;
