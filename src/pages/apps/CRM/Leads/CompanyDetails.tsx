import React, { useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// components
import AddLeads from "./AddLeads";

interface CompanyInfo {
  id: number;
  logo: string;
  name: string;
  location: string;
  category: string;
  date: string;
  status: string;
}

interface CompanyDetailsProps {
  companyInfo: CompanyInfo[];
}
const CompanyDetails = (props: CompanyDetailsProps) => {
  const [companyInfo, setCompanyInfo] = useState<Array<CompanyInfo>>(
    props.companyInfo
  );
  const [show, setShow] = useState<boolean>(false);

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
          item.location.toLowerCase().includes(value) ||
          item.category.toLowerCase().includes(value)
      );
      setCompanyInfo(modifiedProducts);
    }
  };

  /*
   *   modal handeling
   */
  const onCloseModal = () => setShow(false);
  const onOpenModal = () => setShow(true);

  /*
    handle form submission
    */
  const onHandleSubmit = (formdata: any) => {
    onCloseModal();
  };

  return (
    <>
      <Card className="mb-2">
        <Card.Body>
          <Row className="justify-content-between">
            <Col className="col-auto">
              <form className="d-flex flex-wrap align-items-center">
                <label htmlFor="inputPassword2" className="visually-hidden">
                  Search
                </label>
                <div className="me-3">
                  <input
                    type="search"
                    className="form-control my-1 my-md-0"
                    id="inputPassword2"
                    placeholder="Search..."
                    onChange={(e: any) => onSearchData(e.target.value)}
                  />
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
                  onClick={onOpenModal}
                >
                  <i className="mdi mdi-plus-circle me-1"></i> Add New
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {(companyInfo || []).map((item, index) => {
        return (
          <Card key={index} className="mb-2">
            <Card.Body>
              <Row className="align-items-center">
                <Col sm={4}>
                  <div className="d-flex align-items-start">
                    <img
                      className="d-flex align-self-center me-3 rounded-circle"
                      src={item.logo}
                      alt=""
                      height="64"
                    />
                    <div className="w-100">
                      <h4 className="mt-0 mb-2 font-16">{item.name}</h4>
                      <p className="mb-1">
                        <b>Location:</b> {item.location}
                      </p>
                      <p className="mb-0">
                        <b>Category:</b> {item.category}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={2}>
                  <div className="text-center my-3 my-sm-0">
                    <p className="mb-0 text-muted">{item.date}</p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="text-center button-list">
                    <Link
                      to="#"
                      className="btn btn-xs btn-primary waves-effect waves-light"
                    >
                      Assign
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-xs btn-primary waves-effect waves-light"
                    >
                      Call
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-xs btn-primary waves-effect waves-light"
                    >
                      Email
                    </Link>
                  </div>
                </Col>
                <Col sm={2}>
                  <div className="text-sm-end">
                    <Link to="#" className="action-icon">
                      <i className="mdi mdi-square-edit-outline"></i>
                    </Link>
                    <Link to="#" className="action-icon">
                      <i className="mdi mdi-delete"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        );
      })}

      <div className="text-center my-4">
        <Link to="#" className="text-danger">
          <i className="mdi mdi-spin mdi-loading me-1"></i> Load more{" "}
        </Link>
      </div>

      {/* add leads modal */}
      <AddLeads show={show} onHide={onCloseModal} onSubmit={onHandleSubmit} />
    </>
  );
};

export default CompanyDetails;
