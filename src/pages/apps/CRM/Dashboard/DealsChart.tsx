import React from "react";
import { Card } from "react-bootstrap";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const DealsChart = () => {
  const options: ApexOptions = {
    chart: {
      height: 370,
      type: "line",
    },
    stroke: {
      width: [2, 3],
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    colors: ["#1abc9c", "#f1556c"],
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
    ],
    xaxis: {
      type: "datetime",
    },
    legend: {
      offsetY: 7,
    },
    grid: {
      padding: {
        bottom: 20,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.75,
        opacityTo: 0.75,
        stops: [0, 0, 0],
      },
    },
    yaxis: [
      {
        title: {
          text: "Net Revenue",
        },
      },
      {
        opposite: true,
        title: {
          text: "Number of Sales",
        },
      },
    ],
  };

  const series = [
    {
      name: "Won",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Loss",
      type: "line",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
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
          <h4 className="header-title mb-3">Deals Analytics</h4>

          <div dir="ltr">
            <Chart
              options={options}
              series={series}
              type="line"
              height="370"
              className="mt-4"
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default DealsChart;
