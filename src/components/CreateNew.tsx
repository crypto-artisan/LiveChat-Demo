import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import classNames from "classnames";

interface CreateNewProps {
  otherOptions: {
    id: number;
    label: string;
    icon: string;
  }[];
}

const CreateNew = ({ otherOptions }: CreateNewProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  /*
   * toggle dropdown
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
        <Dropdown.Toggle
          id="dropdown-notification"
          as="a"
          onClick={toggleDropdown}
          className={classNames("nav-link waves-effect waves-light", {
            show: dropdownOpen,
          })}
        >
          Create New <i className="mdi mdi-chevron-down"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          <div onClick={toggleDropdown}>
            {(otherOptions || []).map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {index === otherOptions.length - 1 && (
                    <div className="dropdown-divider"></div>
                  )}
                  <Link key={index} to="#" className="dropdown-item">
                    <i className={classNames(item.icon, "me-1")}></i>
                    <span>{item.label}</span>
                  </Link>
                </React.Fragment>
              );
            })}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default CreateNew;
