import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";

// components
import PageTitle from "../../../../components/PageTitle";

import AddMember from "./AddMember";

import ContactDetails from "./ContactDetails";

// dummy data
import { contacts as data, ContactsItems } from "./data";

const List = () => {
  const [contacts, setContacts] = useState<ContactsItems[]>(data);
  const [show, setShow] = useState<boolean>(false);

  /*
   * search on data
   */
  const onSearchData = (value: string) => {
    if (value === "") setContacts(data);
    else {
      var modifiedProducts = data;
      modifiedProducts = modifiedProducts.filter((item) =>
        item.name.toLowerCase().includes(value)
      );
      setContacts(modifiedProducts);
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
  const onSubmit = () => {
    onCloseModal();
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Contacts", path: "/apps/contacts/list" },
          { label: "Contacts List", path: "/apps/contacts/list", active: true },
        ]}
        title={"Contacts List"}
      />

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
                        <option defaultValue="All">All</option>
                        <option value="Name">Name</option>
                        <option value="Post">Post</option>
                        <option value="Followers">Followers</option>
                        <option value="Followings">Followings</option>
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
                      onClick={onOpenModal}
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

      <ContactDetails contacts={contacts} />

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

      {/* add member modal */}
      <AddMember show={show} onHide={onCloseModal} onSubmit={onSubmit} />
    </>
  );
};

export default List;
