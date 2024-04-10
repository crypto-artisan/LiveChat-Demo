import React from "react";
import { Row, Col } from "react-bootstrap";

// components
// import PricingCard, { PlanItemsTypes } from "../../components/PricingCard";



import BGShape from '../../assets/images/landing/bg-shape.png'
import classNames from "classnames";

export interface PlanItemsTypes {
  id: number;
  name: string;
  icon: string;
  price: number;
  duration: string;
  features: Array<any>;
  isRecommended: boolean;
}

const plans: PlanItemsTypes[] = [
  {
    id: 1,
    name: "Single Application",
    icon: "fe-user",
    price: 49,
    duration: "license",
    features: [
      { icon: "mdi mdi-album", feature: "Number of end products 1" },
      { icon: "mdi mdi-lifebuoy", feature: "Customer support", },
      { icon: "mdi mdi-update", feature: "Free Updates", },
      { icon: "mdi mdi-earth", feature: "1 Domain", },
      { icon: "mdi mdi-history", feature: "Email Support", },
      { icon: "mdi mdi-alarm-check", feature: "24x7 Support", }
    ],
    isRecommended: false,
  },
  {
    id: 2,
    name: "Multiple Application",
    icon: "fe-award",
    price: 149,
    duration: "license",
    features: [
      { icon: "mdi mdi-album", feature: "Number of end products 5" },
      { icon: "mdi mdi-lifebuoy", feature: "Customer support", },
      { icon: "mdi mdi-update", feature: "Free Updates", },
      { icon: "mdi mdi-earth", feature: "1 Domain", },
      { icon: "mdi mdi-history", feature: "Email Support", },
      { icon: "mdi mdi-alarm-check", feature: "24x7 Support", }
    ],
    isRecommended: true,
  },
  {
    id: 3,
    name: "Extended",
    icon: "fe-aperture",
    price: 999,
    duration: "license",
    features: [
      { icon: "mdi mdi-album", feature: "Number of end products 1" },
      { icon: "mdi mdi-lifebuoy", feature: "Customer support", },
      { icon: "mdi mdi-update", feature: "Free Updates", },
      { icon: "mdi mdi-earth", feature: "1 Domain", },
      { icon: "mdi mdi-history", feature: "Email Support", },
      { icon: "mdi mdi-alarm-check", feature: "24x7 Support", }
    ],
    isRecommended: false,
  },
];

const Pricing = () => {
  return (
    <>
      <section className="section pb-0 bg-gradient" id="pricing">
        <div className="bg-shape">
          <img src={BGShape} alt="bg-img" className="img-fluid mx-auto d-block" />
        </div>

        <div className="container-fluid">
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center mb-4">
                <h3 className="text-white">Choose Our Pricing Plans</h3>
                <p className="text-white-50">
                  The clean and well commented code allows easy customization of
                  the theme.It's designed for describing your app, agency or
                  business.
                </p>
              </div>
            </Col>
          </Row>

          <Row className={"justify-content-center"}>
            <Col xl={10}>
              <Row className="align-items-center">
                {(plans || []).map((plan, idx) => {
                  return (
                    <Col lg={4} key={idx}>
                      <div className={classNames("pricing-plan p-4 mt-4", { "active": plan.isRecommended, "bg-white": !plan.isRecommended },)} >

                        {plan.isRecommended && <span className="lable">popular</span>}

                        <div className={classNames("pricing-header text-center", plan.isRecommended ? 'text-white' : '')}>

                          <h5 className="plan-title text-uppercase mb-4"> {plan.name}</h5>
                          <h1>
                            <sup><small>$</small></sup>
                            {plan.price}
                          </h1>
                          <div className={classNames("plan-duration", plan.isRecommended ? '' : 'plan-duration ')}>
                            Per {plan.duration}
                          </div>
                        </div>

                        <ul className={classNames("list-unstyled pricing-list mt-4", plan.isRecommended ? 'text-white' : '')}>
                          {(plan.features || []).map((featureItem, idx1) => {
                            return <li key={idx1}>
                              <i className={featureItem.icon}></i>
                              <p>{featureItem.feature}</p>
                            </li>;
                          })}
                        </ul>

                        <div className="text-center mt-5">
                          <button className={classNames("btn", "waves-effect", "waves-light", "mt-4", "mb-2", "width-sm", plan.isRecommended ? "btn-light" : "btn-primary")} >
                            Purchase Now
                          </button>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>

        </div >
      </section >
    </>
  );
};

export default Pricing;
