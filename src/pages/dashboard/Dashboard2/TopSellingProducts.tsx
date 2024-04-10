import React from "react";
import { Table } from "react-bootstrap";

// components
import { BasicPortlet } from "../../../components/Portlet";

interface TopSellingProductsProps {
  products: {
    id: number;
    name: string;
    price: string;
    quantity: number;
    amount: string;
  }[];
}

const TopSellingProducts = ({ products }: TopSellingProductsProps) => {
  return (
    <>
      <BasicPortlet cardTitle="Top Selling Products" titleClass="header-title">
        <div className="table-responsive">
          <Table hover className="table-centered mb-0">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {(products || []).map((product, i) => {
                return (
                  <tr key={i}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </BasicPortlet>
    </>
  );
};

export default TopSellingProducts;
