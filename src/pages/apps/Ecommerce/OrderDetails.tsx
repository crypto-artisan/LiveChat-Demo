import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// components
import PageTitle from "../../../components/PageTitle";

import product1 from "../../../assets/images/products/product-1.png";
import product2 from "../../../assets/images/products/product-2.png";
import product3 from "../../../assets/images/products/product-3.png";

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  image: string;
  price: string;
  total: string;
}

interface ShippingAddress {
  provider: string;
  address: string;
  phone: string;
  mobile: string;
}

interface Billing {
  type: string;
  provider: string;
  valid: string;
}

interface Delivery {
  provider: string;
  order_id: string;
  payment_mode: string;
}

interface OrderDetailsType {
  id: string;
  tracking_id: string;
  order_status?: string;
  items: OrderItem[];
  sub_total: string;
  shipping_charge: string;
  tax: string;
  net_total: string;
  shipping: ShippingAddress;
  billing: Billing;
  delivery: Delivery;
}

// track order
const TrackOrder = () => {
  return (
    <>
      <div className="track-order-list">
        <ul className="list-unstyled">
          <li className="completed">
            <h5 className="mt-0 mb-1">Order Placed</h5>
            <p className="text-muted">
              April 21 2019 <small className="text-muted">07:22 AM</small>{" "}
            </p>
          </li>
          <li className="completed">
            <h5 className="mt-0 mb-1">Packed</h5>
            <p className="text-muted">
              April 22 2019 <small className="text-muted">12:16 AM</small>
            </p>
          </li>
          <li>
            <span className="active-dot dot"></span>
            <h5 className="mt-0 mb-1">Shipped</h5>
            <p className="text-muted">
              April 22 2019 <small className="text-muted">05:16 PM</small>
            </p>
          </li>
          <li>
            <h5 className="mt-0 mb-1"> Delivered</h5>
            <p className="text-muted">Estimated delivery within 3 days</p>
          </li>
        </ul>

        <div className="text-center mt-4">
          <Link to="#" className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </>
  );
};

// Item Table
const Items = ({ order }: { order: OrderDetailsType }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered table-centered mb-0">
          <thead className="table-light">
            <tr>
              <th>Product name</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {(order.items || []).map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.name}</th>
                  <td>
                    <img src={item.image} alt="" height="32" />
                  </td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.total}</td>
                </tr>
              );
            })}
            <tr>
              <th scope="row" colSpan={4} className="text-end">
                Sub Total :
              </th>
              <td>
                <div className="fw-bold">{order.sub_total}</div>
              </td>
            </tr>
            <tr>
              <th scope="row" colSpan={4} className="text-end">
                Shipping Charge :
              </th>
              <td>{order.shipping_charge}</td>
            </tr>
            <tr>
              <th scope="row" colSpan={4} className="text-end">
                Estimated Tax :
              </th>
              <td>{order.tax}</td>
            </tr>
            <tr>
              <th scope="row" colSpan={4} className="text-end">
                Total :
              </th>
              <td>
                <div className="fw-bold"> {order.net_total}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

// shipping info
const ShippingInfo = (props: { details: ShippingAddress }) => {
  const details = props.details || {};
  return (
    <React.Fragment>
      <h5 className="font-family-primary fw-semibold">{details.provider}</h5>

      <p className="mb-2">
        <span className="fw-semibold me-2">Address:</span> {details.address}
      </p>
      <p className="mb-2">
        <span className="fw-semibold me-2">Phone:</span> {details.phone}
      </p>
      <p className="mb-0">
        <span className="fw-semibold me-2">Mobile:</span> {details.mobile}
      </p>
    </React.Fragment>
  );
};

// billing info
const BillingInfo = (props: { details: Billing }) => {
  const details = props.details || {};
  return (
    <React.Fragment>
      <ul className="list-unstyled mb-0">
        <li>
          <p className="mb-2">
            <span className="fw-semibold me-2">Payment Type:</span>{" "}
            {details.type}
          </p>
          <p className="mb-2">
            <span className="fw-semibold me-2">Provider:</span>{" "}
            {details.provider}
          </p>
          <p className="mb-2">
            <span className="fw-semibold me-2">Valid Date:</span>{" "}
            {details.valid}
          </p>
          <p className="mb-0">
            <span className="fw-semibold me-2">CVV:</span> xxx
          </p>
        </li>
      </ul>
    </React.Fragment>
  );
};

// delivery info
const DeliveryInfo = (props: { details: Delivery }) => {
  const details = props.details || {};
  return (
    <React.Fragment>
      <div className="text-center">
        <i className="mdi mdi-truck-fast h2 text-muted"></i>
        <h5>
          <b>{details.provider}</b>
        </h5>
        <p className="mb-1">
          <span className="fw-semibold">Order ID :</span> {details.order_id}
        </p>
        <p className="mb-0">
          <span className="fw-semibold">Payment Mode :</span>{" "}
          {details.payment_mode}
        </p>
      </div>
    </React.Fragment>
  );
};

// order details
const OrderDetails = () => {
  const order: OrderDetailsType = {
    id: "#BM31",
    tracking_id: "894152012012",
    order_status: "Packed",
    items: [
      {
        id: 1,
        name: "Polo Navy blue T-shirt",
        image: product1,
        quantity: 1,
        price: "$39",
        total: "$39",
      },
      {
        id: 2,
        name: "Red Hoodie for men",
        image: product2,
        quantity: 2,
        price: "$46",
        total: "$92",
      },
      {
        id: 3,
        name: "Red Hoodie for men",
        image: product3,
        quantity: 1,
        price: "$46",
        total: "$46",
      },
    ],
    sub_total: "$177",
    shipping_charge: "$24",
    tax: "$12",
    net_total: "$213",
    shipping: {
      provider: "Stanley Jones",
      address: "3559 Roosevelt Wilson Lane San Bernardino, CA 92405",
      phone: "(123) 456-7890 ",
      mobile: "(+01) 12345 67890",
    },
    billing: {
      type: "Credit Card",
      provider: "Visa ending in 2851",
      valid: "02/2020",
    },
    delivery: {
      provider: "UPS Delivery",
      order_id: "#BM31",
      payment_mode: "COD",
    },
  };

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Ecommerce", path: "/apps/ecommerce/order/details" },
          {
            label: "Order Detail",
            path: "/apps/ecommerce/order/details",
            active: true,
          },
        ]}
        title={"Order Detail"}
      />

      <Row>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Track Order</h4>

              <Row>
                <Col lg={6}>
                  <div className="mb-4">
                    <h5 className="mt-0">Order ID:</h5>
                    <p>{order.id}</p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <h5 className="mt-0">Tracking ID:</h5>
                    <p>{order.tracking_id}</p>
                  </div>
                </Col>
              </Row>

              <TrackOrder />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={8}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Items from Order {order.id}</h4>
              <Items order={order} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Shipping Information</h4>
              <ShippingInfo details={order.shipping} />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Billing Information</h4>
              <BillingInfo details={order.billing} />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Delivery Info</h4>
              <DeliveryInfo details={order.delivery} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default OrderDetails;
