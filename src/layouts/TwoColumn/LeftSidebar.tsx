import React, { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// actions
import { changeSidebarType } from "../../redux/actions";

//constants
import { SideBarTypes } from "../../constants/layout";

// store
import { RootState, AppDispatch } from "../../redux/store";

import {
  findAllParent,
  findMenuItem,
  getTwoColumnMenuItems,
} from "../../helpers/menu";

// components
import IconMenu from "./IconMenu";
import MainMenu from "./MainMenu";

interface Item {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: string;
  url?: string;
  badge?: {
    variant: string;
    text: string;
  };
  parentKey?: string;
  target?: string;
  children?: Item[];
}

const LeftSidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const menuItems = getTwoColumnMenuItems();

  const [activeMenuItems, setActiveMenuItems] = useState<Array<string>>([]);

  const {
    leftSideBarType,
  } = useSelector((state: RootState) => ({
    leftSideBarType: state.Layout.leftSideBarType,
  }));

  /*
   * toggle the menus
   */
  const toggleMenu = (menuItem: Item, show: boolean) => {
    if (menuItem.children) {
      if (leftSideBarType === "condensed")
        dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT));
    }

    if (show)
      setActiveMenuItems([
        menuItem["key"],
        ...findAllParent(menuItems, menuItem),
      ]);
  };

  /**
   * activate the menuitems
   */

  const activeMenu = useCallback(() => {
    const div = document.getElementById("sidebar-content");
    let matchingMenuItem = null;
    if (div) {
      let items: any = div.getElementsByClassName("nav-link-ref");
      for (let i = 0; i < items.length; ++i) {
        let trimmedURL = location?.pathname?.replaceAll(process.env.PUBLIC_URL, "");
        // console.log(trimmedURL);
        // console.log("pathname", items[i]?.pathname?.replaceAll("/ubold_r/default",""));
        // debugger
        if (trimmedURL === items[i]?.pathname?.replaceAll(process.env.PUBLIC_URL, "")) {
          matchingMenuItem = items[i];
          break;
        }
      }

      if (matchingMenuItem) {
        const mid = matchingMenuItem.getAttribute("data-menu-key");
        const activeMt = findMenuItem(menuItems, mid);
        if (activeMt) {
          setActiveMenuItems([
            activeMt["key"],
            ...findAllParent(menuItems, activeMt),
          ]);
        }
      }
    }
  }, [location, menuItems]);

  useEffect(() => {
    activeMenu();
  }, [activeMenu]);

  useEffect(() => {
    if (
      activeMenuItems &&
      activeMenuItems.length &&
      activeMenuItems.length === 1
    ) {
      const parentLevel0 = findMenuItem(menuItems, activeMenuItems[0]);
      const hasChildren =
        parentLevel0 &&
        parentLevel0["children"] &&
        parentLevel0["children"].length;

      if (
        !hasChildren &&
        (leftSideBarType === "default" || leftSideBarType === "compact")
      ) {
        dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED));
      } else {
        dispatch(changeSidebarType(leftSideBarType));
      }
    }
  }, [activeMenuItems, leftSideBarType, dispatch, menuItems]);

  return (
    <>
      <div className="left-side-menu show" id="sidebar-content">
        <IconMenu
          menuItems={getTwoColumnMenuItems()}
          toggleMenu={toggleMenu}
          activeMenuItems={activeMenuItems}
        />

        <MainMenu
          menuItems={menuItems}
          activeMenuItems={activeMenuItems}
          toggleMenu={toggleMenu}
        />
        <div className="clearfix" />
      </div>
    </>
  );
};

export default LeftSidebar;
