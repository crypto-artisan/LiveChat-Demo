import React from "react";
import { Card } from "react-bootstrap";
import classNames from "classnames";

interface TransactionsProps {
  transactions: {
    id: number;
    avatar: string;
    name: string;
    cardDetails: {
      image: string;
      cardNum: string;
    };
    date: string;
    amount: string;
    status: string;
  }[];
}

const Transactions = ({ transactions }: TransactionsProps) => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title mb-3">Transaction History</h4>

          <div className="table-responsive">
            <table className="table table-centered table-nowrap table-hover mb-0">
              <thead>
                <tr>
                  <th className="border-top-0">Name</th>
                  <th className="border-top-0">Card</th>
                  <th className="border-top-0">Date</th>
                  <th className="border-top-0">Amount</th>
                  <th className="border-top-0">Status</th>
                </tr>
              </thead>
              <tbody>
                {(transactions || []).map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.avatar}
                          alt=""
                          className="rounded-circle avatar-sm bx-shadow-lg"
                        />
                        <span className="ms-2">{item.name}</span>
                      </td>
                      <td>
                        <img src={item.cardDetails.image} alt="" height="24" />
                        <span className="ms-2">{item.cardDetails.cardNum}</span>
                      </td>
                      <td>{item.date}</td>
                      <td>{item.amount}</td>
                      <td>
                        <span
                          className={classNames(
                            "badge",
                            "rounded-pill",
                            "bg-success",
                            {
                              "bg-success": item.status === "paid",
                              "bg-danger": item.status === "Failed",
                            }
                          )}
                        >
                          {item.status}
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

export default Transactions;
