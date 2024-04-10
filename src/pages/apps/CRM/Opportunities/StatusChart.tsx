import React from "react";
import { Card } from "react-bootstrap";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const StatusChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "pie",
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["Won", "Hot", "Cold", "In-progress", "Lost"],
    legend: {
      position: "bottom",
      fontSize: "15px",
      horizontalAlign: "center",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [28, 20, 40, 30, 10];

  return (
    <>
      <Card dir="ltr">
        <Card.Body>
          <h4 className="header-title mb-3">Status Charts</h4>

          <div className="text-center">
            <Chart options={options} series={series} type="pie" height={300} />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default StatusChart;
