import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// components
import { BasicPortlet } from "../../../components/Portlet";

const SalesChart = () => {
  const apexOpts: ApexOptions = {
    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              formatter: (val: string) => {
                return val;
              },
            },
            value: {
              show: true,
              formatter: (val: string) => {
                return val;
              },
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#4fc6e1", "#6658dd", "#ebeff2"],
    legend: {
      show: false,
    },
    labels: ["Total Sales", "Campaign Send", "Daily Sales"],
    tooltip: {
      enabled: false,
    },
  };

  const apexData = [12, 30, 20];

  return (
    <>
      <BasicPortlet cardTitle="Lifetime Sales" titleClass="header-title">
        <div className="text-center">
          <div className="row mt-2">
            <div className="col-4">
              <h3>3,487</h3>
              <p className="text-muted font-13 mb-0 text-truncate">
                Total Sales
              </p>
            </div>
            <div className="col-4">
              <h3>814</h3>
              <p className="text-muted font-13 mb-0 text-truncate">
                Open Campaign
              </p>
            </div>
            <div className="col-4">
              <h3>5,324</h3>
              <p className="text-muted font-13 mb-0 text-truncate">
                Daily Sales
              </p>
            </div>
          </div>

          <div dir="ltr">
            <Chart
              options={apexOpts}
              series={apexData}
              type="donut"
              height={270}
              className="apex-charts mt-4"
            />
          </div>
        </div>
      </BasicPortlet>
    </>
  );
};

export default SalesChart;
