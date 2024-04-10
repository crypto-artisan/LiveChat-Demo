import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import classNames from "classnames";

interface StatisticsProps {
  icon: string;
  variant: string;
  stats: string;
  description: string;
}

const Statistics = ({ icon, variant, stats, description }: StatisticsProps) => {
  return (
    <>
      <Card className="widget-rounded-circle">
        <Card.Body>
          <Row>
            <Col>
              <div className="avatar-lg rounded-circle bg-light">
                <i
                  className={classNames(
                    icon,
                    "font-26",
                    "avatar-title",
                    "text-" + variant
                  )}
                ></i>
              </div>
            </Col>
            <Col>
              <div className="text-end">
                <h3 className="text-dark mt-1">
                  <span>{stats}</span>
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
