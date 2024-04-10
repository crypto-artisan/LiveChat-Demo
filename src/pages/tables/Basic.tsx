import React from "react";
import { Row, Col, Card, Table } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";

interface TableRecords {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
}

// dummy records
const records: TableRecords[] = [
  { id: 1, firstName: "Mark", lastName: "Otto", userName: "@mdo" },
  { id: 2, firstName: "Jacob", lastName: "Thornton", userName: "@fat" },
  { id: 3, firstName: "Dave", lastName: "G", userName: "@dave" },
  { id: 4, firstName: "Nik", lastName: "N", userName: "@nikn" },
  { id: 5, firstName: "Shreyu", lastName: "Navadiya", userName: "@sn" },
];

const BasicTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Basic example</h4>
        <p className="text-muted font-14 mb-4">
          Just use <code>Table</code> element
        </p>

        <div className="table-responsive">
          <Table className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

const InverseTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Inverse Table</h4>
        <p className="text-muted font-14 mb-4">
          You can also invert the colors—with light text on dark backgrounds—by
          specifying <code>dark</code> attribute
        </p>

        <div className="table-responsive">
          <Table className="mb-0" variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

const TableHeadOptions = ({ variant }: { variant: string }) => {
  const theadClass: string = variant === "light" ? "table-light" : "table-dark";
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Table head options</h4>
          <p className="text-muted font-14 mb-4">
            Use one of two modifier classes to make <code>&lt;thead&gt;</code>s
            appear light or dark gray.
          </p>
          <div className="table-responsive">
            <Table className="mb-0">
              <thead className={theadClass}>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {(records || []).map((record, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{record.id}</th>
                      <td>{record.firstName}</td>
                      <td>{record.lastName}</td>
                      <td>{record.userName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const StripedRowsTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Striped Rows</h4>
        <p className="text-muted font-14 mb-4">
          Add <code>striped</code> attribute to table
        </p>

        <div className="table-responsive">
          <Table className="mb-0" striped>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

const BorderedTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Bordered table</h4>
        <p className="text-muted font-14 mb-4">
          Add <code>bordered</code> attribute for borders on all sides of the
          table and cells.
        </p>

        <div className="table-responsive">
          <Table className="mb-0" bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

const BorderedColorTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Bordered table</h4>
        <p className="text-muted font-14 mb-4">
          Add <code>.table-bordered</code> for borders on all sides of the table
          and cells.
        </p>

        <Table className="border-primary mb-0" bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {(records || []).map((record, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{record.id}</th>
                  <td>{record.firstName}</td>
                  <td>{record.lastName}</td>
                  <td>{record.userName}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

const HoverableTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Hoverable Rows</h4>
        <p className="text-muted font-14 mb-4">
          Add <code>hover</code> attribute to enable a hover state on table rows
        </p>

        <Table className="mb-0" hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {(records || []).map((record, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{record.id}</th>
                  <td>{record.firstName}</td>
                  <td>{record.lastName}</td>
                  <td>{record.userName}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

const SmallTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Small table</h4>
        <p className="text-muted font-14 mb-4">
          Add <code>size="sm"</code> attribute to make tables more compact by
          cutting cell padding in half
        </p>

        <Table className="mb-0" size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {(records || []).map((record, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{record.id}</th>
                  <td>{record.firstName}</td>
                  <td>{record.lastName}</td>
                  <td>{record.userName}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

const BorderlessTable = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Borderless table</h4>
          <p className="text-muted font-14 mb-4">
            For basic styling—light padding and only horizontal dividers—add the
            base class <code>.table</code> to any <code>&lt;table&gt;</code>.
          </p>

          <div className="table-responsive">
            <Table className="mb-0" borderless>
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {(records || []).map((record, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{record.id}</th>
                      <td>{record.firstName}</td>
                      <td>{record.lastName}</td>
                      <td>{record.userName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const BorderlessInverseTable = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title">Borderless Inverse table</h4>
          <p className="text-muted font-14 mb-4">
            {" "}
            Your awesome text goes here.Your awesome text goes here.
          </p>

          <div className="table-responsive">
            <Table className="mb-0" variant="dark" borderless>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {(records || []).map((record, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{record.id}</th>
                      <td>{record.firstName}</td>
                      <td>{record.lastName}</td>
                      <td>{record.userName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const TableFoot = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title mb-4">Table foot</h4>

          <div className="table-responsive">
            <Table className="mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {(records || []).map((record, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{record.id}</th>
                      <td>{record.firstName}</td>
                      <td>{record.lastName}</td>
                      <td>{record.userName}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row">Footer</th>
                  <td>Footer</td>
                  <td>Footer</td>
                  <td>Footer</td>
                </tr>
              </tfoot>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const ResponsiveTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Always responsive</h4>
        <p className="text-muted font-14 mb-4">
          Across every breakpoint, use <code>responsive</code> attribute to
          create responsive tables
        </p>

        <Table className="mb-0" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {(records || []).map((record, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{record.id}</th>
                  <td>{record.firstName}</td>
                  <td>{record.lastName}</td>
                  <td>{record.userName}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

const Tables = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Tables", path: "/ui/tables/basic" },
          { label: "Basic Tables", path: "/ui/tables/basic", active: true },
        ]}
        title={"Basic Tables"}
      />

      <Row>
        <Col lg={6}>
          <BasicTable />
        </Col>

        <Col lg={6}>
          <InverseTable />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <TableHeadOptions variant="light" />
        </Col>

        <Col lg={6}>
          <TableHeadOptions variant="dark" />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <BorderedTable />
        </Col>

        <Col lg={6}>
          <BorderedColorTable />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <HoverableTable />
        </Col>

        <Col lg={6}>
          <SmallTable />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <BorderlessTable />
        </Col>

        <Col lg={6}>
          <BorderlessInverseTable />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <StripedRowsTable />
        </Col>

        <Col lg={6}>
          <TableFoot />
        </Col>
      </Row>

      <Row>
        <Col>
          <ResponsiveTable />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Tables;
