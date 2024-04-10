import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

// dummy data
import { QuickAccessFileTypes } from "./data";

interface QuickAccessProps {
  quickAccessFiles: QuickAccessFileTypes[];
}

const QuickAccess = ({ quickAccessFiles }: QuickAccessProps) => {
  return (
    <>
      <div className="mt-3">
        <h5 className="mb-2">Quick Access</h5>

        <Row className="mx-n1 g-0">
          {(quickAccessFiles || []).map((f, i) => {
            return (
              <Col key={i} xl={3} lg={6}>
                <Card className="m-1 shadow-none border">
                  <div className="p-2">
                    <Row className="align-items-center">
                      <Col className="col-auto pe-0">
                        <div className="avatar-sm">
                          <span className="avatar-title bg-light text-secondary rounded">
                            <i className={f.icon}></i>
                          </span>
                        </div>
                      </Col>
                      <Col>
                        <Link to="#" className="text-muted fw-bold">
                          {f.name}
                        </Link>
                        <p className="mb-0 font-13">{f.size}</p>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default QuickAccess;
