import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Dropdown } from "react-bootstrap";
import classNames from "classnames";

// components
import Table from "../../../../components/Table";

// dummy data
import { TicketDetailsItems } from "./data";

/* id column render */
const IdColumn = ({ row }: { row: any }) => {
  return (
    <>
      <b>{row.original.id}</b>
    </>
  );
};

/* requested by column render */
const RequestedBy = ({ row }: { row: any }) => {
  return (
    <>
      <Link to="#" className="text-body">
        <img
          src={row.original.requested_by.image}
          alt=""
          title="contact-img"
          className="rounded-circle avatar-xs"
        />
        <span className="ms-2">{row.original.requested_by.name}</span>
      </Link>
    </>
  );
};

/* assignee column render */
const AssigneeColumn = ({ row }: { row: any }) => {
  return (
    <>
      <Link to="#">
        <img
          src={row.original.assignee}
          alt=""
          title="contact-img"
          className="rounded-circle avatar-xs"
        />
      </Link>
    </>
  );
};

/* priority column render */
const PriorityColumn = ({ row }: { row: any }) => {
  return (
    <>
      <span
        className={classNames("badge", {
          "bg-soft-secondary text-secondary": row.original.priority === "Low",
          "bg-soft-warning text-warning": row.original.priority === "Medium",
          "bg-soft-danger text-danger": row.original.priority === "High",
        })}
      >
        {row.original.priority}
      </span>
    </>
  );
};

/* status column render */
const StatusColumn = ({ row }: { row: any }) => {
  return (
    <>
      <span
        className={classNames("badge", {
          "bg-success": row.original.status === "Open",
          "bg-secondary text-light": row.original.status === "Closed",
        })}
      >
        {row.original.status}
      </span>
    </>
  );
};

/* action column render */
const ActionColumn = () => {
  return (
    <>
      <Dropdown className="btn-group" align="end">
        <Dropdown.Toggle variant="light" className="table-action-btn btn-sm">
          <i className="mdi mdi-dots-horizontal"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <i className="mdi mdi-pencil me-2 text-muted font-18 vertical-middle"></i>
            Edit Ticket
          </Dropdown.Item>
          <Dropdown.Item>
            <i className="mdi mdi-check-all me-2 text-muted font-18 vertical-middle"></i>
            Close
          </Dropdown.Item>
          <Dropdown.Item>
            <i className="mdi mdi-delete me-2 text-muted font-18 vertical-middle"></i>
            Remove
          </Dropdown.Item>
          <Dropdown.Item>
            <i className="mdi mdi-star me-2 text-muted font-18 vertical-middle"></i>
            Mark as Unread
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

// get all columns
const columns = [
  {
    Header: "ID",
    accessor: "id",
    sort: true,
    Cell: IdColumn,
  },
  {
    Header: "Requested By",
    accessor: "requested_by",
    sort: true,
    Cell: RequestedBy,
  },
  {
    Header: "Subject",
    accessor: "subject",
    sort: true,
  },

  {
    Header: "Assignee",
    accessor: "assignee",
    Cell: AssigneeColumn,
  },
  {
    Header: "Priority",
    accessor: "priority",
    sort: true,
    Cell: PriorityColumn,
  },
  {
    Header: "Status",
    accessor: "status",
    sort: true,
    Cell: StatusColumn,
  },
  {
    Header: "Created Date",
    accessor: "created_date",
    sort: true,
  },
  {
    Header: "Due Date",
    accessor: "due_date",
    sort: true,
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ActionColumn,
    sort: false,
  },
];

// get pagelist to display
const sizePerPageList = [
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "50",
    value: 50,
  },
];

interface ManageTicketsProps {
  ticketDetails: TicketDetailsItems[];
}

const ManageTickets = ({ ticketDetails }: ManageTicketsProps) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Button className="btn-sm btn-blue waves-effect waves-light float-end">
            <i className="mdi mdi-plus-circle"></i> Add Ticket
          </Button>
          <h4 className="header-title mb-4">Manage Tickets</h4>

          <Table
            columns={columns}
            data={ticketDetails}
            pageSize={10}
            sizePerPageList={sizePerPageList}
            isSortable={true}
            pagination={true}
            isSearchable={true}
            theadClass="table-light"
            searchBoxClass="mt-2 mb-3"
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default ManageTickets;
