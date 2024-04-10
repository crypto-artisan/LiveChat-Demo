import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../../../components/PageTitle";
import Table from "../../../../components/Table";

import AddCustomer from "./AddCustomer";

// dummy data
import { customers } from "./data";

/* name column render */
const NameColumn = ({ row }: { row: any }) => {
  return (
    <div className="table-user">
      <img src={row.original.avatar} alt="" className="me-2 rounded-circle" />
      <Link to="#" className="text-body fw-semibold">
        {row.original.name}
      </Link>
    </div>
  );
};

/* status column render */
const StatusColumn = ({ row }: { row: any }) => {
  return (
    <React.Fragment>
      <span
        className={classNames("badge", {
          "bg-soft-success text-success": row.original.status === "Active",
          "bg-soft-danger text-danger": row.original.status === "Blocked",
        })}
      >
        {row.original.status}
      </span>
    </React.Fragment>
  );
};

/* action column render */
const ActionColumn = () => {
  return (
    <React.Fragment>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-eye"></i>
      </Link>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-square-edit-outline"></i>
      </Link>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-delete"></i>
      </Link>
    </React.Fragment>
  );
};

const columns = [
  {
    Header: "Customer",
    accessor: "name",
    sort: true,
    Cell: NameColumn,
    classes: "table-user",
  },
  {
    Header: "Phone",
    accessor: "phone",
    sort: false,
  },
  {
    Header: "Email",
    accessor: "email",
    sort: false,
  },
  {
    Header: "Location",
    accessor: "location",
    sort: false,
  },
  {
    Header: "Create Date",
    accessor: "created_on",
    sort: false,
  },
  {
    Header: "Status",
    accessor: "status",
    sort: false,
    Cell: StatusColumn,
  },
  {
    Header: "Action",
    accessor: "action",
    sort: false,
    classes: "table-action",
    Cell: ActionColumn,
  },
];

// main component
const Customers = () => {
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
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "CRM", path: "/apps/crm/customers" },
          { label: "Customers", path: "/apps/crm/customers", active: true },
        ]}
        title={"Customers"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row className="mb-2">
                <Col sm={4}>
                  <Button
                    variant="danger"
                    className="waves-effect waves-light"
                    onClick={onOpenModal}
                  >
                    <i className="mdi mdi-plus-circle me-1"></i> Add Customers
                  </Button>
                </Col>

                <Col sm={8}>
                  <div className="text-sm-end mt-2 mt-sm-0">
                    <Button className="btn btn-success mb-2 me-1">
                      <i className="mdi mdi-cog"></i>
                    </Button>

                    <Button className="btn btn-light mb-2 me-1">Import</Button>

                    <Button className="btn btn-light mb-2">Export</Button>
                  </div>
                </Col>
              </Row>

              <Table
                columns={columns}
                data={customers}
                pageSize={12}
                isSortable={true}
                pagination={true}
                isSelectable={true}
                tableClass="table-nowrap table-striped"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* add customer modal */}
      <AddCustomer show={show} onHide={onCloseModal} onSubmit={onSubmit} />
    </React.Fragment>
  );
};

export default Customers;
