// action constants
import { LayoutActionTypes, LayoutStateTypes } from "./constants";

// app constants
import {
  TwoColumnTheme,
  LayoutMode,
  // SidenavUser,
  LayoutTypes,
  LayoutColor,
  LayoutWidth,
  MenuPositions,
  SideBarTheme,
  SideBarTypes,
  TopbarTheme,
} from "../../constants/layout";

// actions
import { LayoutActionType } from "./actions";

// utils
import { getLayoutConfigs } from "../../utils";

const INIT_STATE = {
  twoColumnTheme: TwoColumnTheme.TWOCOLUMN_LIGHT,
  layoutMode: LayoutMode.LAYOUT_DEFAULT,
  sidenavUser: false,
  layoutType: LayoutTypes.LAYOUT_VERTICAL,
  layoutColor: LayoutColor.LAYOUT_COLOR_LIGHT,
  layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID,
  menuPosition: MenuPositions.MENU_POSITION_FIXED,
  leftSideBarTheme: SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT,
  leftSideBarType: SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT,
  showTwoToneIcons: false,
  showSidebarUserInfo: false,
  topbarTheme: TopbarTheme.TOPBAR_THEME_DARK,
  isOpenRightSideBar: false,
};

const Layout = (
  state: LayoutStateTypes = INIT_STATE,
  action: LayoutActionType<string | boolean | null>
) => {
  switch (action.type) {
    case LayoutActionTypes.CHANGE_TWOCOLUMN_THEME:
      return {
        ...state,
        twoColumnTheme: action.payload,
      };

    case LayoutActionTypes.CHANGE_LAYOUT:
      return {
        ...state,
        layoutType: action.payload,
      };

    case LayoutActionTypes.CHANGE_LAYOUT_MODE:
      return {
        ...state,
        layoutMode: action.payload,
      };

    case LayoutActionTypes.CHANGE_LAYOUT_COLOR:
      return {
        ...state,
        layoutColor: action.payload,
      };

    case LayoutActionTypes.CHANGE_LAYOUT_WIDTH:
      const layoutConfig = getLayoutConfigs(action.payload! && action.payload);
      return {
        ...state,
        layoutWidth: action.payload,
        ...layoutConfig,
      };

    case LayoutActionTypes.CHANGE_MENU_POSITIONS:
      return {
        ...state,
        menuPosition: action.payload,
      };

    case LayoutActionTypes.CHANGE_SIDEBAR_THEME:
      return {
        ...state,
        leftSideBarTheme: action.payload,
      };

    case LayoutActionTypes.CHANGE_SIDEBAR_TYPE:
      return {
        ...state,
        leftSideBarType: action.payload,
      };

    case LayoutActionTypes.TOGGLE_SIDEBAR_USER_INFO:
      return {
        ...state,
        showSidebarUserInfo: action.payload,
      };

    case LayoutActionTypes.CHANGE_TOPBAR_THEME:
      return {
        ...state,
        topbarTheme: action.payload,
      };

    case LayoutActionTypes.TOGGLE_TWO_TONE_ICONS:
      return {
        ...state,
        showTwoToneIcons: action.payload,
      };

    case LayoutActionTypes.SHOW_RIGHT_SIDEBAR:
      return {
        ...state,
        isOpenRightSideBar: true,
      };

    case LayoutActionTypes.HIDE_RIGHT_SIDEBAR:
      return {
        ...state,
        isOpenRightSideBar: false,
      };

    default:
      return state;
  }
};

export default Layout;
