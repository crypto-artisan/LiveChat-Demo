import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";

import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";

interface Address {
  line_1: string;
  line_2: string;
  city: string;
  state: string;
  zip: number;
  phone: string;
}

interface Items {
  id: number;
  name: string;
  description: string;
  hour: number;
  hourRate: string;
  total: string;
}

// invoice component
const Invoice = () => {
  const [customer] = useState<string>("Stanley Jones");
  const [notes] = useState<string>(
    "Thanks a lot because you keep purchasing our products. Our company promises to provide high quality products for you as well as outstanding customer service for every transaction."
  );
  const [order_date] = useState<string>("Jan 17, 2016");
  const [order_status] = useState<string>("Unpaid");
  const [order_no] = useState<string>("000028");
  const [billing_address] = useState<Address>({
    line_1: "Stanley Jones",
    line_2: "795 Folsom Ave, Suite 600",
    city: "San Francisco",
    state: "CA",
    zip: 94107,
    phone: "(123) 456-7890",
  });
  const [shipping_address] = useState<Address>({
    line_1: "Stanley Jones",
    line_2: "795 Folsom Ave, Suite 600",
    city: "San Francisco",
    state: "CA",
    zip: 94107,
    phone: "(123) 456-7890",
  });
  const [items] = useState<Items[]>([
    {
      id: 1,
      name: "Web Design",
      description: "2 Pages static website - my website",
      hour: 22,
      hourRate: "$30",
      total: "$660.00",
    },
    {
      id: 2,
      name: "Software Development",
      description: "Invoice editor software - AB'c Software",
      hour: 122.5,
      hourRate: "$35",
      total: "$3937.50",
    },
  ]);
  const [sub_total] = useState<string>("$4597.50");
  const [vat] = useState<string>("$459.75");
  const [total] = useState<string>("$4137.75");

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Extra Pages", path: "/pages/invoice" },
          { label: "Invoice", path: "/pages/invoice", active: true },
        ]}
        title={"Invoice"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="clearfix">
                <div className="float-start">
                  <div className="auth-logo">
                    <div className="logo logo-dark">
                      <span className="logo-lg">
                        <img src={logoDark} alt="" height="22" />
                      </span>
                    </div>
                    <div className="logo logo-light">
                      <span className="logo-lg">
                        <img src={logoLight} alt="" height="22" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="float-end">
                  <h4 className="m-0 d-print-none">Invoice</h4>
                </div>
              </div>

              <Row>
                <Col md={6}>
                  <div className="mt-3">
                    <p>
                      <b>Hello, {customer}</b>
                    </p>
                    <p className="text-muted">{notes}</p>
                  </div>
                </Col>

                <Col md={{ span: 4, offset: 2 }}>
                  <div className="mt-3 float-end">
                    <p>
                      <strong>Order Date : </strong>{" "}
                      <span className="float-end">
                        {" "}
                        &nbsp;&nbsp;&nbsp; {order_date}{" "}
                      </span>
                    </p>
                    <p>
                      <strong>Order Status : </strong>{" "}
                      <span className="float-end">
                        {" "}
                        <span className="badge bg-danger">{order_status}</span>
                      </span>
                    </p>
                    <p>
                      <strong>Order No. : </strong>
                      <span className="float-end">
                        {" "}
                        <span className="float-end">{order_no}</span>
                      </span>
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col sm={6}>
                  <h6>Billing Address</h6>
                  <address>
                    {billing_address.line_1}
                    <br />
                    {billing_address.line_2}
                    <br />
                    {billing_address.city}, {billing_address.state}{" "}
                    {billing_address.zip}
                    <br />
                    <abbr title="Phone">P:</abbr> {billing_address.phone}
                  </address>
                </Col>
                <Col sm={6}>
                  <h6>Shipping Address</h6>
                  <address>
                    {shipping_address.line_1}
                    <br />
                    {shipping_address.line_2}
                    <br />
                    {shipping_address.city}, {shipping_address.state}{" "}
                    {shipping_address.zip}
                    <br />
                    <abbr title="Phone">P:</abbr> {shipping_address.phone}
                  </address>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <div className="table-responsive">
                    <table className="table mt-4 table-centered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Item</th>
                          <th style={{ width: "10%" }}>Hours</th>
                          <th style={{ width: "10%" }}>Hours Rate</th>
                          <th style={{ width: "10%" }} className="text-end">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(items || []).map((item, idx) => {
                          return (
                            <tr key={idx}>
                              <td>{idx + 1}</td>
                              <td>
                                <b>{item.name}</b> <br />
                                {item.description}
                              </td>
                              <td>{item.hour}</td>
                              <td>{item.hourRate}</td>
                              <td className="text-end">{item.total}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col sm={6}>
                  <div className="clearfix pt-5">
                    <h6 className="text-muted">Notes:</h6>
                    <small className="text-muted">
                      All accounts are to be paid within 7 days from receipt of
                      invoice. To be paid by cheque or credit card or direct
                      payment online. If account is not paid within 7 days the
                      credits details supplied as confirmation of work
                      undertaken will be charged the agreed quoted fee noted
                      above.
                    </small>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="float-end">
                    <p>
                      <b>Sub-total:</b>{" "}
                      <span className="float-end">{sub_total}</span>
                    </p>
                    <p>
                      <b>Discount (10%):</b>{" "}
                      <span className="float-end">
                        {" "}
                        &nbsp;&nbsp;&nbsp; {vat}
                      </span>
                    </p>
                    <h3>{total} USD</h3>
                  </div>
                  <div className="clearfix"></div>
                </Col>
              </Row>

              <div className="mt-4 mb-1">
                <div className="text-end d-print-none">
                  <button
                    className="btn btn-primary waves-effect waves-light me-1"
                    onClick={(e: any) => {
                      window.print();
                    }}
                  >
                    <i className="mdi mdi-printer me-1"></i> Print
                  </button>
                  <button className="btn btn-info waves-effect waves-light">
                    Submit
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Invoice;
