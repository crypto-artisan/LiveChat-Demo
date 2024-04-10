import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import classNames from "classnames";

interface StatisticsProps {
  variant: string;
  icon: string;
  stats: string;
  description: string;
  counterOptions?: any;
}

const Statistics = ({
  variant,
  icon,
  stats,
  description,
  counterOptions,
}: StatisticsProps) => {
  return (
    <>
      <Card className="widget-rounded-circle">
        <Card.Body>
          <Row>
            <Col>
              <div
                className={classNames(
                  "avatar-lg",
                  "rounded",
                  "bg-soft-" + variant
                )}
              >
                <i
                  className={classNames(
                    icon,
                    "font-24",
                    "avatar-title",
                    "text-" + variant
                  )}
                ></i>
              </div>
            </Col>
            <Col>
              <div className="text-end">
                <h3 className="text-dark mt-1">
                  <span>
                    <CountUp duration={1} end={stats} {...counterOptions} />
                  </span>
                </h3>
                <p className="text-muted mb-1 text-truncate">{description}</p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Statistics;
