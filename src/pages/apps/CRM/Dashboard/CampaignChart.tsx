import React from "react";
import { Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// components
import { BasicPortlet } from "../../../../components/Portlet";

const CampaignChart = () => {
  const options: ApexOptions = {
    chart: {
      height: 310,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
            offsetY: 120,
          },
          value: {
            offsetY: 76,
            fontSize: "22px",
            color: undefined,
            formatter: (val) => {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    colors: ["#f1556c"],
    labels: ["Campaigns Ratio"],
    responsive: [
      {
        breakpoint: 380,
        options: {
          chart: {
            height: 180,
          },
        },
      },
    ],
  };

  const series = [67];

  return (
    <>
      <BasicPortlet cardTitle="Campaigns Ratio" titleClass="header-title">
        <div>
          <div dir="ltr">
            <Chart
              options={options}
              series={series}
              type="radialBar"
              height="310"
            />
          </div>

          <Row className="text-center mt-2">
            <Col md={4}>
              <h3 className="fw-normal mt-3">
                <span>6,510</span>
              </h3>
              <p className="text-muted mb-0 mb-2">
                <i className="mdi mdi-checkbox-blank-circle text-warning"></i>{" "}
                Total Sent
              </p>
            </Col>
            <Col md={4}>
              <h3 className="fw-normal mt-3">
                <span>3,487</span>
              </h3>
              <p className="text-muted mb-0 mb-2">
                <i className="mdi mdi-checkbox-blank-circle text-primary"></i>{" "}
                Reached
              </p>
            </Col>
            <Col md={4}>
              <h3 className="fw-normal mt-3">
                <span>1,568</span>
              </h3>
              <p className="text-muted mb-0 mb-2">
                <i className="mdi mdi-checkbox-blank-circle text-success"></i>{" "}
                Opened
              </p>
            </Col>
          </Row>
        </div>
      </BasicPortlet>
    </>
  );
};

export default CampaignChart;
