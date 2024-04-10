import React, { useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// dummy data
import { Company } from "./data";

interface CompanyDetailsProps {
  companyInfo: Company[];
}

const CompanyDetails = (props: CompanyDetailsProps) => {
  const [companyInfo, setCompanyInfo] = useState<Company[]>(props.companyInfo);

  /*
   * search on data
   */
  const onSearchData = (value: string) => {
    if (value === "") setCompanyInfo(props.companyInfo);
    else {
      var modifiedProducts = props.companyInfo;
      modifiedProducts = modifiedProducts.filter(
        (item) =>
          item.name.toLowerCase().includes(value) ||
          item.location.toLowerCase().includes(value)
      );
      setCompanyInfo(modifiedProducts);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row className="justify-content-between">
                <Col md={8}>
                  <form className="d-flex flex-wrap align-items-center">
                    <label htmlFor="inputPassword2" className="visually-hidden">
                      Search
                    </label>
                    <div className="me-3">
                      <input
                        type="search"
                        className="form-control my-1 my-lg-0"
                        id="inputPassword2"
                        placeholder="Search..."
                        onChange={(e: any) => onSearchData(e.target.value)}
                      />
                    </div>
                    <label htmlFor="status-select" className="me-2">
                      Sort By
                    </label>
                    <div className="me-sm-3">
                      <select className="form-select my-1 my-lg-0">
                        <option defaultValue="Select">Select</option>
                        <option value="Date">Date</option>
                        <option value="Name">Name</option>
                        <option value="Revenue">Revenue</option>
                        <option value="Employees">Employees</option>
                      </select>
                    </div>
                  </form>
                </Col>
                <Col md={4}>
                  <div className="text-md-end mt-3 mt-md-0">
                    <Button
                      variant="success"
                      className="waves-effect waves-light me-1"
                    >
                      <i className="mdi mdi-cog"></i>
                    </Button>
                    <Button
                      variant="danger"
                      className="waves-effect waves-light"
                    >
                      <i className="mdi mdi-plus-circle me-1"></i> Add New
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {(companyInfo || []).map((item, index) => {
          return (
            <Col key={index} lg={4}>
              <Card className="bg-pattern">
                <Card.Body>
                  <div className="text-center">
                    <img
                      src={item.logo}
                      alt=""
                      className="avatar-xl rounded-circle mb-3"
                    />
                    <h4 className="mb-1 font-20">{item.name}</h4>
                    <p className="text-muted  font-14">{item.location}</p>
                  </div>

                  <p className="font-14 text-center text-muted">
                    {item.description}
                  </p>

                  <div className="text-center">
                    <Link to="#" className="btn btn-sm btn-light">
                      View more info
                    </Link>
                  </div>

                  <div className="row mt-4 text-center">
                    <div className="col-6">
                      <h5 className="fw-normal text-muted">Revenue (USD)</h5>
                      <h4>{item.revenue}</h4>
                    </div>
                    <div className="col-6">
                      <h5 className="fw-normal text-muted">
                        Number of employees
                      </h5>
                      <h4>{item.noOfEmployees}</h4>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Row>
        <Col>
          <div className="text-end">
            <ul className="pagination pagination-rounded justify-content-end">
              <li className="page-item">
                <Link className="page-link" to="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="visually-hidden">Previous</span>
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
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
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CompanyDetails;
