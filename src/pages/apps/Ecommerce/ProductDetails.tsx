import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, ProgressBar, Tab, Nav } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle";
import Rating from "../../../components/Rating";

import productImg1 from "../../../assets/images/products/product-9.jpg";
import productImg2 from "../../../assets/images/products/product-10.jpg";
import productImg3 from "../../../assets/images/products/product-11.jpg";
import productImg4 from "../../../assets/images/products/product-12.jpg";

interface Product {
  brand: string;
  name?: string;
  reviews: string;
  status: string;
  discount: number;
  price: number;
  description: string;
  rating: number;
  features: string[];
}

// Stock Table
const Stocks = () => {
  return (
    <>
      <div className="table-responsive mt-4">
        <table className="table table-bordered table-centered mb-0">
          <thead className="table-light">
            <tr>
              <th>Outlets</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ASOS Ridley Outlet - NYC</td>
              <td>$139.58</td>
              <td>
                <div className="row align-items-center g-0">
                  <div className="col-auto">
                    <span className="me-2">27%</span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      now={27}
                      className="progress-sm"
                      variant="danger"
                    />
                  </div>
                </div>
              </td>
              <td>$1,89,547</td>
            </tr>
            <tr>
              <td>Marco Outlet - SRT</td>
              <td>$149.99</td>
              <td>
                <div className="row align-items-center g-0">
                  <div className="col-auto">
                    <span className="me-2">71%</span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      now={71}
                      className="progress-sm"
                      variant="success"
                    />
                  </div>
                </div>
              </td>
              <td>$87,245</td>
            </tr>
            <tr>
              <td>Chairtest Outlet - HY</td>
              <td>$135.87</td>
              <td>
                <div className="row align-items-center g-0">
                  <div className="col-auto">
                    <span className="me-2">82%</span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      now={82}
                      className="progress-sm"
                      variant="success"
                    />
                  </div>
                </div>
              </td>
              <td>$5,87,478</td>
            </tr>
            <tr>
              <td>Nworld Group - India</td>
              <td>$159.89</td>
              <td>
                <div className="row align-items-center g-0">
                  <div className="col-auto">
                    <span className="me-2">42%</span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      now={42}
                      className="progress-sm"
                      variant="warning"
                    />
                  </div>
                </div>
              </td>
              <td>$55,781</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const ProductDetails = () => {
  const [product] = useState<Product>({
    brand: "Jack & Jones",
    name: "Jack & Jones Men's T-shirt (Blue)",
    reviews: "36",
    status: "Instock",
    discount: 20,
    price: 80,
    description:
      "The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.",
    rating: 4.5,
    features: [
      "Sed ut perspiciatis unde",
      "Itaque earum rerum hic",
      "Nemo enim ipsam voluptatem",
      "Donec quam felis ultricies nec",
      "Temporibus autem quibusdam et",
    ],
  });

  const [discountPrice] = useState<number>(
    Math.round(product.price - (product.price * product.discount) / 100)
  );

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Ecommerce", path: "/apps/ecommerce/details" },
          {
            label: "Product Detail",
            path: "/apps/ecommerce/details",
            active: true,
          },
        ]}
        title={"Product Detail"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col lg={5}>
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="product-1-item"
                  >
                    <Tab.Content className="p-0">
                      <Tab.Pane eventKey="product-1-item">
                        <img
                          src={productImg1}
                          alt=""
                          className="img-fluid mx-auto d-block rounded"
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="product-2-item">
                        <img
                          src={productImg2}
                          alt=""
                          className="img-fluid mx-auto d-block rounded"
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="product-3-item">
                        <img
                          src={productImg3}
                          alt=""
                          className="img-fluid mx-auto d-block rounded"
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="product-4-item">
                        <img
                          src={productImg4}
                          alt=""
                          className="img-fluid mx-auto d-block rounded"
                        />
                      </Tab.Pane>
                    </Tab.Content>

                    <Nav variant="pills" as="ul" className="nav nav-justified">
                      <Nav.Item as="li">
                        <Nav.Link
                          eventKey="product-1-item"
                          className="product-thumb cursor-pointer"
                        >
                          <img
                            src={productImg1}
                            alt=""
                            className="img-fluid mx-auto d-block rounded"
                          />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          eventKey="product-2-item"
                          className="product-thumb cursor-pointer"
                        >
                          <img
                            src={productImg2}
                            alt=""
                            className="img-fluid mx-auto d-block rounded"
                          />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          eventKey="product-3-item"
                          className="product-thumb cursor-pointer"
                        >
                          <img
                            src={productImg3}
                            alt=""
                            className="img-fluid mx-auto d-block rounded"
                          />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          eventKey="product-4-item"
                          className="product-thumb cursor-pointer"
                        >
                          <img
                            src={productImg4}
                            alt=""
                            className="img-fluid mx-auto d-block rounded"
                          />
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Tab.Container>
                </Col>

                <Col lg={7}>
                  <div className="ps-xl-3 mt-3 mt-xl-0">
                    <Link to="#" className="text-primary">
                      {product.brand}
                    </Link>
                    <h4 className="mb-3"> {product.name}</h4>
                    <Rating value={product.rating} />
                    <p className="mb-4">
                      <Link to="#" className="text-muted">
                        ( {product.reviews} Customer Reviews )
                      </Link>
                    </p>
                    <h6 className="text-danger text-uppercase">
                      {product.discount}% Off
                    </h6>
                    <h4 className="mb-4">
                      Price :{" "}
                      <span className="text-muted me-2">
                        <del>${product.price} USD</del>
                      </span>{" "}
                      <b>${discountPrice} USD</b>
                    </h4>

                    <h4>
                      <span className="badge bg-soft-success text-success mb-4">
                        {product.status}
                      </span>
                    </h4>

                    <p className="text-muted mb-4">{product.description}</p>

                    <Row className="mb-3">
                      {(product.features || []).map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            {index % 2 === 0 ? (
                              <Col md={6}>
                                <p className="text-muted">
                                  <i className="mdi mdi-checkbox-marked-circle-outline h6 text-primary me-2"></i>
                                  {index % 2 === 0 && item}
                                </p>
                              </Col>
                            ) : (
                              <Col md={6}>
                                <p className="text-muted">
                                  <i className="mdi mdi-checkbox-marked-circle-outline h6 text-primary me-2"></i>
                                  {index % 2 !== 0 && item}
                                </p>
                              </Col>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </Row>

                    <form className="d-flex flex-wrap align-items-center mb-4">
                      <label className="my-1 me-2" htmlFor="quantityinput">
                        Quantity
                      </label>
                      <div className="me-3">
                        <select className="form-select my-1" id="quantityinput">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                        </select>
                      </div>

                      <label className="my-1 me-2" htmlFor="sizeinput">
                        Size
                      </label>
                      <div className="me-sm-3">
                        <select className="form-select my-1" id="sizeinput">
                          <option defaultValue="0">Small</option>
                          <option value="1">Medium</option>
                          <option value="2">Large</option>
                          <option value="3">X-large</option>
                        </select>
                      </div>
                    </form>

                    <div>
                      <button type="button" className="btn btn-danger me-2">
                        <i className="mdi mdi-heart-outline"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-success waves-effect waves-light"
                      >
                        <span className="btn-label">
                          <i className="mdi mdi-cart"></i>
                        </span>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>

              <Stocks />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
