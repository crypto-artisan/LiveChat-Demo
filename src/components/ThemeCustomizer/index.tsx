import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

// actions
import {
  changeLayout,
  changeLayoutModes,
  changeLayoutColor,
  changeLayoutWidth,
  changeMenuPositions,
  changeSidebarTheme,
  changeSidebarType,
  toggleSidebarUserInfo,
  changeTopbarTheme,
  toggleTwoToneIcons,
  changeTwoColumnThemes,
} from "../../redux/actions";

// store
import { RootState, AppDispatch } from "../../redux/store";

// constants
import * as layoutConstants from "../../constants/layout";

// custom hook
import { useViewport } from "../../hooks/useViewPort";

// components
import LayoutMode from "./LayoutMode";
import LayoutTypes from "./LayoutTypes";
import LayoutColor from "./LayoutColor";
import LayoutWidth from "./LayoutWidth";
import MenuPositions from "./MenuPositions";
import LeftSideBarTheme from "./LeftSideBarTheme";
import LeftSideBarType from "./LeftSideBarType";
import TwoToneIcons from "./TwoToneIcons";
import SidebarUserInfo from "./SidebarUserInfo";
import TopbarTheme from "./TopbarTheme";
import TwoColumnTheme from "./TwoColumnTheme";

const ThemeCustomizer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { width } = useViewport();

  const {
    layoutMode,
    // sidenavUser,
    layoutColor,
    layoutType,
    layoutWidth,
    menuPosition,
    leftSideBarType,
    leftSideBarTheme,
    showTwoToneIcons,
    showSidebarUserInfo,
    topbarTheme,
    twoColumnTheme,
  } = useSelector((state: RootState) => ({
    layoutMode: state.Layout.layoutMode,
    twoColumnTheme: state.Layout.twoColumnTheme,
    // sidenavUser: state.Layout.sidenavUser,
    layoutColor: state.Layout.layoutColor,
    layoutType: state.Layout.layoutType,
    layoutWidth: state.Layout.layoutWidth,
    menuPosition: state.Layout.menuPosition,
    leftSideBarTheme: state.Layout.leftSideBarTheme,
    leftSideBarType: state.Layout.leftSideBarType,
    showTwoToneIcons: state.Layout.showTwoToneIcons,
    showSidebarUserInfo: state.Layout.showSidebarUserInfo,
    topbarTheme: state.Layout.topbarTheme,
  }));

  const [disableMenuPositions, setDisableMenuPositions] =
    useState<boolean>(false);
  // const [disableSidebarTheme, setDisableSidebarTheme] = useState<boolean>(false);
  const [disableSidebarType, setDisableSidebarType] = useState<boolean>(false);
  // const [disableTwoToneIcons, setDisableTwoToneIcons] = useState<boolean>(false);
  const [disableSidebarUser, setDisableSidebarUser] = useState<boolean>(false);
  const [disableLayoutMode, setDisableLayoutMode] = useState<boolean>(false);
  const [showTwoColumnTheme, setShowTwoColumnTheme] = useState<boolean>(false);

  /**
   * change state based on props changes
   */
  const _loadStateFromProps = useCallback(() => {
    setDisableMenuPositions(
      layoutType !== layoutConstants.LayoutTypes.LAYOUT_TWO_COLUMN
    );
    // setDisableSidebarTheme(layoutType !== layoutConstants.LayoutTypes.LAYOUT_HORIZONTAL);
    setDisableLayoutMode(
      layoutType !== layoutConstants.LayoutTypes.LAYOUT_HORIZONTAL
    );
    setDisableSidebarType(
      layoutType !== layoutConstants.LayoutTypes.LAYOUT_HORIZONTAL &&
      layoutType !== layoutConstants.LayoutTypes.LAYOUT_TWO_COLUMN &&
      width > 991
    );
    // setDisableTwoToneIcons(layoutType === layoutConstants.LayoutTypes.LAYOUT_VERTICAL);
    setDisableSidebarUser(
      layoutType !== layoutConstants.LayoutTypes.LAYOUT_HORIZONTAL &&
      layoutType !== layoutConstants.LayoutTypes.LAYOUT_TWO_COLUMN &&
      layoutMode !== layoutConstants.LayoutMode.LAYOUT_DETACHED
    );
    setShowTwoColumnTheme(
      layoutType === layoutConstants.LayoutTypes.LAYOUT_TWO_COLUMN
    );
  }, [layoutType, width, layoutMode]);

  useEffect(() => {
    _loadStateFromProps();
  }, [_loadStateFromProps]);

  /**
   * On layout change
   */
  const changeLayoutType = (value: any) => {
    var layout = value;
    //
    switch (layout) {
      case "horizontal":
        dispatch(changeLayout(layoutConstants.LayoutTypes.LAYOUT_HORIZONTAL));
        break;
      // case 'detached':
      //   dispatch(changeLayout(layoutConstants.LayoutTypes.LAYOUT_DETACHED));
      //   break;
      case "vertical":
        dispatch(changeLayout(layoutConstants.LayoutTypes.LAYOUT_VERTICAL));
        break;
      default:
        dispatch(changeLayout(layoutConstants.LayoutTypes.LAYOUT_TWO_COLUMN));
        break;
    }
  };

  const changeLayoutMode = (value: any) => {
    var layout = value;
    switch (layout) {
      case "fluid":
        dispatch(changeLayoutModes(layoutConstants.LayoutMode.LAYOUT_DEFAULT));
        break;
      case "detached":
        dispatch(changeLayoutModes(layoutConstants.LayoutMode.LAYOUT_DETACHED));
        break;
      default:
        dispatch(changeLayoutModes(layoutConstants.LayoutMode.LAYOUT_DEFAULT));
        break;
    }
  };

  const changeTwoColumnTheme = (value: any) => {
    var layout = value;
    switch (layout) {
      case "light":
        dispatch(
          changeTwoColumnThemes(layoutConstants.TwoColumnTheme.TWOCOLUMN_LIGHT)
        );
        break;
      case "dark":
        dispatch(
          changeTwoColumnThemes(layoutConstants.TwoColumnTheme.TWOCOLUMN_DARK)
        );
        break;
      case "gradient":
        dispatch(
          changeTwoColumnThemes(
            layoutConstants.TwoColumnTheme.TWOCOLUMN_GRADIENT
          )
        );
        break;
      default:
        dispatch(
          changeTwoColumnThemes(layoutConstants.TwoColumnTheme.TWOCOLUMN_BRAND)
        );
    }
  };

  /**
   * Change the layout color
   */
  const changeLayoutColorScheme = (value: any) => {
    var mode = value;
    switch (mode) {
      case "dark":
        dispatch(
          changeLayoutColor(layoutConstants.LayoutColor.LAYOUT_COLOR_DARK)
        );
        break;
      default:
        dispatch(
          changeLayoutColor(layoutConstants.LayoutColor.LAYOUT_COLOR_LIGHT)
        );
        break;
    }
  };

  /**
   * Change the width mode
   */
  const changeWidthMode = (value: any) => {
    var mode = value;

    switch (mode) {
      case "boxed":
        dispatch(
          changeLayoutWidth(layoutConstants.LayoutWidth.LAYOUT_WIDTH_BOXED)
        );
        break;
      default:
        dispatch(
          changeLayoutWidth(layoutConstants.LayoutWidth.LAYOUT_WIDTH_FLUID)
        );
        break;
    }
  };

  /*
   * Change menus position
   */
  const changeMenuPosition = (value: any) => {
    var position = value;

    switch (position) {
      case "scrollable":
        dispatch(
          changeMenuPositions(
            layoutConstants.MenuPositions.MENU_POSITION_SCROLLABLE
          )
        );
        break;
      default:
        dispatch(
          changeMenuPositions(layoutConstants.MenuPositions.MENU_POSITION_FIXED)
        );
        break;
    }
  };

  /**
   * Changes the theme
   */
  const changeLeftSidebarTheme = (value: any) => {
    var theme = value;
    switch (theme) {
      case "dark":
        dispatch(
          changeSidebarTheme(
            layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_DARK
          )
        );
        break;
      case "brand":
        dispatch(
          changeSidebarTheme(
            layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_BRAND
          )
        );
        break;
      case "gradient":
        dispatch(
          changeSidebarTheme(
            layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_GRADIENT
          )
        );
        break;
      default:
        dispatch(
          changeSidebarTheme(
            layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT
          )
        );
        break;
    }
  };

  /**
   * Change the leftsiderbar type
   */
  const changeLeftSiderbarType = (value: any) => {
    var type = value;
    switch (type) {
      case "condensed":
        dispatch(
          changeSidebarType(
            layoutConstants.SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED
          )
        );
        break;
      case "compact":
        dispatch(
          changeSidebarType(
            layoutConstants.SideBarTypes.LEFT_SIDEBAR_TYPE_COMPACT
          )
        );
        break;
      case "full":
        dispatch(
          changeSidebarType(layoutConstants.SideBarTypes.LEFT_SIDEBAR_TYPE_FULL)
        );
        break;
      case "fullscreen":
        dispatch(
          changeSidebarType(
            layoutConstants.SideBarTypes.LEFT_SIDEBAR_TYPE_FULLSCREEN
          )
        );
        break;
      default:
        dispatch(
          changeSidebarType(
            layoutConstants.SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT
          )
        );
        break;
    }
  };

  /**
   * Toggle the two-icon-mode
   */
  const toggleTwoToneIconsMode = (value: any) => {
    var checked = value;
    dispatch(toggleTwoToneIcons(checked));
  };

  /*
   * Toggle the leftsidebar use info
   */
  const toggleLeftSidebarUserInfo = (value: any) => {
    var checked = value;
    dispatch(toggleSidebarUserInfo(checked));
  };

  /*
   * Change topbar theme
   */
  const changeTopBarTheme = (value: any) => {
    var theme = value;
    switch (theme) {
      case "light":
        dispatch(
          changeTopbarTheme(layoutConstants.TopbarTheme.TOPBAR_THEME_LIGHT)
        );
        break;
      case "brand":
        dispatch(
          changeTopbarTheme(layoutConstants.TopbarTheme.TOPBAR_THEME_BRAND)
        );
        break;
      default:
        dispatch(
          changeTopbarTheme(layoutConstants.TopbarTheme.TOPBAR_THEME_DARK)
        );
        break;
    }
  };

  /**
   * Reset everything
   */
  const reset = () => {
    changeLayoutMode(layoutConstants.LayoutMode.LAYOUT_DEFAULT);
    changeTwoColumnTheme(layoutConstants.TwoColumnTheme.TWOCOLUMN_LIGHT);
    changeLayoutType(layoutConstants.LayoutTypes.LAYOUT_TWO_COLUMN);
    changeLayoutColorScheme(layoutConstants.LayoutColor.LAYOUT_COLOR_LIGHT);
    changeWidthMode(layoutConstants.LayoutWidth.LAYOUT_WIDTH_FLUID);
    changeMenuPosition(layoutConstants.MenuPositions.MENU_POSITION_FIXED);
    changeLeftSidebarTheme(
      layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT
    );
    toggleLeftSidebarUserInfo(false);
    toggleTwoToneIconsMode(false);
    changeTopBarTheme(layoutConstants.TopbarTheme.TOPBAR_THEME_LIGHT);
    changeLeftSiderbarType(
      layoutConstants.SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT
    );
  };

  return (
    <React.Fragment>
      <h6 className="fw-medium px-3 m-0 py-2 font-13 text-uppercase bg-light">
        <span className="d-block py-1">Theme Settings</span>
      </h6>
      <div className="p-3">
        <div className="alert alert-warning" role="alert">
          <strong>Customize </strong> the overall color scheme, sidebar menu,
          etc.
        </div>

        {/* Layouts */}
        <LayoutTypes
          changeLayoutType={changeLayoutType}
          layoutType={layoutType}
          layoutConstants={layoutConstants.LayoutTypes}
        />

        {/* Layout Modes */}
        {disableLayoutMode && (
          <LayoutMode
            changeLayoutMode={changeLayoutMode}
            layoutMode={layoutMode}
            layoutConstants={layoutConstants.LayoutMode}
          />
        )}

        <LayoutColor
          changeLayoutColorScheme={changeLayoutColorScheme}
          layoutColor={layoutColor}
          layoutConstants={layoutConstants.LayoutColor}
        />

        {/* Width */}
        <LayoutWidth
          changeWidthMode={changeWidthMode}
          layoutWidth={layoutWidth}
          layoutConstants={layoutConstants.LayoutWidth}
        />

        {/* Menu Posiotions */}
        {disableMenuPositions && (
          <MenuPositions
            menuPosition={menuPosition}
            changeMenuPosition={changeMenuPosition}
            layoutConstants={layoutConstants.MenuPositions}
          />
        )}

        {/* Left Sidebar */}
        {/* {disableSidebarTheme && ( */}
        <LeftSideBarTheme
          changeLeftSidebarTheme={changeLeftSidebarTheme}
          leftSideBarTheme={leftSideBarTheme}
          layoutConstants={layoutConstants.SideBarTheme}
        />
        {/* )} */}

        {/* Left Sidebar Size */}
        {disableSidebarType && (
          <LeftSideBarType
            changeLeftSiderbarType={changeLeftSiderbarType}
            leftSideBarType={leftSideBarType}
            layoutConstants={layoutConstants.SideBarTypes}
          />
        )}

        {showTwoColumnTheme && (
          <TwoColumnTheme
            changeTwoColumnTheme={changeTwoColumnTheme}
            twoColumnTheme={twoColumnTheme}
            layoutConstants={layoutConstants.TwoColumnTheme}
          />
        )}

        {/* tow-tone icons */}
        {/* {disableTwoToneIcons && ( */}
        <TwoToneIcons
          toggleTwoToneIconsMode={toggleTwoToneIconsMode}
          showTwoToneIcons={showTwoToneIcons}
        />
        {/* )} */}

        {/* Topbar */}
        <TopbarTheme
          changeTopBarTheme={changeTopBarTheme}
          topbarTheme={topbarTheme}
          layoutConstants={layoutConstants.TopbarTheme}
        />

        {/* User Info */}
        {disableSidebarUser && (
          <SidebarUserInfo
            toggleLeftSidebarUserInfo={toggleLeftSidebarUserInfo}
            showSidebarUserInfo={showSidebarUserInfo}
          />
        )}

        <div className="d-grid mt-4">
          <button
            className="btn btn-primary"
            id="resetBtn"
            onClick={() => reset()}
          >
            Reset to Default
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ThemeCustomizer;
