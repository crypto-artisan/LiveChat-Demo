import React, { Suspense, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// redux
import { RootState, AppDispatch } from "../../redux/store";
import { changeLayout, changeSidebarType } from "../../redux/actions";

// constants
import { LayoutTypes, SideBarTypes } from "../../constants/layout";

// utils
import { changeHTMLAttribute } from "../../utils";
import { useViewport } from "../../hooks/useViewPort";

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import("../Topbar"));
const Navbar = React.lazy(() => import("./Navbar"));
const Footer = React.lazy(() => import("../Footer"));
const RightSidebar = React.lazy(() => import("../RightSidebar"));

const loading = () => <div className="text-center"></div>;

interface HorizontalLayoutProps {
  children?: any;
}

const HorizontalLayout = ({ children }: HorizontalLayoutProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { width } = useViewport();
  //

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const {
    layoutColor,
    layoutWidth,
    menuPosition,
    topbarTheme,
    showTwoToneIcons,
    isOpenRightSideBar,
    leftSideBarTheme,
  } = useSelector((state: RootState) => ({
    layoutColor: state.Layout.layoutColor,
    layoutWidth: state.Layout.layoutWidth,
    menuPosition: state.Layout.menuPosition,
    leftSideBarTheme: state.Layout.leftSideBarTheme,
    topbarTheme: state.Layout.topbarTheme,
    isOpenRightSideBar: state.Layout.isOpenRightSideBar,
    showTwoToneIcons: state.Layout.showTwoToneIcons,
    leftSideBarType: state.Layout.leftSideBarType,
  }));

  useEffect(() => {
    if (width < 1140) {
      dispatch(changeLayout(LayoutTypes.LAYOUT_VERTICAL));
      dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_FULL));
    } else if (width >= 1140) {
      dispatch(changeLayout(LayoutTypes.LAYOUT_HORIZONTAL));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  /*
  layout defaults
  */
  useEffect(() => {
    changeHTMLAttribute("data-layout", LayoutTypes.LAYOUT_HORIZONTAL);
  }, [dispatch]);

  useEffect(() => {
    changeHTMLAttribute("data-menu-color", leftSideBarTheme);
  }, [leftSideBarTheme]);

  useEffect(() => {
    changeHTMLAttribute("data-bs-theme", layoutColor);
  }, [layoutColor]);

  useEffect(() => {
    changeHTMLAttribute("data-layout-width", layoutWidth);
  }, [layoutWidth]);

  useEffect(() => {
    changeHTMLAttribute("data-menu-position", menuPosition);
  }, [menuPosition]);

  useEffect(() => {
    changeHTMLAttribute(
      "data-menu-icon",
      showTwoToneIcons ? "twotones" : "default"
    );
  }, [showTwoToneIcons]);

  useEffect(() => {
    changeHTMLAttribute("data-topbar-color", topbarTheme);
  }, [topbarTheme]);

  /**
   * Open the menu when having mobile screen
   */
  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
    if (document.body) {
      if (isMenuOpened) {
        document.body.classList.remove("sidebar-enable");
      } else {
        document.body.classList.add("sidebar-enable");
      }
    }
  };

  return (
    <>
      <div id="wrapper">
        <Suspense fallback={loading()}>
          <Navbar isMenuOpened={isMenuOpened} />
        </Suspense>

        <div className="content-page">
          <Suspense fallback={loading()}>
            <Topbar openLeftMenuCallBack={openMenu} topbarDark={false} />
          </Suspense>

          <div className="content">
            <Container fluid>
              <Suspense fallback={loading()}>{children}</Suspense>
            </Container>
          </div>

          <Suspense fallback={loading()}>
            <Footer />
          </Suspense>

          {isOpenRightSideBar && (
            <Suspense fallback={loading()}>
              <RightSidebar />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

export default HorizontalLayout;
