import React from "react";
import { Card } from "react-bootstrap";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const StaticsChart = () => {
  const apexOpts: ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    fill: {
      opacity: 1,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    colors: ["#4a81d4", "#e3eaef"],
  };

  const apexData = [
    {
      name: "Won Leads",
      data: [75, 50, 75, 50, 75, 100, 80],
    },
    {
      name: "Lost Leads",
      data: [65, 40, 65, 40, 65, 90, 65],
    },
  ];

  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title mb-3">Leads Statics</h4>

          <div className="text-center" dir="ltr">
            <div className="row mt-2">
              <div className="col-6">
                <h3 data-plugin="counterup">1,284</h3>
                <p className="text-muted font-13 mb-0 text-truncate">
                  Leads Won
                </p>
              </div>
              <div className="col-6">
                <h3 data-plugin="counterup">7,841</h3>
                <p className="text-muted font-13 mb-0 text-truncate">
                  Leads Lost
                </p>
              </div>
            </div>

            <Chart
              options={apexOpts}
              series={apexData}
              type="bar"
              height={310}
              className="apex-charts"
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default StaticsChart;
