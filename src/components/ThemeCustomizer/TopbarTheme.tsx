import React from "react";
import { Form } from "react-bootstrap";
import * as layoutConstants from "../../constants/layout";

interface TopbarThemeProps {
  changeTopBarTheme: (value: any) => void;
  topbarTheme: string;
  layoutConstants: typeof layoutConstants.TopbarTheme;
}

const TopbarTheme = ({
  changeTopBarTheme,
  topbarTheme,
  layoutConstants,
}: TopbarThemeProps) => {
  return (
    <>
      <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Topbar</h6>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="topbar-color"
          id="lighttopbar-check"
          value={layoutConstants.TOPBAR_THEME_LIGHT}
          onChange={(e) => changeTopBarTheme(e.target.value)}
          checked={topbarTheme === layoutConstants.TOPBAR_THEME_LIGHT}
        />
        <Form.Check.Label htmlFor="lighttopbar-check">Light</Form.Check.Label>
      </Form.Check>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="topbar-color"
          id="darktopbar-check"
          value={layoutConstants.TOPBAR_THEME_DARK}
          onChange={(e) => changeTopBarTheme(e.target.value)}
          checked={topbarTheme === layoutConstants.TOPBAR_THEME_DARK}
        />
        <Form.Check.Label htmlFor="darktopbar-check">Dark</Form.Check.Label>
      </Form.Check>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="topbar-color"
          id="brandtopbar-check"
          value={layoutConstants.TOPBAR_THEME_BRAND}
          onChange={(e) => changeTopBarTheme(e.target.value)}
          checked={topbarTheme === layoutConstants.TOPBAR_THEME_BRAND}
        />
        <Form.Check.Label htmlFor="brandtopbar-check">Brand</Form.Check.Label>
      </Form.Check>
    </>
  );
};

export default TopbarTheme;
