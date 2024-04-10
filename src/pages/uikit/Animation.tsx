import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

// styles
import "animate.css/animate.min.css";
import "animate.css/animate.compat.css";

// components
import PageTitle from "../../components/PageTitle";

import macbook from "../../assets/images/macbook.png";

const Animation = () => {
  const [animationType, setAnimationType] = useState<string>("bounce");

  const testAnim = (x: string) => {
    const animationBox = document.getElementById("animationSandbox");

    animationBox?.classList.add("animate__" + x, "animate__animated");
    animationBox?.addEventListener("animationend", () => {
      animationBox?.classList.remove("animate__" + x, "animate__animated");
    });
  };

  const triggerAnimation = (value: string) => {
    setAnimationType(value);
    testAnim(value);
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Extended UI", path: "/extended-ui/animation" },
          { label: "Animation", path: "/extended-ui/animation", active: true },
        ]}
        title={"Animation"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">CSS3 Animation</h4>

              <p className="sub-header">Just-add-water CSS animations.</p>

              <div className="text-center">
                <div id="animationSandbox">
                  <img
                    src={macbook}
                    alt=""
                    className="img-fluid center-block"
                  />
                </div>
              </div>

              <form className="mt-5">
                <div className="row justify-content-center">
                  <div className="col-sm-8">
                    <div className="input-group">
                      <select
                        id="js--animations"
                        className="form-select js--animations"
                        onChange={(e) => triggerAnimation(e.target.value)}
                      >
                        <optgroup label="Attention Seekers">
                          <option value="bounce">bounce</option>
                          <option value="flash">flash</option>
                          <option value="flash">pulse</option>
                          <option value="rubberBand">rubberBand</option>
                          <option value="shakeX">shakeX</option>
                          <option value="shakeY">shakeY</option>
                          <option value="headShake">headShake</option>
                          <option value="swing">swing</option>
                          <option value="tada">tada</option>
                          <option value="wobble">wobble</option>
                          <option value="jello">jello</option>
                          <option value="heartBeat">heartBeat</option>
                        </optgroup>

                        <optgroup label="Back entrances">
                          <option value="backInDown">backInDown</option>
                          <option value="backInLeft">backInLeft</option>
                          <option value="backInRight">backInRight</option>
                          <option value="backInUp">backInUp</option>
                        </optgroup>

                        <optgroup label="Back exits">
                          <option value="backOutDown">backOutDown</option>
                          <option value="backOutLeft">backOutLeft</option>
                          <option value="backOutRight">backOutRight</option>
                          <option value="backOutUp">backOutUp</option>
                        </optgroup>

                        <optgroup label="Bouncing entrances">
                          <option value="bounceIn">bounceIn</option>
                          <option value="bounceInDown">bounceInDown</option>
                          <option value="bounceInLeft">bounceInLeft</option>
                          <option value="bounceInRight">bounceInRight</option>
                          <option value="bounceInUp">bounceInUp</option>
                        </optgroup>

                        <optgroup label="Bouncing exits">
                          <option value="bounceOut">bounceOut</option>
                          <option value="bounceOutDown">bounceOutDown</option>
                          <option value="bounceOutLeft">bounceOutLeft</option>
                          <option value="bounceOutRight">bounceOutRight</option>
                          <option value="bounceOutUp">bounceOutUp</option>
                        </optgroup>

                        <optgroup label="Fading Entrances">
                          <option value="fadeIn">fadeIn</option>
                          <option value="fadeInDown">fadeInDown</option>
                          <option value="fadeInDownBig">fadeInDownBig</option>
                          <option value="fadeInLeft">fadeInLeft</option>
                          <option value="fadeInLeftBig">fadeInLeftBig</option>
                          <option value="fadeInRight">fadeInRight</option>
                          <option value="fadeInRightBig">fadeInRightBig</option>
                          <option value="fadeInUp">fadeInUp</option>
                          <option value="fadeInUpBig">fadeInUpBig</option>
                          <option value="fadeInTopLeft">fadeInTopLeft</option>
                          <option value="fadeInTopRight">fadeInTopRight</option>
                          <option value="fadeInBottomLeft">
                            fadeInBottomLeft
                          </option>
                          <option value="fadeInBottomRight">
                            fadeInBottomRight
                          </option>
                        </optgroup>

                        <optgroup label="Fading Exits">
                          <option value="fadeOut">fadeOut</option>
                          <option value="fadeOutDown">fadeOutDown</option>
                          <option value="fadeOutDownBig">fadeOutDownBig</option>
                          <option value="fadeOutLeft">fadeOutLeft</option>
                          <option value="fadeOutLeftBig">fadeOutLeftBig</option>
                          <option value="fadeOutRight">fadeOutRight</option>
                          <option value="fadeOutRightBig">
                            fadeOutRightBig
                          </option>
                          <option value="fadeOutUp">fadeOutUp</option>
                          <option value="fadeOutUpBig">fadeOutUpBig</option>
                          <option value="fadeOutTopLeft">fadeOutTopLeft</option>
                          <option value="fadeOutTopRight">
                            fadeOutTopRight
                          </option>
                          <option value="fadeOutBottomRight">
                            fadeOutBottomRight
                          </option>
                          <option value="fadeOutBottomLeft">
                            fadeOutBottomLeft
                          </option>
                        </optgroup>

                        <optgroup label="Flippers">
                          <option value="flip">flip</option>
                          <option value="flipInX">flipInX</option>
                          <option value="flipInY">flipInY</option>
                          <option value="flipOutX">flipOutX</option>
                          <option value="flipOutY">flipOutY</option>
                        </optgroup>

                        <optgroup label="Lightspeed">
                          <option value="lightSpeedInRight">
                            lightSpeedInRight
                          </option>
                          <option value="lightSpeedInLeft">
                            lightSpeedInLeft
                          </option>
                          <option value="lightSpeedOutRight">
                            lightSpeedOutRight
                          </option>
                          <option value="lightSpeedOutLeft">
                            lightSpeedOutLeft
                          </option>
                        </optgroup>

                        <optgroup label="Rotating Entrances">
                          <option value="rotateIn">rotateIn</option>
                          <option value="rotateInDownLeft">
                            rotateInDownLeft
                          </option>
                          <option value="rotateInDownRight">
                            rotateInDownRight
                          </option>
                          <option value="rotateInUpLeft">rotateInUpLeft</option>
                          <option value="rotateInUpRight">
                            rotateInUpRight
                          </option>
                        </optgroup>

                        <optgroup label="Rotating Exits">
                          <option value="rotateOut">rotateOut</option>
                          <option value="rotateOutDownLeft">
                            rotateOutDownLeft
                          </option>
                          <option value="rotateOutDownRight">
                            rotateOutDownRight
                          </option>
                          <option value="rotateOutUpLeft">
                            rotateOutUpLeft
                          </option>
                          <option value="rotateOutUpRight">
                            rotateOutUpRight
                          </option>
                        </optgroup>

                        <optgroup label="Specials">
                          <option value="hinge">hinge</option>
                          <option value="jackInTheBox">jackInTheBox</option>
                          <option value="rollIn">rollIn</option>
                          <option value="rollOut">rollOut</option>
                        </optgroup>

                        <optgroup label="Sliding Entrances">
                          <option value="slideInDown">slideInDown</option>
                          <option value="slideInLeft">slideInLeft</option>
                          <option value="slideInRight">slideInRight</option>
                          <option value="slideInUp">slideInUp</option>
                        </optgroup>

                        <optgroup label="Sliding exits">
                          <option value="slideOutDown">slideOutUp</option>
                          <option value="slideOutLeft">slideOutDown</option>
                          <option value="slideOutRight">slideOutLeft</option>
                          <option value="slideOutUp">slideOutRight</option>
                        </optgroup>

                        <optgroup label="Zooming entrances">
                          <option value="zoomIn">zoomIn</option>
                          <option value="zoomInDown">zoomInDown</option>
                          <option value="zoomInLeft">zoomInLeft</option>
                          <option value="zoomInRight">zoomInRight</option>
                          <option value="zoomInUp">zoomInUp</option>
                        </optgroup>

                        <optgroup label="Zooming exits">
                          <option value="zoomOut">zoomOut</option>
                          <option value="zoomOutDown">zoomOutDown</option>
                          <option value="zoomOutLeft">zoomOutLeft</option>
                          <option value="zoomOutRight">zoomOutRight</option>
                          <option value="zoomOutUp">zoomOutUp</option>
                        </optgroup>
                      </select>
                      <button
                        className="btn input-group-text btn-primary waves-light waves-effect js--triggerAnimation"
                        type="button"
                        onClick={() => triggerAnimation(animationType)}
                      >
                        Animate Me !
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Animation;
