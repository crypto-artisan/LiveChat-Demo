import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// dummy data
import { AllResultType } from "./data";

// conver text into html
const createMarkup = (text: string) => {
  return { __html: text };
};

interface AllResultProps {
  allResults: AllResultType[];
}

const AllResult = ({ allResults }: AllResultProps) => {
  return (
    <>
      <Row>
        <Col md={12}>
          {(allResults || []).map((searchItem, index) => {
            return (
              <div key={index} className="search-item">
                <h4 className="mb-1">
                  <Link to="#">{searchItem.title}</Link>
                </h4>
                <div className="font-13 text-success mb-2 text-truncate">
                  {searchItem.url}
                </div>
                <div
                  dangerouslySetInnerHTML={createMarkup(searchItem.content!)}
                ></div>
              </div>
            );
          })}

          <ul className="pagination pagination-rounded justify-content-end mt-0">
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span className="visually-hidden">Previous</span>
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                1
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                4
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                5
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span className="visually-hidden">Next</span>
              </Link>
            </li>
          </ul>

          <div className="clearfix"></div>
        </Col>
      </Row>
    </>
  );
};

export default AllResult;
