import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";

const MaximizeScreen = () => {
  useEffect(() => {
    let elem = document.querySelector(".maximize-icon");

    if (elem) elem.setAttribute("data-toggle", "fullscreen");

    return () => {
      if (elem) elem.removeAttribute("data-toggle");
    };
  }, []);

  /*
   * toggle full screen mode
   */
  const toggleFullscreen = () => {
    let document: any = window.document;
    document.body.classList.add("fullscreen-enable");

    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }

    // handle fullscreen exit
    const exitHandler = () => {
      if (
        !document.webkitIsFullScreen &&
        !document.mozFullScreen &&
        !document.msFullscreenElement
      )
        document.body.classList.remove("fullscreen-enable");
    };
    document.addEventListener("fullscreenchange", exitHandler);
    document.addEventListener("webkitfullscreenchange", exitHandler);
    document.addEventListener("mozfullscreenchange", exitHandler);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-languages"
        as="a"
        onClick={toggleFullscreen}
        className="nav-link waves-effect waves-light maximize-icon"
      >
        <i className="fe-maximize noti-icon font-22"></i>
      </Dropdown.Toggle>
    </Dropdown>
  );
};

export default MaximizeScreen;
