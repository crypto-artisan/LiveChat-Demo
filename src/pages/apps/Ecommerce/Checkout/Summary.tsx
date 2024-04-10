import React from "react";
import { Link } from "react-router-dom";

interface CartItems {
  id: number;
  image: string;
  name: string;
  size: string;
  color: string;
  price: number;
  qty: number;
  total: number;
}

interface SummaryProps {
  cart: {
    items: Array<CartItems>;
    sub_total: number;
    shipping: number;
    total: number;
  };
}

// Summary
const Summary = (props: SummaryProps) => {
  const cart = props.cart || {};

  return (
    <>
      <div className="border mt-4 rounded">
        <h4 className="header-title p-2 mb-0">Order Summary</h4>

        <div className="table-responsive">
          <table className="table table-centered table-nowrap mb-0">
            <tbody>
              {(cart.items || []).map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td style={{ width: "90px" }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        title="contact-img"
                        className="rounded"
                        height="48"
                      />
                    </td>
                    <td>
                      <Link
                        to="/apps/ecommerce/product-details"
                        className="text-body fw-semibold"
                      >
                        {item.name}
                      </Link>
                      <br />
                      <small>
                        {item.qty} x ${item.price.toFixed(2)}
                      </small>
                    </td>
                    <td className="text-end">${item.total.toFixed(2)}</td>
                  </tr>
                );
              })}

              <tr className="text-end">
                <td colSpan={2}>
                  <h6 className="m-0">Sub Total:</h6>
                </td>
                <td className="text-end">${cart.sub_total.toFixed(2)}</td>
              </tr>
              <tr className="text-end">
                <td colSpan={2}>
                  <h6 className="m-0">Shipping:</h6>
                </td>
                <td className="text-end">
                  {cart.shipping ? "$" + cart.shipping.toFixed(2) : "FREE"}
                </td>
              </tr>
              <tr className="text-end">
                <td colSpan={2}>
                  <h5 className="m-0">Total:</h5>
                </td>
                <td className="text-end fw-semibold">
                  ${cart.total.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Summary;
