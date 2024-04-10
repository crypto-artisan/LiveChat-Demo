import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import LaddaButton, {
  EXPAND_LEFT,
  EXPAND_RIGHT,
  EXPAND_UP,
  EXPAND_DOWN,
  CONTRACT,
  CONTRACT_OVERLAY,
  ZOOM_OUT,
  ZOOM_IN,
  SLIDE_LEFT,
  SLIDE_RIGHT,
  SLIDE_UP,
  SLIDE_DOWN,
} from "react-ladda-button";

// styles
import "react-ladda-button/dist/ladda-themeless.min.css";

// components
import PageTitle from "../../components/PageTitle";

const withLoadingHook =
  <P extends object>(Component: React.ComponentType<P>): any =>
  ({ ...props }: any) => {
    const [loading, setLoading] = useState<boolean>(false);
    return (
      <Component
        {...(props as P)}
        loading={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        }}
      />
    );
  };

const withProgressHook =
  <P extends object>(Component: React.ComponentType<P>): any =>
  ({ ...props }: any) => {
    const [progress, setProgress] = useState<number | null>(null);
    return (
      <Component
        {...(props as P)}
        loading={!!progress}
        progress={progress}
        onClick={() => {
          setProgress(0.01);
          const inc = () => {
            setTimeout(() => {
              let nv = 0;
              setProgress((p: any) => {
                nv = p + 0.05;
                return nv;
              });
              if (nv < 1) inc();
              else
                setTimeout(() => {
                  setProgress(null);
                }, 75);
            }, Math.random() * (500 - 100) + 100);
          };
          inc();
        }}
      />
    );
  };

const ExLoadingLaddaButton = withLoadingHook(LaddaButton);
const ExProgressLaddaButton = withProgressHook(LaddaButton);

const LoadingButtons = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Extended UI", path: "/extended-ui/loading-buttons" },
          {
            label: "Loading Buttons",
            path: "/extended-ui/loading-buttons",
            active: true,
          },
        ]}
        title={"Loading Buttons"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Examples</h4>
              <p className="sub-header">
                Buttons with built-in loading indicators.
              </p>

              <Row className="text-center">
                {(
                  [EXPAND_LEFT, EXPAND_RIGHT, EXPAND_UP, EXPAND_DOWN] as const
                ).map((sv) => (
                  <Col key={sv} sm={6} xl={3}>
                    <div className="p-3">
                      <h5 className="text-muted">{sv}</h5>
                      <ExLoadingLaddaButton
                        data-style={sv}
                        className="btn btn-primary"
                        dir="ltr"
                      >
                        Submit
                      </ExLoadingLaddaButton>
                    </div>
                  </Col>
                ))}
              </Row>
              <Row className="text-center">
                {([CONTRACT, CONTRACT_OVERLAY, ZOOM_IN, ZOOM_OUT] as const).map(
                  (sv) => (
                    <Col key={sv} sm={6} xl={3}>
                      <div className="p-3">
                        <h5 className="text-muted">{sv}</h5>
                        <ExLoadingLaddaButton
                          data-style={sv}
                          className="btn btn-warning"
                          dir="ltr"
                        >
                          Submit
                        </ExLoadingLaddaButton>
                      </div>
                    </Col>
                  )
                )}
              </Row>

              <Row className="text-center">
                {([SLIDE_LEFT, SLIDE_RIGHT, SLIDE_UP, SLIDE_DOWN] as const).map(
                  (sv) => (
                    <Col key={sv} sm={6} xl={3}>
                      <div className="p-3">
                        <h5 className="text-muted">{sv}</h5>
                        <ExLoadingLaddaButton
                          data-style={sv}
                          className="btn btn-info"
                          dir="ltr"
                        >
                          Submit
                        </ExLoadingLaddaButton>
                      </div>
                    </Col>
                  )
                )}
              </Row>

              <Row className="text-center">
                {([EXPAND_RIGHT, CONTRACT] as const).map((sv) => (
                  <Col key={sv} sm={6} xl={3}>
                    <div className="p-3">
                      <h5 className="text-muted">{sv}</h5>
                      <ExProgressLaddaButton
                        data-style={sv}
                        className="btn btn-danger"
                        dir="ltr"
                      >
                        Submit
                      </ExProgressLaddaButton>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default LoadingButtons;
