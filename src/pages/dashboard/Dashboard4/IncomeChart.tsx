import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// components
import { BasicPortlet } from "../../../components/Portlet";

const IncomeChart = () => {
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    stroke: {
      width: [1, 2],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.3, 0.3],
    },
    colors: ["#4a81d4", "#1fa083"],
    xaxis: {
      categories: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 4,
      min: 0,
      max: 200,
    },
  };

  const series = [
    {
      name: "Litecoin",
      type: "area",
      data: [20, 65, 40, 65, 40, 65, 60],
    },
    {
      name: "Bitcoin",
      type: "line",
      data: [10, 75, 50, 75, 50, 75, 90],
    },
  ];

  return (
    <>
      <BasicPortlet cardTitle="Income Amounts" titleClass="header-title">
        <div className="text-center">
          <div className="row mt-2">
            <div className="col-4">
              <h3>2,845</h3>
              <p className="text-muted font-13 mb-0 text-truncate">
                Total Sales
              </p>
            </div>
            <div className="col-4">
              <h3>6,487</h3>
              <p className="text-muted font-13 mb-0 text-truncate">
                Open Campaign
              </p>
            </div>
            <div className="col-4">
              <h3>201</h3>
              <p className="text-muted font-13 mb-0 text-truncate">
                Daily Sales
              </p>
            </div>
          </div>

          <div dir="ltr">
            <Chart
              options={options}
              series={series}
              type="line"
              height={273}
              className="apex-charts mt-2"
            />
          </div>
        </div>
      </BasicPortlet>
    </>
  );
};

export default IncomeChart;
