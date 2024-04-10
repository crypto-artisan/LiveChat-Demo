import React from "react";
import { Card } from "react-bootstrap";

interface StatisticsWidgetProps {
  avatar: string;
  name: string;
  position: string;
}

const StatisticsWidget4 = (props: StatisticsWidgetProps) => {
  return (
    <>
      <Card className="widget-rounded-circle">
        <Card.Body>
          <div className="row align-items-center">
            <div className="col-auto">
              <div className="avatar-lg">
                <img
                  src={props.avatar}
                  className="img-fluid rounded-circle"
                  alt=""
                />
              </div>
            </div>
            <div className="col">
              <h5 className="mb-1 mt-2 font-16">{props.name}</h5>
              <p className="mb-2 text-muted">{props.position}</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default StatisticsWidget4;
