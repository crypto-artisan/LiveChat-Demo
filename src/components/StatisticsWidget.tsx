import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import classNames from "classnames";
import CountUp from "react-countup";

interface StatisticsWidgetProps {
  variant: string;
  description: string;
  stats: string;
  icon: string;
  counterOptions?: any;
}

const StatisticsWidget = (props: StatisticsWidgetProps) => {
  return (
    <>
      <Card className="widget-rounded-circle">
        <Card.Body>
          <Row>
            <Col className="col-6">
              <div
                className={classNames(
                  "avatar-lg",
                  "rounded-circle",
                  "bg-soft-" + props["variant"],
                  "border-" + props["variant"],
                  "border"
                )}
              >
                <i
                  className={classNames(
                    props["icon"],
                    "avatar-title",
                    "font-22",
                    "text-" + props["variant"]
                  )}
                ></i>
              </div>
            </Col>
            <Col className="col-6">
              <div className="text-end">
                <h3 className="text-dark mt-1">
                  <span>
                    <CountUp
                      duration={1}
                      end={props["stats"]}
                      {...props["counterOptions"]}
                    />
                  </span>
                </h3>
                <p className="text-muted mb-1 text-truncate">
                  {props["description"]}
                </p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default StatisticsWidget;
