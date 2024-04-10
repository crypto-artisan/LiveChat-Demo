import React from "react";
import { Form } from "react-bootstrap";
import * as layoutConstants from "../../constants/layout";

interface LayoutColorProps {
  changeLayoutColorScheme: (value: any) => void;
  layoutColor: string;
  layoutConstants: typeof layoutConstants.LayoutColor;
}

const LayoutColor = ({
  changeLayoutColorScheme,
  layoutColor,
  layoutConstants,
}: LayoutColorProps) => {
  return (
    <>
      <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Color Scheme</h6>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="layout-color"
          id="light-mode-check"
          value={layoutConstants.LAYOUT_COLOR_LIGHT}
          onChange={(e) => changeLayoutColorScheme(e.target.value)}
          checked={layoutColor === layoutConstants.LAYOUT_COLOR_LIGHT}
        />
        <Form.Check.Label htmlFor="light-mode-check">
          Light Mode
        </Form.Check.Label>
      </Form.Check>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="layout-color"
          id="dark-mode-check"
          value={layoutConstants.LAYOUT_COLOR_DARK}
          onChange={(e) => changeLayoutColorScheme(e.target.value)}
          checked={layoutColor === layoutConstants.LAYOUT_COLOR_DARK}
        />
        <Form.Check.Label htmlFor="dark-mode-check">Dark Mode</Form.Check.Label>
      </Form.Check>
    </>
  );
};

export default LayoutColor;
