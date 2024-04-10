import React from "react";
import { Form } from "react-bootstrap";
import * as layoutConstants from "../../constants/layout";

interface LeftSideBarTypeProps {
  changeLeftSiderbarType: (value: any) => void;
  leftSideBarType: string;
  layoutConstants: typeof layoutConstants.SideBarTypes;
}

const LeftSideBarType = ({
  changeLeftSiderbarType,
  leftSideBarType,
  layoutConstants,
}: LeftSideBarTypeProps) => {
  return (
    <>
      <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Left Sidebar Size</h6>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="leftsidebar-size"
          id="default-check"
          value={layoutConstants.LEFT_SIDEBAR_TYPE_DEFAULT}
          onChange={(e) => changeLeftSiderbarType(e.target.value)}
          checked={
            leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_DEFAULT
          }
        />
        <Form.Check.Label htmlFor="default-check">Default</Form.Check.Label>
      </Form.Check>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="leftsidebar-size"
          id="condensed-check"
          value={layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED}
          onChange={(e) => changeLeftSiderbarType(e.target.value)}
          checked={
            leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED
          }
        />
        <Form.Check.Label htmlFor="condensed-check">
          Condensed <small>(Extra Small size)</small>
        </Form.Check.Label>
      </Form.Check>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="leftsidebar-size"
          id="compact-check"
          value={layoutConstants.LEFT_SIDEBAR_TYPE_COMPACT}
          onChange={(e) => changeLeftSiderbarType(e.target.value)}
          checked={
            leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_COMPACT
          }
        />
        <Form.Check.Label htmlFor="compact-check">
          Compact <small>(Small size)</small>
        </Form.Check.Label>
      </Form.Check>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="leftsidebar-size"
          id="full-check"
          value={layoutConstants.LEFT_SIDEBAR_TYPE_FULL}
          onChange={(e) => changeLeftSiderbarType(e.target.value)}
          checked={leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_FULL}
        />
        <Form.Check.Label htmlFor="full-check">Full Layout</Form.Check.Label>
      </Form.Check>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="leftsidebar-size"
          id="fullscreen-check"
          value={layoutConstants.LEFT_SIDEBAR_TYPE_FULLSCREEN}
          onChange={(e) => changeLeftSiderbarType(e.target.value)}
          checked={
            leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_FULLSCREEN
          }
        />
        <Form.Check.Label htmlFor="fullscreen-check">
          Full Screen Layout
        </Form.Check.Label>
      </Form.Check>
    </>
  );
};

export default LeftSideBarType;
