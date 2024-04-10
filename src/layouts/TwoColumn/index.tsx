import React, { Suspense, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

// actions
// import { changeTopbarTheme } from '../../redux/actions';

// store
import { RootState, AppDispatch } from "../../redux/store";

// utils
import { changeHTMLAttribute } from "../../utils";

// constants
import { LayoutTypes, SideBarTypes } from "../../constants/layout";
import { changeSidebarType } from "../../redux/actions";
import { useViewport } from "../../hooks/useViewPort";

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import("../Topbar"));
const LeftSidebar = React.lazy(() => import("./LeftSidebar"));
const Footer = React.lazy(() => import("../Footer"));
const RightSidebar = React.lazy(() => import("../RightSidebar"));

const loading = () => <div className="text-center"></div>;

interface VerticalLayoutProps {
  children?: any;
}

const TwoColumnLayout = ({ children }: VerticalLayoutProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { width } = useViewport();

  const {
    layoutMode,
    twoColumnTheme,
    layoutColor,
    layoutWidth,
    leftSideBarTheme,
    leftSideBarType,
    topbarTheme,
    isOpenRightSideBar,
    showTwoToneIcons,
  } = useSelector((state: RootState) => ({
    layoutMode: state.Layout.layoutMode,
    twoColumnTheme: state.Layout.twoColumnTheme,
    layoutColor: state.Layout.layoutColor,
    layoutWidth: state.Layout.layoutWidth,
    menuPosition: state.Layout.menuPosition,
    leftSideBarTheme: state.Layout.leftSideBarTheme,
    leftSideBarType: state.Layout.leftSideBarType,
    topbarTheme: state.Layout.topbarTheme,
    showTwoToneIcons: state.Layout.showTwoToneIcons,
    isOpenRightSideBar: state.Layout.isOpenRightSideBar,
  }));

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  /*
   * layout defaults
   */

  useEffect(() => {
    if (window.outerWidth < 1140) {
      dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_FULL));
    } else if (width >= 1140) {
      dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  useEffect(() => {
    changeHTMLAttribute("data-layout", LayoutTypes.LAYOUT_TWO_COLUMN);
  }, []);

  // useEffect(() => {
  //   changeHTMLAttribute('data-sidenav-layout', LayoutTypes.LAYOUT_TWO_COLUMN);
  //   dispatch(changeTopbarTheme(TopbarTheme.TOPBAR_THEME_LIGHT));
  // }, [dispatch]);

  useEffect(() => {
    changeHTMLAttribute("data-two-column-color", twoColumnTheme);
  }, [twoColumnTheme]);

  useEffect(() => {
    changeHTMLAttribute("data-layout-mode", layoutMode);
  }, [layoutMode]);

  useEffect(() => {
    changeHTMLAttribute("data-bs-theme", layoutColor);
  }, [layoutColor]);

  useEffect(() => {
    changeHTMLAttribute("data-layout-width", layoutWidth);
  }, [dispatch, layoutWidth]);

  useEffect(() => {
    changeHTMLAttribute("data-menu-color", leftSideBarTheme);
  }, [leftSideBarTheme]);

  useEffect(() => {
    changeHTMLAttribute("data-topbar-color", topbarTheme);
  }, [topbarTheme]);

  useEffect(() => {
    changeHTMLAttribute("data-sidenav-size", leftSideBarType);
  }, [leftSideBarType]);

  useEffect(() => {
    changeHTMLAttribute("data-menu-icon", showTwoToneIcons ? "twotones" : "default");
  }, [showTwoToneIcons]);

  /**
   * Open the menu when having mobile screen
   */
  const openMenu = () => {
    setIsMenuOpened((prevState) => !prevState);
    if (document.body) {
      if (isMenuOpened) {
        document.body.classList.add("sidebar-enable");
      } else {
        document.body.classList.remove("sidebar-enable");
      }
    }
  };

  return (
    <>
      <div id="wrapper" className="menuitem-active">
        <Suspense fallback={loading()}>
          <LeftSidebar />
        </Suspense>

        <div className="content-page">
          <Suspense fallback={loading()}>
            <Topbar openLeftMenuCallBack={openMenu} topbarDark={true} />
          </Suspense>

          <div className="content">
            <Container fluid>
              <Suspense fallback={loading()}>{children}</Suspense>
            </Container>
          </div>

          <Suspense fallback={loading()}>
            <Footer />
          </Suspense>
        </div>
      </div>
      {isOpenRightSideBar && (
        <Suspense fallback={loading()}>
          <RightSidebar />
        </Suspense>
      )}
    </>
  );
};

export default TwoColumnLayout;
