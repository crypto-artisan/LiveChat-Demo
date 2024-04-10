import { Form } from "react-bootstrap";
import * as layoutConstants from "../../constants/layout";

interface LayoutTypesProps {
  changeLayoutMode: (value: any) => void;
  layoutMode: string;
  layoutConstants: typeof layoutConstants.LayoutMode;
}

const LayoutMode = ({
  changeLayoutMode,
  layoutMode,
  layoutConstants,
}: LayoutTypesProps) => {
  return (
    <>
      <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Layout Mode</h6>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          onChange={(e) => changeLayoutMode(e.target.value)}
          name="layout-mode"
          value={layoutConstants.LAYOUT_DEFAULT}
          id="default-layout-mode"
          checked={layoutMode === layoutConstants.LAYOUT_DEFAULT}
        />
        <Form.Check.Label htmlFor="default-layout-mode">
          Default Layout
        </Form.Check.Label>
      </Form.Check>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          onChange={(e) => changeLayoutMode(e.target.value)}
          name="layout-mode"
          value={layoutConstants.LAYOUT_DETACHED}
          id="detached-layout-mode"
          checked={layoutMode === layoutConstants.LAYOUT_DETACHED}
        />
        <Form.Check.Label htmlFor="detached-layout-mode">
          Detached Layout
        </Form.Check.Label>
      </Form.Check>
    </>
  );
};

export default LayoutMode;
