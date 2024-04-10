import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// components
import Table from "../../../../components/Table";

import AddContacts from "./AddContacts";

// basic info column render
const BasicInfoColumn = ({ row }: { row: any }) => {
  return (
    <>
      <img src={row.original.avatar} alt="" className="me-2 rounded-circle" />
      <Link to="#" className="text-body fw-semibold">
        {row.original.name}
      </Link>
    </>
  );
};

// action column render
const ActionColumn = () => {
  return (
    <>
      <Link to="#" className="action-icon">
        <i className="mdi mdi-square-edit-outline"></i>
      </Link>
      <Link to="#" className="action-icon">
        <i className="mdi mdi-delete"></i>
      </Link>
    </>
  );
};

const columns = [
  {
    Header: "Basic Info",
    accessor: "name",
    sort: true,
    Cell: BasicInfoColumn,
    className: "table-user",
  },
  {
    Header: "Phone",
    accessor: "phone",
    sort: true,
  },
  {
    Header: "Email",
    accessor: "email",
    sort: true,
  },
  {
    Header: "Company",
    accessor: "company",
    sort: true,
  },
  {
    Header: "Created Date",
    accessor: "created_date",
    sort: true,
  },
  {
    Header: "Action",
    accessor: "action",
    sort: false,
    Cell: ActionColumn,
  },
];

interface ContactsDetailsProps {
  contactDetails: {
    id: number;
    avatar: string;
    name: string;
    phone: string;
    email: string;
    company: string;
    created_date: string;
  }[];
}

const ContactsDetails = ({ contactDetails }: ContactsDetailsProps) => {
  /*
   *   modal handeling
   */
  const [show, setShow] = useState<boolean>(false);
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
      <Card>
        <Card.Body>
          <Row className="justify-content-between">
            <Col>
              <Button
                variant="danger"
                className="waves-effect waves-light mb-2"
                onClick={onOpenModal}
              >
                Add Contact
              </Button>
            </Col>
            <Col>
              <div className="text-sm-end">
                <Button
                  variant="success"
                  className="waves-effect waves-light mb-2"
                >
                  <i className="mdi mdi-cog"></i>
                </Button>
              </div>
            </Col>
          </Row>
          <Table
            columns={columns}
            data={contactDetails}
            pageSize={8}
            isSortable={true}
            pagination={true}
            isSearchable={true}
            tableClass="table-nowrap table-hover"
            searchBoxClass="my-2"
          />
        </Card.Body>
      </Card>

      {/* add contact modal */}
      <AddContacts show={show} onHide={onCloseModal} onSubmit={onSubmit} />
    </>
  );
};

export default ContactsDetails;
