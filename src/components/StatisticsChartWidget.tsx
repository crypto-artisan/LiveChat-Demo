import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import CountUp from "react-countup";
import classNames from "classnames";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface StatisticsChartWidgetProps {
  icon: string;
  variant: string;
  stats: string;
  counterOptions?: any;
  description: string;
  chartConfig: {
    apxOptions: ApexOptions;
    apxSeries: Array<any>;
    type:
      | "area"
      | "line"
      | "bar"
      | "histogram"
      | "pie"
      | "donut"
      | "radialBar"
      | "scatter"
      | "bubble"
      | "heatmap"
      | "treemap"
      | "boxPlot"
      | "candlestick"
      | "radar"
      | "polarArea"
      | "rangeBar"
      | undefined;
    height: number;
  };
}

const StatisticsChartWidget = ({
  icon,
  variant,
  stats,
  counterOptions,
  description,
  chartConfig,
}: StatisticsChartWidgetProps) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <div
                className={classNames(
                  "avatar-sm",
                  "rounded-circle",
                  "bg-" + variant
                )}
              >
                <i
                  className={classNames(
                    icon,
                    "avatar-title",
                    "font-22",
                    "text-white"
                  )}
                ></i>
              </div>
            </Col>
            <Col>
              <div className="text-end">
                <h3 className="my-1">
                  <span>
                    <CountUp duration={1} end={stats} {...counterOptions} />
                  </span>
                </h3>
                <p className="text-muted mb-1 text-truncate">{description}</p>
              </div>
            </Col>
          </Row>
          <div className="mt-4">
            {chartConfig && (
              <Chart
                options={chartConfig["apxOptions"]}
                series={chartConfig["apxSeries"]}
                type={chartConfig["type"]}
                height={chartConfig["height"]}
                className="apex-charts mt-0"
              />
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default StatisticsChartWidget;
