import React from "react";
// import { Form } from 'react-bootstrap';
import * as layoutConstants from "../../constants/layout";

interface MenuPositionsProps {
  changeMenuPosition: (value: any) => void;
  menuPosition: string;
  layoutConstants: typeof layoutConstants.MenuPositions;
}

const MenuPositions = ({
  changeMenuPosition,
  menuPosition,
  layoutConstants,
}: MenuPositionsProps) => {
  return (
    <>
      {/* <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Menus (Leftsidebar and Topbar) Position</h6>

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    name="menus-position"
                    id="fixed-check"
                    value={layoutConstants.MENU_POSITION_FIXED}
                    onChange={(e) => changeMenuPosition(e.target.value)}
                    checked={menuPosition === layoutConstants.MENU_POSITION_FIXED}
                />
                <Form.Check.Label htmlFor="fixed-check">Fixed</Form.Check.Label>
            </Form.Check>

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    name="menus-position"
                    id="scrollable-check"
                    value={layoutConstants.MENU_POSITION_SCROLLABLE}
                    onChange={(e) => changeMenuPosition(e.target.value)}
                    checked={menuPosition === layoutConstants.MENU_POSITION_SCROLLABLE}
                />
                <Form.Check.Label htmlFor="scrollable-check">Scrollable</Form.Check.Label>
            </Form.Check> */}
    </>
  );
};

export default MenuPositions;
