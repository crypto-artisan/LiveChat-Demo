import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Row, Col } from "react-bootstrap";
import classNames from "classnames";

interface MegaMenuProps {
  subMenus: {
    id: number;
    title: string;
    menuItems: Array<string>;
  }[];
}

const MegaMenu = ({ subMenus }: MegaMenuProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  /*
   * toggle megamenu-dropdown
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Dropdown
      show={dropdownOpen}
      onToggle={toggleDropdown}
      className="position-static"
    >
      <Dropdown.Toggle
        id="dropdown-megamenu"
        as="a"
        onClick={toggleDropdown}
        className={classNames("nav-link waves-effect waves-light", {
          show: dropdownOpen,
        })}
      >
        Mega Menu <i className="mdi mdi-chevron-down"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu dropdown-megamenu">
        <div onClick={toggleDropdown}>
          <Row>
            <Col sm={8}>
              <Row>
                {(subMenus || []).map((submenu, index) => {
                  return (
                    <Col key={index} md={4}>
                      <h5 className="text-dark mt-0">{submenu.title}</h5>
                      <ul className="list-unstyled megamenu-list">
                        {(submenu.menuItems || []).map((item, index) => {
                          return (
                            <li key={index}>
                              <Link to="#">{item}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col sm={4}>
              <div className="text-center mt-3">
                <h3 className="text-dark">Special Discount Sale!</h3>
                <h4>Save up to 70% off.</h4>
                <button className="btn btn-primary rounded-pill mt-3">
                  Download Now
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MegaMenu;
