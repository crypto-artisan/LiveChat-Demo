import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import classNames from "classnames";
import CountUp from "react-countup";

interface StatisticsProps {
  icon: string;
  variant: string;
  stats: string;
  desc: string;
  counterOptions?: any;
}

const Statistics = ({
  icon,
  variant,
  stats,
  desc,
  counterOptions,
}: StatisticsProps) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <div
                className={classNames(
                  "avatar-lg",
                  "rounded-circle",
                  "bg-" + variant
                )}
              >
                <i
                  className={classNames(
                    icon,
                    "font-22",
                    "avatar-title",
                    "text-white"
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
                <p className="text-muted mb-1 text-truncate">{desc}</p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Statistics;
