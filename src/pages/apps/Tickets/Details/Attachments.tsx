import React from "react";
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Attachments = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h5 className="card-title font-16 mb-3">Attachments</h5>
          {/* Files */}
          <Card className="mb-1 shadow-none border">
            <div className="p-2">
              <Row className="align-items-center">
                <div className="col-auto">
                  <div className="avatar-sm">
                    <span className="avatar-title badge-soft-primary text-primary rounded">
                      pdf
                    </span>
                  </div>
                </div>
                <div className="col ps-0">
                  <Link to="#" className="text-muted fw-bold">
                    invoice-dec-2019.pdf
                  </Link>
                  <p className="mb-0 font-12">2.3 MB</p>
                </div>
                <div className="col-auto">
                  <Link to="#" className="btn btn-link font-16 text-muted">
                    <i className="dripicons-download"></i>
                  </Link>
                </div>
              </Row>
            </div>
          </Card>

          <Card className="mb-1 shadow-none border">
            <div className="p-2">
              <Row className="align-items-center">
                <div className="col-auto">
                  <div className="avatar-sm">
                    <span className="avatar-title badge-soft-primary text-primary rounded">
                      doc
                    </span>
                  </div>
                </div>
                <div className="col ps-0">
                  <Link to="#" className="text-muted fw-bold">
                    paypal-statement.docs
                  </Link>
                  <p className="mb-0 font-12">0.25 MB</p>
                </div>
                <div className="col-auto">
                  <Link to="#" className="btn btn-link font-16 text-muted">
                    <i className="dripicons-download"></i>
                  </Link>
                </div>
              </Row>
            </div>
          </Card>

          <Card className="mb-0 shadow-none border">
            <div className="p-2">
              <Row className="align-items-center">
                <div className="col-auto">
                  <div className="avatar-sm">
                    <span className="avatar-title bg-secondary rounded">
                      pdf
                    </span>
                  </div>
                </div>
                <div className="col ps-0">
                  <Link to="#" className="text-muted fw-bold">
                    visa-credit-card.pdf
                  </Link>
                  <p className="mb-0 font-12">1.05 MB</p>
                </div>
                <div className="col-auto">
                  <Link to="#" className="btn btn-link font-16 text-muted">
                    <i className="dripicons-download"></i>
                  </Link>
                </div>
              </Row>
            </div>
          </Card>
        </Card.Body>
      </Card>
    </>
  );
};

export default Attachments;
