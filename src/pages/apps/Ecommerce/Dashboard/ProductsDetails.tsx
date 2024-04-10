import React from "react";
import { Card } from "react-bootstrap";
import classNames from "classnames";

interface ProductsDetailsProps {
  products: {
    id: number;
    image: string;
    name: string;
    category: string;
    addedDate: string;
    amount: string;
    status: string;
  }[];
}

const ProductsDetails = ({ products }: ProductsDetailsProps) => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title mb-3">Recent Products</h4>

          <div className="table-responsive">
            <table className="table table-centered table-nowrap table-hover mb-0">
              <thead>
                <tr>
                  <th className="border-top-0">Product</th>
                  <th className="border-top-0">Category</th>
                  <th className="border-top-0">Added Date</th>
                  <th className="border-top-0">Amount</th>
                  <th className="border-top-0">Status</th>
                </tr>
              </thead>
              <tbody>
                {(products || []).map((product, index) => {
                  const variant =
                    product.status === "Active" ? "success" : "danger";
                  return (
                    <tr key={index}>
                      <td>
                        <img src={product.image} alt="" height="36" />
                        <span className="ms-2">{product.name}</span>
                      </td>
                      <td>{product.category}</td>
                      <td>{product.addedDate}</td>
                      <td>{product.amount}</td>
                      <td>
                        <span
                          className={classNames(
                            "badge",
                            "bg-soft-" + variant,
                            "text-" + variant
                          )}
                        >
                          {product.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductsDetails;
