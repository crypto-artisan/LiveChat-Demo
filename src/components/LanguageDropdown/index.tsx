import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import classNames from "classnames";

import enFlag from "./flags/us.jpg";
import germanyFlag from "./flags/germany.jpg";
import italyFlag from "./flags/italy.jpg";
import spainFlag from "./flags/spain.jpg";
import russiaFlag from "./flags/russia.jpg";

// get the languages
const Languages = [
  {
    name: "English",
    flag: enFlag,
  },
  {
    name: "German",
    flag: germanyFlag,
  },
  {
    name: "Italian",
    flag: italyFlag,
  },
  {
    name: "Spanish",
    flag: spainFlag,
  },
  {
    name: "Russian",
    flag: russiaFlag,
  },
];

const LanguageDropdown = () => {
  const enLang = Languages[0] || {};
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  /*
   * toggle language-dropdown
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
      <Dropdown.Toggle
        id="dropdown-languages"
        as="a"
        onClick={toggleDropdown}
        className={classNames("nav-link waves-effect waves-light", {
          show: dropdownOpen,
        })}
      >
        <img src={enLang.flag} alt={enLang.name} height="16" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
        <div onClick={toggleDropdown}>
          {(Languages || []).map((lang, i) => {
            return (
              <Link
                to="#"
                className="dropdown-item notify-item"
                key={i + "-lang"}
              >
                <img
                  src={lang.flag}
                  alt={lang.name}
                  className="me-1"
                  height="12"
                />{" "}
                <span className="align-middle">{lang.name}</span>
              </Link>
            );
          })}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageDropdown;
