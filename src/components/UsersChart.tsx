import React from "react";
import { Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// components
import { BasicPortlet } from "./Portlet";

import ChartStatistics from "./ChartStatistics";

const UsersChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "pie",
    },
    colors: ["#00acc1", "#4b88e4", "#e3eaef", "#fd7e14"],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (seriesName: string) => {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };

  const series = [20, 40, 30, 10];

  return (
    <>
      <BasicPortlet cardTitle="Total Users" titleClass="header-title">
        <div className="text-center">
          <Chart
            options={options}
            series={series}
            height={270}
            type="pie"
            className="apex-charts mt-0"
          />

          <Row className="row mt-3">
            <Col className="col-4">
              <ChartStatistics
                title="Target"
                icon="fe-arrow-down"
                stats="18k"
                variant="danger"
              />
            </Col>
            <Col className="col-4">
              <ChartStatistics
                title="Last week"
                icon="fe-arrow-up"
                stats="3.25k"
                variant="success"
              />
            </Col>
            <Col className="col-4">
              <ChartStatistics
                title="Last Month"
                icon="fe-arrow-up"
                stats="28k"
                variant="success"
              />
            </Col>
          </Row>
        </div>
      </BasicPortlet>
    </>
  );
};

export default UsersChart;
