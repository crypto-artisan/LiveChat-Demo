import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import classNames from "classnames";

// utils
import { splitArray } from "../../utils/";

// apps icon
import slackIcon from "./icons/slack.png";
import bitbucketIcon from "./icons/bitbucket.png";
import dribbbleIcon from "./icons/dribbble.png";
import dropboxIcon from "./icons/dropbox.png";
import githubIcon from "./icons/github.png";
import gSuiteIcon from "./icons/g-suite.png";

// get the apps
const Apps = [
  {
    name: "Slack",
    icon: slackIcon,
    redirectTo: "#",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    redirectTo: "#",
  },
  {
    name: "Dribbble",
    icon: dribbbleIcon,
    redirectTo: "#",
  },
  {
    name: "Bitbucket",
    icon: bitbucketIcon,
    redirectTo: "#",
  },
  {
    name: "Dropbox",
    icon: dropboxIcon,
    redirectTo: "#",
  },
  {
    name: "G Suite",
    icon: gSuiteIcon,
    redirectTo: "#",
  },
];

const AppsDropdown = () => {
  const apps = Apps || [];
  const chunk_size = 3;
  const appsChunks = splitArray(apps, chunk_size);

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  /*
   * toggle apps-dropdown
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
      <Dropdown.Toggle
        id="dropdown-apps"
        as="a"
        onClick={toggleDropdown}
        className={classNames("nav-link waves-effect waves-light", {
          show: dropdownOpen,
        })}
      >
        <i className="fe-grid noti-icon font-22"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
        <div className="p-2">
          {(appsChunks || []).map((chunk, idx) => (
            <div className="row g-0" key={idx}>
              {(chunk || []).map((item, i) => (
                <div className="col" key={i}>
                  <Link className="dropdown-icon-item" to={item.redirectTo}>
                    <img src={item.icon} alt="" />
                    <span>{item.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AppsDropdown;
