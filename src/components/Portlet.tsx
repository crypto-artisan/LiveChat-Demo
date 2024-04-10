import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Card, Collapse } from "react-bootstrap";

interface PortletProps {
  className?: string;
  children?: any;
  cardTitle?: string;
  titleClass?: string;
  headerClass?: string;
}

/**
 * Portlet
 */
const BasicPortlet = (props: PortletProps) => {
  const children = props["children"] || null;
  const cardTitle = props["cardTitle"] || "Card Title";

  const [collapse, setCollapse] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  /**
   * Toggle the body
   */
  const toggleContent = () => {
    setCollapse(!collapse);
  };

  /**
   * Reload the content
   */
  const reloadContent = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500 + 300 * (Math.random() * 5));
  };

  /**
   * remove the portlet
   */
  const remove = () => {
    setHidden(true);
  };

  return (
    <>
      {!hidden ? (
        <Card className={classNames(props["className"])}>
          {loading && (
            <div className="card-disabled">
              <div className="card-portlets-loader"></div>
            </div>
          )}

          <Card.Body>
            <div className="card-widgets">
              <Link to="#" onClick={reloadContent}>
                <i className="mdi mdi-refresh"></i>
              </Link>
              <Link to="#" onClick={toggleContent}>
                <i
                  className={classNames("mdi", {
                    "mdi-minus": collapse,
                    "mdi-plus": !collapse,
                  })}
                ></i>
              </Link>
              <Link to="#" onClick={remove}>
                <i className="mdi mdi-close"></i>
              </Link>
            </div>

            <h5 className={classNames("mb-0", props["titleClass"])}>
              {cardTitle}
            </h5>

            <Collapse in={collapse}>
              <div>
                <div className="pt-3">{children}</div>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      ) : null}
    </>
  );
};

const PortletWithHeader = (props: PortletProps) => {
  const children = props["children"] || null;
  const cardTitle = props["cardTitle"] || "Card Title";

  const [collapse, setCollapse] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  /**
   * Toggle the body
   */
  const toggleContent = () => {
    setCollapse(!collapse);
  };

  /**
   * Reload the content
   */
  const reloadContent = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500 + 300 * (Math.random() * 5));
  };

  /**
   * remove the portlet
   */
  const remove = () => {
    setHidden(true);
  };

  return (
    <>
      {!hidden ? (
        <Card className={classNames(props["className"])}>
          {loading && (
            <div className="card-disabled">
              <div className="card-portlets-loader"></div>
            </div>
          )}

          <Card.Header className={classNames(props["headerClass"])}>
            <div className="card-widgets">
              <Link to="#" onClick={reloadContent}>
                <i className="mdi mdi-refresh"></i>
              </Link>
              <Link to="#" onClick={toggleContent}>
                <i
                  className={classNames("mdi", {
                    "mdi-minus": collapse,
                    "mdi-plus": !collapse,
                  })}
                ></i>
              </Link>
              <Link to="#" onClick={remove}>
                <i className="mdi mdi-close"></i>
              </Link>
            </div>

            <h5 className={classNames("mb-0", props["titleClass"])}>
              {cardTitle}
            </h5>
          </Card.Header>
          <Collapse in={collapse} className="pt-3">
            <Card.Body>{children}</Card.Body>
          </Collapse>
        </Card>
      ) : null}
    </>
  );
};

export { BasicPortlet, PortletWithHeader };
