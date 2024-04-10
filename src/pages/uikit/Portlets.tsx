import React from "react";
import { Row, Col } from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../components/PageTitle";
import { BasicPortlet, PortletWithHeader } from "../../components/Portlet";

const Portlets = () => {
  const headerVariant = ["danger", "blue", "warning", "info", "dark", "pink"];
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Base UI", path: "/ui/portlets" },
          { label: "Portlets", path: "/ui/portlets", active: true },
        ]}
        title={"Portlets"}
      />

      <Row>
        <Col lg={4}>
          <BasicPortlet titleClass="card-title">
            <div>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
            </div>
          </BasicPortlet>
        </Col>
        <Col lg={4}>
          <BasicPortlet
            className="bg-primary text-white"
            titleClass="card-title text-white"
          >
            <div>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
            </div>
          </BasicPortlet>
        </Col>
        <Col lg={4}>
          <BasicPortlet
            className="bg-success text-white"
            titleClass="card-title text-white"
          >
            <div>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
            </div>
          </BasicPortlet>
        </Col>
      </Row>

      <Row>
        {(headerVariant || []).map((item, index) => {
          return (
            <Col lg={4} key={index}>
              <PortletWithHeader
                headerClass={classNames(
                  "py-3",
                  "bg-" + item,
                  item === "dark" ? "text-light" : "text-white"
                )}
                titleClass={classNames(
                  "card-title",
                  item === "dark" ? "text-light" : "text-white"
                )}
              >
                <div>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et.
                </div>
              </PortletWithHeader>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Portlets;
