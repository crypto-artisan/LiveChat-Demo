import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// components
import { BasicPortlet } from "../../../components/Portlet";

const StatisticsChart = () => {
  const apexOpts: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
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
    colors: ["#00acc1"],
  };

  const apexData = [
    {
      name: "Statistics",
      data: [87, 75, 50, 75, 50, 38, 72],
    },
  ];

  return (
    <>
      <BasicPortlet cardTitle="Statistics" titleClass="header-title">
        <div className="text-center">
          <div className="row mt-2">
            <div className="col-6">
              <h3>1,284</h3>
              <p className="text-muted font-13 mb-0 text-truncate">
                Total Sales
              </p>
            </div>
            <div className="col-6">
              <h3>7,841</h3>
              <p className="text-muted font-13 mb-0 text-truncate">
                Open Campaign
              </p>
            </div>
          </div>

          <div dir="ltr">
            <Chart
              options={apexOpts}
              series={apexData}
              type="bar"
              height={273}
              className="apex-charts mt-2"
            />
          </div>
        </div>
      </BasicPortlet>
    </>
  );
};

export default StatisticsChart;
