import React from "react";
import { Form } from "react-bootstrap";
import * as layoutConstants from "../../constants/layout";

interface LayoutWidthProps {
  changeWidthMode: (value: any) => void;
  layoutWidth: string;
  layoutConstants: typeof layoutConstants.LayoutWidth;
}

const LayoutWidth = ({
  changeWidthMode,
  layoutWidth,
  layoutConstants,
}: LayoutWidthProps) => {
  return (
    <>
      <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Width</h6>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="width"
          id="fluid-check"
          value={layoutConstants.LAYOUT_WIDTH_FLUID}
          onChange={(e) => changeWidthMode(e.target.value)}
          checked={layoutWidth === layoutConstants.LAYOUT_WIDTH_FLUID}
        />
        <Form.Check.Label htmlFor="fluid-check">Fluid</Form.Check.Label>
      </Form.Check>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="width"
          id="boxed-check"
          value={layoutConstants.LAYOUT_WIDTH_BOXED}
          onChange={(e) => changeWidthMode(e.target.value)}
          checked={layoutWidth === layoutConstants.LAYOUT_WIDTH_BOXED}
        />
        <Form.Check.Label htmlFor="boxed-check">Boxed</Form.Check.Label>
      </Form.Check>
    </>
  );
};

export default LayoutWidth;
