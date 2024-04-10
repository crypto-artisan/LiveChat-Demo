import React from "react";
import { Form } from "react-bootstrap";

interface TwoToneIconsProps {
  toggleTwoToneIconsMode: (value: any) => void;
  showTwoToneIcons: boolean;
}

const TwoToneIcons = ({
  toggleTwoToneIconsMode,
  showTwoToneIcons,
}: TwoToneIconsProps) => {
  return (
    <>
      <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Two Tone Icons</h6>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="checkbox"
          name="leftsidebar-user"
          id="sidebaruser-check"
          onChange={(e) => toggleTwoToneIconsMode(e.target.checked)}
          checked={showTwoToneIcons}
        />
        <Form.Check.Label htmlFor="sidebaruser-check">Enable</Form.Check.Label>
      </Form.Check>
    </>
  );
};

export default TwoToneIcons;
