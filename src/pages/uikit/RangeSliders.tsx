import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

// components
import PageTitle from "../../components/PageTitle";

interface SelectedValsType {
  [key: number]: { textValue: number; percent: number };
}

interface SelectedRangesType {
  [key: number]: string;
}

// RangeSliders
const RangeSliders = () => {
  const [selectedVals, setSelectedVals] = useState<SelectedValsType>({
    1: { textValue: 20, percent: 20 },
    2: { textValue: 20, percent: 20 },
  });
  const [selectedRanges, setSelectedRanges] = useState<SelectedRangesType>({
    1: "20-45",
    2: "20-45",
  });

  const onSlide = (index: number, value: any[], percent: any) => {
    let selectedValues = { ...selectedVals };
    selectedValues[index] = {
      textValue: value[0].toFixed(2),
      percent: percent[0].toFixed(2),
    };
    setSelectedVals(selectedValues);
  };

  const onSlide2 = (index: number, value: any[]) => {
    let selectedRange = { ...selectedRanges };
    selectedRange[index] = value[0].toFixed(2) + "-" + value[1].toFixed(2);
    setSelectedRanges(selectedRange);
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Extended UI", path: "/extended-ui/rangesliders" },
          {
            label: "Range Slider",
            path: "/extended-ui/rangesliders",
            active: true,
          },
        ]}
        title={"Range Slider"}
      />

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Single</h4>
              <p className="text-muted font-14">Slider with single selecrtor</p>

              <Nouislider
                range={{ min: 0, max: 100 }}
                start={[20]}
                connect
                onSlide={(render, handle, value, un, percent) =>
                  onSlide(1, value, percent)
                }
              />
              <p className="mt-2 mb-0">
                Value:{" "}
                {selectedVals ? (
                  <span>
                    {selectedVals[1]["textValue"]}, &nbsp;
                    {selectedVals[1]["percent"]}%
                  </span>
                ) : null}
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Range</h4>
              <p className="text-muted font-14">Slider with range selecrtor</p>

              <Nouislider
                range={{ min: 10, max: 150 }}
                start={[20, 45]}
                connect
                onSlide={(render, handle, value, un, percent) =>
                  onSlide2(1, value)
                }
              />
              <p className="mt-2 mb-0">
                Value:{" "}
                {selectedRanges ? <span>{selectedRanges[1]}</span> : null}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Slider Step</h4>
              <p className="text-muted font-14">Slider with step value</p>

              <Nouislider
                range={{ min: 0, max: 100 }}
                start={[20]}
                step={10}
                connect
                onSlide={(render, handle, value, un, percent) =>
                  onSlide(2, value, percent)
                }
              />
              <p className="mt-2 mb-0">
                Value:{" "}
                {selectedVals ? (
                  <span>
                    {selectedVals[2]["textValue"]}, &nbsp;
                    {selectedVals[2]["percent"]}%
                  </span>
                ) : null}
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Range Slider with Steps</h4>
              <p className="text-muted font-14">
                Slider with range selecrtor with fixed step value
              </p>

              <Nouislider
                range={{ min: 10, max: 150 }}
                start={[20, 45]}
                step={15}
                connect
                onSlide={(render, handle, value, un, percent) =>
                  onSlide2(2, value)
                }
              />
              <p className="mt-2 mb-0">
                Value:{" "}
                {selectedRanges ? <span>{selectedRanges[2]}</span> : null}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default RangeSliders;
