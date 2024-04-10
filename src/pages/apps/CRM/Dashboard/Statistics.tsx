import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import classNames from "classnames";
import CountUp from "react-countup";

interface StatisticsProps {
  icon: string;
  variant: string;
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
      <Card className="bg-pattern">
        <Card.Body>
          <Row>
            <Col>
              <div
                className={classNames("avatar-md", "rounded", "bg-" + variant)}
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
                <h3 className="text-dark my-1">
                  <span>
                    <CountUp duration={1} end={stats} {...counterOptions} />
                  </span>
                </h3>
                <p className="text-muted mb-0 text-truncate">{description}</p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Statistics;
