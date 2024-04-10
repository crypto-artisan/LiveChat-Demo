import React from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import classNames from "classnames";
import CountUp from "react-countup";

interface StatisticsWidgetProps {
  title: string;
  stats: string;
  trend: {
    label: string;
    value: string;
    icon: string;
    trendStats: string;
    variant: string;
  };
  counterOptions?: any;
}

const StatisticsWidget3 = (props: StatisticsWidgetProps) => {
  return (
    <>
      <Card>
        <Card.Body>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id={props["title"]}>More Info</Tooltip>}
          >
            <i className="fa fa-info-circle text-muted float-end"></i>
          </OverlayTrigger>

          <h4 className="mt-0 font-16">{props["title"]}</h4>
          <h2 className="text-primary my-3 text-center">
            <span>
              <CountUp
                duration={1}
                end={props["stats"]}
                {...props["counterOptions"]}
              />
            </span>
          </h2>
          <p className="text-muted mb-0">
            {props["trend"]["label"]}: {props["trend"]["value"]}{" "}
            <span className="float-end">
              <i
                className={classNames(
                  "me-1",
                  "fa",
                  props["trend"]["icon"],
                  "text-" + props["trend"]["variant"]
                )}
              ></i>
              {props["trend"]["trendStats"]}
            </span>
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default StatisticsWidget3;
