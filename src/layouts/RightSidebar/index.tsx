import React, { useCallback, useEffect, useRef, useState } from "react";
import { Nav, Offcanvas, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";

// actions
import { hideRightSidebar } from "../../redux/actions";

// store
import { AppDispatch, RootState } from "../../redux/store";

// components
import Chats from "../../components/Chats";
import Tasks from "../../components/Tasks";
import ThemeCustomizer from "../../components/ThemeCustomizer/";

import { chats, tasks } from "./data";

interface RightSideBarProps {
  hideRightSidebar?: () => void;
  title?: string;
  children?: any;
}

const RightSideBar = (props: RightSideBarProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const rightBarNodeRef: any = useRef(null);
  const [showRightSideNav, setShowRightSideNav] =
    useState<boolean>(rightBarNodeRef);

  const { isOpenRightSideBar } = useSelector((state: RootState) => ({
    isOpenRightSideBar: state.Layout.isOpenRightSideBar,
  }));

  /**
   * Handle the click anywhere in doc
   */
  const handleOtherClick = useCallback(
    (e: any) => {
      if (isOpenRightSideBar) {
        if (
          rightBarNodeRef &&
          rightBarNodeRef.current &&
          rightBarNodeRef.current.contains(e.target)
        ) {
          return;
        } else {
          dispatch(hideRightSidebar(), setShowRightSideNav(false));
        }
      }
    },
    [rightBarNodeRef, dispatch, isOpenRightSideBar]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOtherClick, false);
    return () => {
      document.removeEventListener("mousedown", handleOtherClick, false);
    };
  }, [handleOtherClick]);

  return (
    <React.Fragment>
      <Offcanvas
        className="right-bar"
        show={showRightSideNav}
        onHide={handleOtherClick}
        placement="end"
      >
        <div className="h-100" ref={rightBarNodeRef}>
          <SimpleBar
            style={{ maxHeight: "100%", zIndex: 10000 }}
            // timeout={500}
            scrollbarMaxSize={320}
          >
            <Tab.Container
              id="left-tabs-example"
              defaultActiveKey="themecustomizer"
            >
              <Nav variant="tabs" className="nav-bordered nav-justified">
                <Nav.Item as="li">
                  <Nav.Link eventKey="chats" className="py-2 cursor-pointer">
                    <i className="mdi mdi-message-text d-block font-22 my-1"></i>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="tasks" className="py-2 cursor-pointer">
                    <i className="mdi mdi-format-list-checkbox d-block font-22 my-1"></i>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    eventKey="themecustomizer"
                    className="py-2 cursor-pointer"
                  >
                    <i className="mdi mdi-cog-outline d-block font-22 my-1"></i>
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content className="p-0">
                <Tab.Pane eventKey="chats">
                  <Chats chats={chats} />
                </Tab.Pane>
                <Tab.Pane eventKey="tasks">
                  <Tasks tasks={tasks} />
                </Tab.Pane>
                <Tab.Pane eventKey="themecustomizer">
                  <ThemeCustomizer />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </SimpleBar>
        </div>
      </Offcanvas>
      {/* <div className="rightbar-overlay"></div> */}
    </React.Fragment>
  );
};

export default RightSideBar;
