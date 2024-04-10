import { Form } from "react-bootstrap";
import * as layoutConstants from "../../constants/layout";

interface TwoColumnThemeProps {
  changeTwoColumnTheme: (value: any) => void;
  twoColumnTheme: string;
  layoutConstants: typeof layoutConstants.TwoColumnTheme;
}

const TwoColumnTheme = ({
  changeTwoColumnTheme,
  twoColumnTheme,
  layoutConstants,
}: TwoColumnThemeProps) => {
  return (
    <>
      <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Menu Icon Color</h6>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="twocolumn-theme"
          id="twocolumn-light-check"
          value={layoutConstants.TWOCOLUMN_LIGHT}
          onChange={(e) => changeTwoColumnTheme(e.target.value)}
          checked={twoColumnTheme === layoutConstants.TWOCOLUMN_LIGHT}
        />
        <Form.Check.Label htmlFor="twocolumn-light-check">
          Light
        </Form.Check.Label>
      </Form.Check>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="twocolumn-theme"
          id="twocolumn-dark-check"
          value={layoutConstants.TWOCOLUMN_DARK}
          onChange={(e) => changeTwoColumnTheme(e.target.value)}
          checked={twoColumnTheme === layoutConstants.TWOCOLUMN_DARK}
        />
        <Form.Check.Label htmlFor="twocolumn-dark-check">Dark</Form.Check.Label>
      </Form.Check>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="twocolumn-theme"
          id="twocolumn-brand-check"
          value={layoutConstants.TWOCOLUMN_BRAND}
          onChange={(e) => changeTwoColumnTheme(e.target.value)}
          checked={twoColumnTheme === layoutConstants.TWOCOLUMN_BRAND}
        />
        <Form.Check.Label htmlFor="twocolumn-brand-check">
          Brand
        </Form.Check.Label>
      </Form.Check>

      <Form.Check className="form-check form-switch mb-1">
        <Form.Check.Input
          type="radio"
          name="twocolumn-theme"
          id="twocolumn-gradient-check"
          value={layoutConstants.TWOCOLUMN_GRADIENT}
          onChange={(e) => changeTwoColumnTheme(e.target.value)}
          checked={twoColumnTheme === layoutConstants.TWOCOLUMN_GRADIENT}
        />
        <Form.Check.Label htmlFor="twocolumn-gradient-check">
          Gradient
        </Form.Check.Label>
      </Form.Check>
    </>
  );
};

export default TwoColumnTheme;
