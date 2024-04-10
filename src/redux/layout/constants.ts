// constants
import {
  LayoutMode,
  LayoutTypes,
  LayoutColor,
  LayoutWidth,
  MenuPositions,
  SideBarTheme,
  SideBarTypes,
  TopbarTheme,
  TwoColumnTheme,
} from "../../constants/layout";

enum LayoutActionTypes {
  CHANGE_TWOCOLUMN_THEME = "@@layout/CHANGE_TWOCOLUMN_THEME",
  CHANGE_LAYOUT_MODE = "@@layout/CHANGE_LAYOUT_MODE",
  CHANGE_LAYOUT = "@@layout/CHANGE_LAYOUT",
  CHANGE_LAYOUT_COLOR = "@@layout/CHANGE_LAYOUT_COLOR",
  CHANGE_LAYOUT_WIDTH = "@@layout/CHANGE_LAYOUT_WIDTH",
  CHANGE_MENU_POSITIONS = "@@layout/CHANGE_MENU_POSITIONS",
  CHANGE_SIDEBAR_THEME = "@@layout/CHANGE_SIDEBAR_THEME",
  CHANGE_SIDEBAR_TYPE = "@@layout/CHANGE_SIDEBAR_TYPE",
  TOGGLE_SIDEBAR_USER_INFO = "@@layout/TOGGLE_SIDEBAR_USER_INFO",
  TOGGLE_TWO_TONE_ICONS = "@@layout/TOGGLE_TWO_TONE_ICONS",
  CHANGE_TOPBAR_THEME = "@@layout/CHANGE_TOPBAR_THEME",

  SHOW_RIGHT_SIDEBAR = "@@layout/SHOW_RIGHT_SIDEBAR",
  HIDE_RIGHT_SIDEBAR = "@@layout/HIDE_RIGHT_SIDEBAR",
}

export interface LayoutStateTypes {
  twoColumnTheme:
    | TwoColumnTheme.TWOCOLUMN_LIGHT
    | TwoColumnTheme.TWOCOLUMN_DARK
    | TwoColumnTheme.TWOCOLUMN_BRAND
    | TwoColumnTheme.TWOCOLUMN_GRADIENT;
  layoutMode: LayoutMode.LAYOUT_DEFAULT | LayoutMode.LAYOUT_DETACHED;
  layoutType:
    | LayoutTypes.LAYOUT_VERTICAL
    | LayoutTypes.LAYOUT_TWO_COLUMN
    | LayoutTypes.LAYOUT_DETACHED
    | LayoutTypes.LAYOUT_HORIZONTAL;
  layoutColor: LayoutColor.LAYOUT_COLOR_LIGHT | LayoutColor.LAYOUT_COLOR_DARK;
  layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID | LayoutWidth.LAYOUT_WIDTH_BOXED;
  menuPosition:
    | MenuPositions.MENU_POSITION_FIXED
    | MenuPositions.MENU_POSITION_SCROLLABLE;
  leftSideBarTheme:
    | SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT
    | SideBarTheme.LEFT_SIDEBAR_THEME_DARK
    | SideBarTheme.LEFT_SIDEBAR_THEME_BRAND
    | SideBarTheme.LEFT_SIDEBAR_THEME_GRADIENT;
  leftSideBarType:
    | SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT
    | SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED
    | SideBarTypes.LEFT_SIDEBAR_TYPE_COMPACT
    | SideBarTypes.LEFT_SIDEBAR_TYPE_FULL
    | SideBarTypes.LEFT_SIDEBAR_TYPE_FULLSCREEN;
  showTwoToneIcons: boolean;
  showSidebarUserInfo: boolean;
  topbarTheme: TopbarTheme.TOPBAR_THEME_LIGHT | TopbarTheme.TOPBAR_THEME_DARK | TopbarTheme.TOPBAR_THEME_BRAND;
  isOpenRightSideBar: boolean;
}

export { LayoutActionTypes };
