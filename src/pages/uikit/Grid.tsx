import React from "react";
import { Row, Col, Card, Table } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";

const Grid = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Base UI", path: "/ui/grid" },
          { label: "Grid System", path: "/ui/grid", active: true },
        ]}
        title={"Grid System"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Grid options</h4>
              <p className="text-muted font-13">
                See how aspects of the Bootstrap grid system work across
                multiple devices with a handy table.
              </p>

              <Table responsive bordered striped className="mb-0">
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-center">
                      Extra small
                      <br />
                      <small>&lt;576px</small>
                    </th>
                    <th className="text-center">
                      Small
                      <br />
                      <small>≥576px</small>
                    </th>
                    <th className="text-center">
                      Medium
                      <br />
                      <small>≥768px</small>
                    </th>
                    <th className="text-center">
                      Large
                      <br />
                      <small>≥992px</small>
                    </th>
                    <th className="text-center">
                      Extra large
                      <br />
                      <small>≥1200px</small>
                    </th>
                    <th className="text-center">
                      Extra Extra large
                      <br />
                      <small>≥1400px</small>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Max container width
                    </th>
                    <td>None (auto)</td>
                    <td>540px</td>
                    <td>720px</td>
                    <td>960px</td>
                    <td>1140px</td>
                    <td>1320px</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Class prefix
                    </th>
                    <td>
                      <code>.col-</code>
                    </td>
                    <td>
                      <code>.col-sm-</code>
                    </td>
                    <td>
                      <code>.col-md-</code>
                    </td>
                    <td>
                      <code>.col-lg-</code>
                    </td>
                    <td>
                      <code>.col-xl-</code>
                    </td>
                    <td>
                      <code>.col-xxl-</code>
                    </td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      # of columns
                    </th>
                    <td colSpan={6}>12</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Gutter width
                    </th>
                    <td colSpan={6}>24px (12px on each side of a column)</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Custom gutters
                    </th>
                    <td colSpan={6}>Yes</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Nestable
                    </th>
                    <td colSpan={6}>Yes</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Column ordering
                    </th>
                    <td colSpan={6}>Yes</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* example */}
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Grid Example</h4>

              <div className="grid-structure">
                <Row>
                  <Col lg={12}>
                    <div className="grid-container">
                      &lt;Col lg={12}&gt; - col-lg-12
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={11}>
                    <div className="grid-container">
                      &lt;Col lg={11}&gt; - col-lg-11
                    </div>
                  </Col>
                  <Col lg={1}>
                    <div className="grid-container">col-lg-1</div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={10}>
                    <div className="grid-container">
                      &lt;Col lg={10}&gt; - col-lg-10
                    </div>
                  </Col>
                  <Col lg={2}>
                    <div className="grid-container">
                      &lt;Col lg={2}&gt; - col-lg-2
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={9}>
                    <div className="grid-container">
                      &lt;Col lg={9}&gt; - col-lg-9
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className="grid-container">
                      &lt;Col lg={3}&gt; - col-lg-3
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={8}>
                    <div className="grid-container">
                      &lt;Col lg={8}&gt; - col-lg-8
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="grid-container">
                      &lt;Col lg={4}&gt; - col-lg-4
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7}>
                    <div className="grid-container">
                      &lt;Col lg={7}&gt; - col-lg-7
                    </div>
                  </Col>
                  <Col lg={5}>
                    <div className="grid-container">
                      &lt;Col lg={5}&gt; - col-lg-5
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6}>
                    <div className="grid-container">
                      &lt;Col lg={6}&gt; - col-lg-6
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="grid-container">
                      &lt;Col lg={6}&gt; - col-lg-6
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={5}>
                    <div className="grid-container">
                      &lt;Col lg={5}&gt; - col-lg-5
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="grid-container">
                      &lt;Col lg={7}&gt; - col-lg-7
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={4}>
                    <div className="grid-container">
                      &lt;Col lg={4}&gt; - col-lg-4
                    </div>
                  </Col>
                  <Col lg={8}>
                    <div className="grid-container">
                      &lt;Col lg={8}&gt; - col-lg-8
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={3}>
                    <div className="grid-container">
                      &lt;Col lg={3}&gt; - col-lg-3
                    </div>
                  </Col>
                  <Col lg={9}>
                    <div className="grid-container">
                      &lt;Col lg={9}&gt; - col-lg-9
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={2}>
                    <div className="grid-container">
                      &lt;Col lg={2}&gt; - col-lg-2
                    </div>
                  </Col>
                  <Col lg={10}>
                    <div className="grid-container">
                      &lt;Col lg={10}&gt; - col-lg-10
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={1}>
                    <div className="grid-container">col-lg-1</div>
                  </Col>
                  <Col lg={11}>
                    <div className="grid-container">
                      &lt;Col lg={11}&gt; - col-lg-11
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={2}>
                    <div className="grid-container">col-lg-2</div>
                  </Col>
                  <Col lg={3}>
                    <div className="grid-container">col-lg-3</div>
                  </Col>

                  <Col lg={4}>
                    <div className="grid-container">col-lg-4</div>
                  </Col>

                  <Col lg={2}>
                    <div className="grid-container">col-lg-2</div>
                  </Col>

                  <Col lg={1}>
                    <div className="grid-container">col-lg-1</div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Grid;
