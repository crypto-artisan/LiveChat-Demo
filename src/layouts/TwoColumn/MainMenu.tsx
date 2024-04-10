import React, { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

// constants
import { MenuItemTypes } from "../../constants/menu";
import { LayoutTypes } from "../../constants/layout";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// images
import logoSm from "../../assets/images/logo-sm.png";
import logoDark from "../../assets/images/logo-dark.png";
import logoDark2 from "../../assets/images/logo-dark-2.png";
import logoLight from "../../assets/images/logo-light.png";
import logoLight2 from "../../assets/images/logo-light-2.png";

interface SubMenus {
  item: MenuItemTypes;
  linkClassName?: string;
  subMenuClassNames?: string;
  activeMenuItems?: Array<string>;
  toggleMenu?: (item: any, status: boolean) => void;
  className?: string;
}

const MenuItemWithChildren = ({
  item,
  linkClassName,
  subMenuClassNames,
  activeMenuItems,
  toggleMenu,
}: SubMenus) => {
  const [open, setOpen] = useState<boolean>(
    activeMenuItems!.includes(item.key)
  );
  //
  useEffect(() => {
    setOpen(activeMenuItems!.includes(item.key));
    
  }, [activeMenuItems, item]);

  const toggleMenuItem = (e: any) => {
    e.preventDefault();
    const status = !open;
    setOpen(status);
    if (toggleMenu) toggleMenu(item, status);
    return false;
  };

  return (
    <>
      <li
        className={classNames("menu-item", "nav-link-ref", {
          "menuitem-active": open,
        })}
      >
        <Link
          to="#"
          onClick={toggleMenuItem}
          data-menu-key={item.key}
          aria-expanded={open}
          className={classNames("menu-link justify-content-between", linkClassName, {
            "menuitem-active": activeMenuItems!.includes(item.key)
              ? "active"
              : "",
          })}
        >
          <span className="menu-text"> {item.label} </span>
          {!item.badge ? (
            <span className="menu-arrow"></span>
          ) : (
            <span
              className={`badge bg-${item.badge.variant} rounded-pill float-end`}
            >
              {item.badge.text}
            </span>
          )}
        </Link>
        <Collapse in={open}>
          <div>
            <ul className={classNames(subMenuClassNames)}>
              {(item.children || []).map((child, i) => {
                return (
                  <React.Fragment key={i}>
                    {child.children ? (
                      <>
                        {/* parent */}
                        <MenuItemWithChildren
                          item={child}
                          linkClassName={
                            activeMenuItems!.includes(child.key) ? "active" : ""
                          }
                          activeMenuItems={activeMenuItems}
                          subMenuClassNames="sub-menu"
                          toggleMenu={toggleMenu}
                        />
                      </>
                    ) : (
                      <>
                        {/* child */}
                        <MenuItem
                          item={child}
                          className={
                            activeMenuItems!.includes(child.key)
                              ? "menuitem-active"
                              : ""
                          }
                          linkClassName={
                            activeMenuItems!.includes(child.key) ? "active" : ""
                          }
                        />
                      </>
                    )}
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </Collapse>
      </li>
    </>
  );
};

const MenuItem = ({ item, className, linkClassName }: SubMenus) => {
  return (
    <>
      <li className={classNames("menu-item", className)}>
        <MenuItemLink item={item} className={linkClassName} />
      </li>
    </>
  );
};

const MenuItemLink = ({ item, className }: SubMenus) => {
  return (
    <Link
      to={item.url!}
      target={item.target}
      className={classNames("menu-link nav-link-ref justify-content-between", className)}
      data-menu-key={item.key}
    >
      <span className="menu-text"> {item.label} </span>
      {item.badge && (
        <span className={`badge bg-${item.badge.variant} float-end`}>
          {item.badge.text}
        </span>
      )}
    </Link>
  );
};

interface MainMenuProps {
  menuItems: MenuItemTypes[];
  toggleMenu: (item: MenuItemTypes, show: boolean) => void;
  activeMenuItems: string[];
}

const MainMenu = ({
  menuItems,
  toggleMenu,
  activeMenuItems,
}: MainMenuProps) => {
  //

  const { layoutType } = useSelector((state: RootState) => ({
    layoutType: state.Layout.layoutType,
    leftSideBarType: state.Layout.leftSideBarType,
  }));

  return (
    <>
      {activeMenuItems && (
        <div className="app-menu">
          <div className="logo-box">
            <Link to="/" className="logo logo-dark text-center">
              <span className="logo-sm">
                <img src={logoSm} alt="" height="22" />
              </span>
              <span className="logo-lg">
                <img
                  src={
                    layoutType === LayoutTypes.LAYOUT_TWO_COLUMN
                      ? logoDark2
                      : logoDark
                  }
                  alt=""
                  height="20"
                />
              </span>
            </Link>
            <Link to="/" className="logo logo-light text-center">
              <span className="logo-sm">
                <img src={logoSm} alt="" height="22" />
              </span>
              <span className="logo-lg">
                <img
                  src={
                    layoutType === LayoutTypes.LAYOUT_TWO_COLUMN
                      ? logoLight2
                      : logoLight
                  }
                  alt=""
                  height="20"
                />
              </span>
            </Link>
          </div>

          <div id="two-col-menu" className="h-100 menuitem-active">
            <SimpleBar style={{ maxHeight: "100%" }}>
              {(menuItems || []).map((menuItem, key) => {
                const activeParent =
                  activeMenuItems &&
                  activeMenuItems.length &&
                  activeMenuItems[activeMenuItems.length - 1] ===
                  menuItem["key"];
                return (
                  <div
                    key={key}
                    className={classNames("twocolumn-menu-item", {
                      "d-block": activeParent,
                    })}
                    id={menuItem.key}
                  >
                    {/* <div className="title-box"> */}
                    <ul className="menu">
                      {menuItem.isTitle && (
                        <li className="menu-title">{menuItem.label}</li>
                      )}
                      {(menuItem.children || []).map((item, idx) => {
                        return (
                          <React.Fragment key={idx}>
                            {item.children ? (
                              <MenuItemWithChildren
                                item={item}
                                toggleMenu={toggleMenu}
                                subMenuClassNames="sub-menu"
                                activeMenuItems={activeMenuItems}
                                linkClassName=""
                              />
                            ) : (
                              <MenuItem
                                item={item}
                                linkClassName=""
                                className={
                                  activeMenuItems!.includes(item.key)
                                    ? "menuitem-active"
                                    : ""
                                }
                              />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </ul>
                    {/* </div> */}
                  </div>
                );
              })}
            </SimpleBar>
          </div>
        </div>
      )}
    </>
  );
};

export default MainMenu;
